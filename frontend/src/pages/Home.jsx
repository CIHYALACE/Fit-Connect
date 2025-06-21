import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import CouchesSection from "../components/CouchesSection";
import { useEffect , useState } from "react";
import { getTrainingPrograms } from "../api/api";
import { getCoachesList } from "../api/api";


export default function Home() {

  const [programs, setProgramss] = useState([]);
  const [coaches, setCoaches] = useState([])

  useEffect(() => {
    fetchPrograms();
    fetchCoaches();
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

// ! To Fetch Coaches
  const fetchCoaches = async () => {
    try {
      const response = await getCoachesList();
      // console.log("Coaches: ",response.data);
      setCoaches(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  }
  if (coaches && coaches.length > 0) {
    console.log(`Coaches:`, coaches);
  }

  return (
    <>
      <HeroSection />
      <ProductsSection programs={programs}/>
      <CouchesSection />
    </>
  );
}