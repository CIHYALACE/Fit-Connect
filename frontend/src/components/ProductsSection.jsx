export default function ProductsSection() {
  return (
    <>
      <div className="vh-100 container mt-5">
        <h3 className="big-shoulders fw-bold mb-4">Trainig Program:</h3>
        <div className="d-flex justify-content-between flex-wrap h-75 text-center">

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#"><img src="../../public/pexels-ivan-samkov-4162459.jpg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Program Name</h4></a>
            <p>Author:Author Name</p>
            <p>Price:Program Price</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#"><img src="../../public/pexels-ivan-samkov-4162459.jpg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Program Name</h4></a>
            <p>Author:Author Name</p>
            <p>Price:Program Price</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#"><img src="../../public/pexels-ivan-samkov-4162459.jpg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Program Name</h4></a>
            <p>Author:Author Name</p>
            <p>Price:Program Price</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#"><img src="../../public/pexels-ivan-samkov-4162459.jpg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Program Name</h4></a>
            <p>Author:Author Name</p>
            <p>Price:Program Price</p>
          </div>

          {/* <div className="col-6 col-md-3 d-none d-md-block">
            <img src="../../public/pexels-ivan-samkov-4162459.jpg" width={"100%"} alt="" />
            <h4 className="big-shoulders fw-bold">Program Name</h4>
            <p>Author:Author Name</p>
            <p>Price:Program Price</p>
          </div> */}

        </div>
      </div>
    </>
  );
}
