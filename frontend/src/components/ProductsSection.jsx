import React, { useState , useEffect} from "react";
import TrainingCard from "./TrainingCard";
import { programsData } from "../components/DumbData";

export default function ProductsSection({programs}) {

useEffect(() => {
  if (programs && programs.length > 0) {
    console.log(programs);
  }
}, [programs]);

  return (
    <section className="py-5">
      <div className="mx-3 mx-lg-5">
        <div className="text-center mb-5">
          <h3 className="big-shoulders fw-bold d-inline-block border-bottom border-3 border-dark pb-2">Training Programs</h3>
        </div>
        <div className="row g-4">
          {programsData.slice(0, 4).map((item, id) => (
            <div key={id} className="col-6 col-sm-6 col-lg-3">
              <TrainingCard 
                name={item.name} 
                auther={item.auther} 
                price={item.price} 
                img={item.img} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
