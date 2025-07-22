import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CertificationsSection from "../components/CertificationsSection";

let dumbData = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Eubank",
    img: "Alex_Eubank.jpg",
    speciality: "Fitness",
    bio: "Fitness coach & influencer helping people transform.",
    experience: 5
  },
  {
    id: 2,
    first_name: "Informa",
    last_name: "Impact",
    img: "Informa.jpg",
    speciality: "Bodybuilding",
    bio: "Helping bodybuilders reach their peak.",
    experience: 7
  },
  {
    id: 3,
    first_name: "David",
    last_name: "Laid",
    img: "David_Laid.jpg",
    speciality: "Aesthetics",
    bio: "Blending strength and aesthetics through intelligent training.",
    experience: 6
  },
  {
    id: 4,
    first_name: "Ahmed",
    last_name: "Hossam",
    img: "Ahmed_hossam.jpg",
    speciality: "Strength Training",
    bio: "Passionate about empowering athletes with structured routines.",
    experience: 8
  },
  {
    id: 5,
    first_name: "Sarah",
    last_name: "FitZone",
    img: "Sarah_FitZone.jpg",
    speciality: "HIIT & Cardio",
    bio: "High-energy sessions for fat-burning and endurance building.",
    experience: 4
  },
  {
    id: 6,
    first_name: "Mohamed",
    last_name: "ElCoach",
    img: "Mohamed_ElCoach.jpg",
    speciality: "Calisthenics",
    bio: "Specialist in bodyweight training and mobility.",
    experience: 5
  },
  {
    id: 7,
    first_name: "Lina",
    last_name: "Wellness",
    img: "Lina_Wellness.jpg",
    speciality: "Yoga & Flexibility",
    bio: "Helping clients find inner peace through yoga and flexibility.",
    experience: 6
  }
  ]

export default function TrainerProfile() {

    const {id} = useParams();
    const [trainer, setTrainer] = useState(null);

    useEffect(() => {
      const trainer = dumbData.find((trainer) => trainer.id === parseInt(id));
      setTrainer(trainer);
    }, [id]);

    if (!trainer) {
      return <div>Loading...</div>;
    }

  return (
      <div class="mx-5">
        <div>
          <div class="row mb-5 align-items-center justify-content-center">
            <div class="col-md-10">
              <div class="row align-items-center ">
                <div class="col-xl-6 col-lg-7 col-md-12 col-12 order-1 text-center text-lg-start ">
                  <span class="text-dark mb-3 d-block text-uppercase fw-semibold ls-xl">
                    YOUR {trainer.speciality} COACH
                  </span>
                  <h2 class="mb-2 display-4 fw-bold mb-3">
                    <span class="text-dark-gradient">{trainer.first_name} {trainer.last_name}</span>
                    <br />
                  </h2>
                  <p class="fs-3 pe-2">
                    {trainer.bio}
                  </p>

                  <hr class="my-5" />
                  <div class="row">
                    <div class="col-sm mb-3 mb-lg-0">
                      <h2 class="h1 fw-bold mb-0 ls-xs">45</h2>
                      <p class="mb-0">Training Program</p>
                    </div>
                    <div class="col-lg-5 col-sm mb-3 mb-lg-0">
                      <h2 class="h1 fw-bold mb-0 ls-xs">10,500+</h2>
                      <p class="mb-0">Transformition</p>
                    </div>
                    <div class="col-sm mb-3 mb-lg-0">
                      <h2 class="h1 fw-bold mb-0 ls-xs">{trainer.experience}+</h2>
                      <p class="mb-0">Years Experience</p>
                    </div>
                  </div>
                </div>
                <div class="offset-xl-1 col-xl-5 col-lg-5 col-12 mb-6 mb-lg-0 order-lg-2 text-center mt-3">
                  <img
                    src={`/${trainer.img}`}
                    alt=""
                    class="img-fluid rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CertificationsSection />
      </div>
  );
}
