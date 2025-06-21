export default function TrainingCard({name, auther, price, img}) {
    return(
        <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#" className="program-card"><img src={img} alt=""/></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">{name}</h4></a>
            <p>Author:{auther}</p>
            <p>Price: {price}$</p>
        </div>
    )
};