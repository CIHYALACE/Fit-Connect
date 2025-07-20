export default function TrainingCard({name, auther, price, img}) {
    return (
        <div className="h-100 d-flex flex-column">
            <div className="program-card position-relative overflow-hidden rounded-3 mb-3" style={{ paddingBottom: '133.33%' }}>
                <img 
                    src={img} 
                    alt={name} 
                    className="position-absolute w-100 h-100"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        top: 0,
                        left: 0
                    }}
                />
            </div>
            <div className="mt-auto">
                <h4 className="big-shoulders fw-bold text-dark mb-1">{name}</h4>
                <p className="mb-1 text-muted">By {auther}</p>
                <p className="fw-bold mb-0">${price}</p>
            </div>
        </div>
    )
};