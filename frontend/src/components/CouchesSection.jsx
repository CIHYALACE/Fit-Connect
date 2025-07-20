export default function CouchesSection() {
    return (
        <section className="d-flex align-items-center w-100">
            <div className="container-fluid mx-0 px-3 px-lg-5 ">
                <div className="row g-0 align-items-center bg-gradient-dark overflow-hidden rounded-4">
                    {/* Text Content */}
                    <div className="col-12 col-lg-6 p-5 p-xl-5 mt-5 mt-lg-0 order-lg-1">
                        <div className="max-w-lg mx-auto py-4">
                            <span className="badge bg-light text-dark mb-3 px-3 py-2 fw-semibold">New Collection</span>
                            <h1 className="display-4 fw-bold text-white mb-4">Elevate Your Living Space</h1>
                            <p className="lead text-white-80 mb-5">
                                Discover handcrafted couches blending ergonomic support with timeless elegance. 
                                Each piece is designed for lasting comfort and sophisticated style.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <button className="btn btn-light px-lg-4 py-3 fw-semibold rounded-1">
                                    Explore Collection
                                </button>
                                <button className="btn btn-outline-light px-lg-4 py-3 fw-semibold rounded-1">
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="col-12 col-lg-6 order-lg-2 position-relative mb-5 mb-lg-0">
                        <img 
                            src="/BigMan.jpeg" 
                            alt="Luxury couch in modern living room" 
                            className="img-fluid w-75 object-fit-cover"
                        />
                        <div className="position-absolute bottom-0 end-0 p-3 p-md-4">
                            <div className="bg-white text-dark p-2 p-md-3 rounded-3 shadow-sm">
                                <p className="mb-1 fw-bold fs-6 fs-md-5">"Best comfort I've ever experienced"</p>
                                <div className="d-flex align-items-center">
                                    <span className="text-warning me-1">★★★★★</span>
                                    <small className="text-muted">4.9/5</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}