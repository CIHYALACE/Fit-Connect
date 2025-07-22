import { useState , useEffect} from "react";
import TrainerCard from "./TrainerCard";
import { trainersData } from "../components/DumbData";
export default function TrainersSection({programs}) {

useEffect(() => {
  if (programs && programs.length > 0) {
    console.log(programs);
  }
}, [programs]);

  return (
    <section className="py-5">
      <div className="mx-3 mx-lg-5">
        <div className="text-center mb-5">
          <h3 className="big-shoulders fw-bold d-inline-block border-bottom border-3 border-dark pb-2">Top Trainers</h3>
        </div>
        <div className="row g-4">
          {trainersData.slice(0, 4).map((item, id) => (
            <div key={id} className="col-6 col-sm-6 col-lg-3">
              <TrainerCard
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name} 
                img={item.img} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
