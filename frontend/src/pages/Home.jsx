import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import WhyUsSection from "../components/WhyUsSection";
import CouchesSection from "../components/CouchesSection";
import TrainersSections from "../components/TrainersSections";
import { useEffect , useState } from "react";
import { getTrainingPrograms } from "../api/api";
import { getTrainersList } from "../api/api";


export default function Home() {

  const [programs, setPrograms] = useState([]);
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
      setPrograms(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
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

  return (
    <>
      <HeroSection />
      <ProductsSection programs={programs}/>
      <WhyUsSection />
      <CouchesSection />
      <TrainersSections trainers={Trainers}/>
    </>
  );
}