import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import WhyUsSection from "../components/WhyUsSection";
import CouchesSection from "../components/CouchesSection";
import TrainersSections from "../components/TrainersSections";
import { useEffect , useState } from "react";
import { getTrainingPrograms } from "../api/api";
import { getTrainersList } from "../api/api";


export default function Home() {

  const [programs, setProgramss] = useState([]);
  const [Trainers, setTrainers] = useState([])

  useEffect(() => {
    fetchPrograms();
    fetchTrainers();
  }, []);
// ! To Fetch Programs
  const fetchPrograms = async () => {
    try {
      const response = await getTrainingPrograms();
      // console.log("Programs: ",response.data);
      setProgramss(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  }
  if (programs && programs.length > 0) {
    console.log(`Programs:`, programs);
  }

// ! To Fetch Trainers
  const fetchTrainers = async () => {
    try {
      const response = await getTrainersList();
      // console.log("Trainers: ",response.data);
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  }
  if (Trainers && Trainers.length > 0) {
    console.log(`Trainers:`, Trainers);
  }

  return (
    <>
      <HeroSection />
      <ProductsSection programs={programs}/>
      <WhyUsSection />
      <CouchesSection />
      <TrainersSections Trainers={Trainers}/>
    </>
  );
}