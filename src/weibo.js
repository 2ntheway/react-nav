//引入puppeteer
const puppeteer = require("puppeteer");
//引入node文件系统模块(fs)
const fs = require("fs");
//引入node文件路径模块(path)
const path = require("path");
//创建爬取数据的函数
let getNewList = async () => {
  //创建一个Browser（浏览器）实例
  /*   linux下启动chrome的方式必须加--no-sandbox参数
   */ /*   const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true
}) */
  const browser = await puppeteer.launch();
  //在浏览器中创建一个新的页面
  const page = await browser.newPage();
  //打开百度新闻页面
  await page.goto("https://s.weibo.com/top/summary?cate=realtimehot");
  //等待“序号”出现
  await page.waitForSelector("#pl_top_realtimehot > table > thead > tr");
  //通过evaluate函数执行自定义的js代码获取要爬取的数据
  const newList = await page.evaluate(() => {
    //创建一个空数组接收爬取的数据
    let data = [];
    //获取所有热榜列表tr元素
    let elements = document.querySelectorAll(
      "#pl_top_realtimehot > table > tbody > tr"
    );
    // 利用循环将即时列表的标题、连接、点击量添加到一个数组中;
    for (let i = 0; i < elements.length; i++) {
      const titleSelector = elements[i].querySelector(".td-02 >  a");
      const viewSelector = elements[i].querySelector(".td-02 > span");
      //获取热榜的标签
      let title = titleSelector.innerText;

      //获取链接地址
      let url = "https://s.weibo.com" + titleSelector.getAttribute("href");

      //获取阅读量
      let views = 0; // 页面上可能没有阅读量
      if (viewSelector) {
        views = viewSelector.innerText;
      }

      //将获取到内容添加到数组中
      data.push({
        title,
        url,
        views,
      });
    }
    // 返回数组;
    return data;
  });
  //关闭浏览器实例
  await browser.close();
  //返回爬取的数据
  return newList;
};
//执行函数获取爬取的数据
getNewList().then((res) => {
  //将爬取的数据转为json格式
  let list = JSON.stringify(res);
  console.log(list);
  //指定存储数据的json文件
  let file = path.join(__dirname, "newList.json");
  //将爬取的数据写入json文件
  fs.writeFile(file, list, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});
