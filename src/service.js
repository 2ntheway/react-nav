const Koa = require("koa2");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const port = 8080;
const cors = require("koa-cors");
//引入puppeteer
const puppeteer = require("puppeteer");
//创建爬取数据的函数
let getNewList = async () => {
  //创建一个Browser（浏览器）实例
  // linux下启动chrome的方式必须加--no-sandbox参数
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });
  /*   const browser = await puppeteer.launch();
   */ //在浏览器中创建一个新的页面
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
app.use(cors());
router.get("/", async (ctx) => {
  ctx.body = "首页";
});

router.get("/weibo", async (ctx) => {
  ctx.body = await getNewList().then((res) => {
    //将爬取的数据转为json格式
    console.log(JSON.stringify(res));
    return JSON.stringify(res);
    //指定存储数据的json文件
  });
});

router.get("/list", async (ctx) => {
  ctx.body = { data: ["hello", "dell", "lee"] };
});
router.get("/data", async (ctx) => {
  ctx.body = {
    data: [
      {
        group: "团队组织",
        list: [
          {
            title: "腾讯 AlloyTeam 团队",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/HjaynsfWE8gbu4T.jpg",
          },
          {
            title: "ISUX",
            desc: "腾讯社交用户体验设计，简称ISUX",
            img: "https://i.loli.net/2021/05/23/7bDg6kHWnZrNI29.jpg",
          },
          {
            title: "FEX",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/ndc9frblL2ABi3v.jpg",
          },
          {
            title: "淘宝前端团队（FED）",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/Eyk8SUFfGIhJtQn.jpg",
          },
          {
            title: "凹凸实验室",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/N9gziMoA6IVvB7p.png",
          },
          {
            title: "奇舞团",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/JLcb9YZxMP38O4Q.png",
          },
          {
            title: "阿里巴巴国际UED团队",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/tAR2PGNWDhzBmi4.png",
          },
          {
            title: "EFE",
            desc: "由百度多个遵循统一技术体系的前端团队所组成",
            img: "https://i.loli.net/2021/05/23/SZWMLPuIjneJEGH.jpg",
          },
        ],
      },
      {
        group: "团伙作战",
        list: [
          {
            title: "腾讯 AlloyTeam 团队",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/HjaynsfWE8gbu4T.jpg",
          },
          {
            title: "ISUX",
            desc: "腾讯社交用户体验设计，简称ISUX",
            img: "https://i.loli.net/2021/05/23/7bDg6kHWnZrNI29.jpg",
          },
          {
            title: "FEX",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/ndc9frblL2ABi3v.jpg",
          },
          {
            title: "淘宝前端团队（FED）",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/Eyk8SUFfGIhJtQn.jpg",
          },
          {
            title: "凹凸实验室",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/N9gziMoA6IVvB7p.png",
          },
          {
            title: "奇舞团",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/JLcb9YZxMP38O4Q.png",
          },
          {
            title: "阿里巴巴国际UED团队",
            desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
            img: "https://i.loli.net/2021/05/23/tAR2PGNWDhzBmi4.png",
          },
          {
            title: "EFE",
            desc: "由百度多个遵循统一技术体系的前端团队所组成",
            img: "https://i.loli.net/2021/05/23/SZWMLPuIjneJEGH.jpg",
          },
        ],
      },
    ],
  };
});
app.use(router.routes(), router.allowedMethods);

app.listen(port, () => {
  console.log(`Servering is running at http://localhost:${port}`);
});
