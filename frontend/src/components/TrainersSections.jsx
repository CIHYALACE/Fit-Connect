import { useState , useEffect} from "react";
import TrainerCard from "./TrainerCard";
export default function TrainersSection({trainers}) {

  return (
    <section className="py-5">
      <div className="mx-3 mx-lg-5">
        <div className="text-center mb-5">
          <h3 className="big-shoulders fw-bold d-inline-block border-bottom border-3 border-dark pb-2">Top Trainers</h3>
        </div>
        <div className="row g-4">
          {trainers.slice(0, 4).map((item, id) => (
            <div key={id} className="col-6 col-sm-6 col-lg-3">
              <TrainerCard
                id={item.id}
                first_name={item.user.first_name}
                last_name={item.user.last_name} 
                img={item.profile_picture} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
