import { useState , useEffect} from "react";
import TrainerCard from "./TrainerCard";
export default function TrainersSection({programs}) {

useEffect(() => {
  if (programs && programs.length > 0) {
    console.log(programs);
  }
}, [programs]);


  let dumbData = [
    {
      "id":1,
      "first_name":"Alex",
      "last_name":"Eubank",
      "img":"Alex_Eubank.jpg"
    },
    {
      "id":2,
      "first_name":"Informa",
      "last_name":"Impact",
      "img":"Informa.jpg"
    },
    {
      "id":3,
      "first_name":"David",
      "last_name":"Laid",
      "img":"David_Laid.jpg"
    },
    { 
      "id":4,
      "first_name":"Ahmed",
      "last_name":"Hossam",
      "img":"Ahmed_hossam.jpg"
    },

  ]
  return (
    <section className="py-5">
      <div className="mx-3 mx-lg-5">
        <div className="text-center mb-5">
          <h3 className="big-shoulders fw-bold d-inline-block border-bottom border-3 border-dark pb-2">Top Trainers</h3>
        </div>
        <div className="row g-4">
          {dumbData.slice(0, 4).map((item, id) => (
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
