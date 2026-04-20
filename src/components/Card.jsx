

function Card({img , title , desc , link ,text}) {
    return (
       
        <div className="card">
          <img src={img}/>
          <div className="card-body"> 
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={link} className="btn">{text}</a>
          </div>
        </div>
    
    )
}
export default Card;