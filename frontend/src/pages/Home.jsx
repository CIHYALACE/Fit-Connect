import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import CouchesSection from "../components/CouchesSection";
import { useEffect , useState } from "react";
import { getTrainingPrograms } from "../api/api";


export default function Home() {

  const [programs, setProgramss] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await getTrainingPrograms();
      console.log(response.data);
      setProgramss(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  }
  if (programs && programs.length > 0) {
    console.log(`Programs:`, programs[programs.length - 1]);
  }

  return (
    <>
      <HeroSection />
      <ProductsSection />
      <CouchesSection />
    </>
  );
}