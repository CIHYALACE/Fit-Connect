export default function ProductsSection() {
  return (
    <>
      <div className="vh-100 container mt-5">
        <h3 className="big-shoulders fw-bold mb-4">Trainig Program:</h3>
        <div className="d-flex justify-content-between flex-wrap h-75 text-center">

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#" className="program-card"><img src="../../public/Elite_Alex.jpeg" alt=""/></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Elite</h4></a>
            <p>Author:ALex Eubank</p>
            <p>Price: 99$</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#" className="program-card"><img src="../../public/LowImpact_Informa.jpeg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Low Impact</h4></a>
            <p>Author: Informa</p>
            <p>Price: 49$</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#" className="program-card"><img src="../../public/SummerForm_Hossam.jpeg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Summer Form</h4></a>
            <p>Author: Hossam</p>
            <p>Price: 49$</p>
          </div>

          <div className="col-6 col-md-3 px-1 px-md-4">
            <a href="#" className="program-card"><img src="../../public/Peak_Alex.jpeg" width={"100%"} alt="" /></a>
            <a href="#" className="text-decoration-none "><h4 className="big-shoulders fw-bold text-dark ">Peak Perfomance</h4></a>
            <p>Author: Alex Eubank</p>
            <p>Price: 99$</p>
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
