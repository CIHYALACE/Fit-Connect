export default function HeroSection() {
  return (
    <>
      <div className="mt-5 px-5 vh-100">

        <h1 className="fw-bolder big-shoulders">
          Commit to Fit, Commit to You
        </h1>

        <div className="d-flex gap-3 flex-wrap">
          <p className="text-muted font-verdana col-12 col-md-6">
            Break barriers, smash goals—200+ trainers are here to fuel your
            success!
          </p>
          <a className="btn btn-dark ms-auto col-5 col-md-2 ">Learn More</a>
        </div>

        <div className="mt-2 d-flex justify-content-center align-items-center overflow-hidden border border-2 border-muted rounded responsive-height">
            <video
              className="w-100"
              src="../../public/a Cinematic Fitness Video...SONY FX6(4K_HD).webm"
              muted
              autoPlay
              loop/>
        </div>

        <div className="d-flex flex-wrap mt-3 justify-content-center">
    <div className="border border-2 border-muted rounded col-6 col-md-4 col-lg-3 px-4 bg-dark">
        <h2 className="fw-bold text-light">200+</h2>
        <p className="text-light">Trainers</p>
    </div>

    <div className="border border-2 border-muted rounded col-6 col-md-4 col-lg-3 px-3 bg-dark">
        <h2 className="fw-bold text-light">50+</h2>
        <p className="text-light">Training Program</p>
    </div>

    <div className="border border-2 border-muted rounded col-6 col-md-4 col-lg-3 px-4 bg-dark">
        <h2 className="fw-bold text-light">3K+</h2>
        <p className="text-light">Active Users</p>
    </div>

    <div className="border border-2 border-muted rounded col-6 col-md-4 col-lg-3 px-3 bg-dark">
        <h2 className="fw-bold text-light">16K+</h2>
        <p className="text-light">Transformation</p>
    </div>
</div>


      </div>
    </>
  );
}
