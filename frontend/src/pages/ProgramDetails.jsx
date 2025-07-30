import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrainingPrograms, getTrainersList } from "../api/api";
import ProgramHero from "../components/ProgramDetails/ProgramHero";
import IncludedMaterials from "../components/ProgramDetails/IncludedMaterials";
import TrainerPreview from "../components/ProgramDetails/TrainerPreview";

export default function ProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
//   const [trainers, setTrainers] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
    fetchTrainers();
  }, []);

  useEffect(() => {
    if (programs.length > 0 && id) {
      const foundProgram = programs.find(
        (program) => program.id === parseInt(id)
      );
      setProgram(foundProgram);
    }
  }, [id, programs]);

  // ! To Fetch Programs
  const fetchPrograms = async () => {
    try {
      const response = await getTrainingPrograms();
      setPrograms(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  // ! To Fetch Trainers
  const fetchTrainers = async () => {
    try {
      const response = await getTrainersList();
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div>
      <ProgramHero program={program} />
      <div className="row justify-content-center mb-6">
        <div className="col-md-9 position-relative">
          <div className="position-absolute start-0 top-0 h-100 border-start border-3 border-warning"></div>
          <p className="fs-2 ps-5">
            "Master the {program.title} methodology—
            <span className="fw-bold">
              {program.duration.split(" ")[0]} months
            </span>{" "}
            to completely redefine your physique."
          </p>
        </div>
      </div>
      <IncludedMaterials />
      <TrainerPreview auther={program.auther}/>
    </div>
  );
}
