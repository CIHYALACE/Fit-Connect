export default function CouchesSection() {
    return (
        <>
            <div className="responsive-height-2 responsive-height-portrait container rounded bg-dark d-flex justify-content-center align-items-center flex-wrap overflow-hidden">
                <div className="col-12 col-md-6 text-box mt-5 mt-md-0">
                    <h1 className="text-white mb-4">Couches</h1>
                    <p className="text-white mb-2">Upgrade your home with our luxurious, high-quality couches. Perfect comfort, timeless design—because you deserve the best.</p>
                    <button className="btn btn-light">View Couches</button>
                </div>
                <img src="/BigMan.jpeg" alt="Couches" className=" align-self-end align-self-md-start col-12 col-md-3 position-relative" />

            </div>
        </>
    )
}