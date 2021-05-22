function Item(props){
    return (
      <li>
          <div className='log'>
              <img src={props.img} />
              {props.title}            
          </div>
          <div className="desc">{props.desc}</div>
      </li>
    )
}

export default Item;