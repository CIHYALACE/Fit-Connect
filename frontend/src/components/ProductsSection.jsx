import React, { useState , useEffect} from "react";
import TrainingCard from "./TrainingCard";

export default function ProductsSection({programs}) {

useEffect(() => {
  if (programs && programs.length > 0) {
    console.log(programs);
  }
}, [programs]);


  let dumbData = [
    {
      "id":1,
      "name":"Elite",
      "auther":"Alex Eubank",
      "price":99,
      "img":"Elite_Alex.jpeg"
    },
    {
      "id":2,
      "name":"Low Impact",
      "auther":"Informa",
      "price":49,
      "img":"LowImpact_Informa.jpeg"
    },
    {
      "id":3,
      "name":"Peak Performanc",
      "auther":"Alex Eubank",
      "price":99,
      "img":"Peak_Alex.jpeg"
    },
    { 
      "id":4,
      "name":"Summer Form",
      "auther":"Alex Eubank",
      "price":49,
      "img":"SummerForm_Hossam.jpeg"
    },

  ]
  return (
    <>
      <div className="vh-100 container mt-5">
        <h3 className="big-shoulders fw-bold mb-4 ">Trainig Programs:</h3>
        <div className="d-flex justify-content-between flex-wrap h-75 text-center">
        
        {dumbData.slice(0, 4).map((item,id) =>(
            <TrainingCard key={id} name={item.name} auther={item.auther} price={item.price} img={item.img} />
        ))}

        </div>
      </div>
    </>
  );
}
