import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CertificationsSection from "../components/CertificationsSection";
import ClientTranformationSection from "../components/ClientTranformationSection";
import TrainingPrograms from "../components/TrainerProfile/TrainingPrograms";
import PakagesSection from "../components/TrainerProfile/PackagesSection";
import ContantSection from "../components/TrainerProfile/ContantSection";
import { trainersData, testimonialsData, programsData } from "../components/DumbData";

export default function TrainerProfile() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const trainer = trainersData.find((trainer) => trainer.id === parseInt(id));
    setTrainer(trainer);
  }, [id]);

  if (!trainer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-5">
      <div>
        <div className="row mb-5 align-items-center justify-content-center">
          <div className="col-md-10">
            <div className="row align-items-center ">
              <div className="col-xl-6 col-lg-7 col-md-12 col-12 order-1 text-center text-lg-start ">
                <span className="text-dark mb-3 d-block text-uppercase fw-semibold ls-xl">
                  YOUR {trainer.speciality} COACH
                </span>
                <h2 className="mb-2 display-4 fw-bold mb-3">
                  <span className="text-dark-gradient">
                    {trainer.first_name} {trainer.last_name}
                  </span>
                  <br />
                </h2>
                <p className="fs-3 pe-2">{trainer.bio}</p>

                <hr className="my-5" />
                <div className="row">
                  <div className="col-sm mb-3 mb-lg-0">
                    <h2 className="h1 fw-bold mb-0 ls-xs">45</h2>
                    <p className="mb-0">Training Program</p>
                  </div>
                  <div className="col-lg-5 col-sm mb-3 mb-lg-0">
                    <h2 className="h1 fw-bold mb-0 ls-xs">10,500+</h2>
                    <p className="mb-0">Transformition</p>
                  </div>
                  <div className="col-sm mb-3 mb-lg-0">
                    <h2 className="h1 fw-bold mb-0 ls-xs">{trainer.experience}+</h2>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-5 col-lg-5 col-12 mb-6 mb-lg-0 order-lg-2 text-center mt-3">
                <img
                  src={`/${trainer.img}`}
                  alt=""
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CertificationsSection />
      <ClientTranformationSection testimonials={testimonialsData} />
      <TrainingPrograms programs={programsData} />
      <PakagesSection />
      <ContantSection trainer={trainer} />
    </div>
  );
}
