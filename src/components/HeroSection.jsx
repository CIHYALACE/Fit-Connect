export default function HeroSection() {
  return (
    <>
      <div className="mt-5 px-5 vh-100">

        <h1 className="fw-bolder sans-serif">
          Commit to Fit, Commit to You
        </h1>

        <div className="d-flex gap-3">
          <p className="text-muted font-verdana">
            Break barriers, smash goals—200+ trainers are here to fuel your
            success!
          </p>
          <a className="btn btn-dark ms-auto">Learn More</a>
        </div>

        <div className="mt-2 h-50 overflow-hidden border border-2 border-muted rounded">
            <video
              className="w-100"
              src="https://www.youtube.com/embed/Sc7LUjbKBHw?si=9yX1SBn4IcMFp6NX"
              muted
              autoPlay/>
        </div>

        <div className="d-flex gap-3 mt-3">
            <div className="border border-2 border-muted rounded w-25 px-3 bg-dark">
                <h2 className="fw-bolder sans-serif text-light">200+</h2>
                <p className="font-verdana text-light">Trainers</p>
            </div>

            <div className="border border-2 border-muted rounded w-25 px-3 bg-dark">
                <h2 className="fw-bolder sans-serif text-light">50+</h2>
                <p className="font-verdana text-light">Training Programs</p>
            </div>

            <div className="border border-2 border-muted rounded w-25 px-3 bg-dark">
                <h2 className="fw-bolder sans-serif text-light">3K+</h2>
                <p className="font-verdana text-light">Avtice Users</p>
            </div>

            <div className="border border-2 border-muted rounded w-25 px-3 bg-dark">
                <h2 className="fw-bolder sans-serif text-light">16K+</h2>
                <p className="font-verdana text-light">Transformation</p>
            </div>

        </div>

      </div>
    </>
  );
}
