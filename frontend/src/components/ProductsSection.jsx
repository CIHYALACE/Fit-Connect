import { useNavigate } from "react-router-dom";
import TrainingCard from "./TrainingCard";

export default function ProductsSection({programs}) {
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <div className="mx-3 mx-lg-5">
        <div className="text-center mb-5">
          <h3 className="big-shoulders fw-bold d-inline-block border-bottom border-3 border-dark pb-2">Training Programs</h3>
        </div>
        <div className="row g-4">
          {programs.slice(0, 4).map((item, id) => (
            <div key={id} className="col-6 col-sm-6 col-lg-3">
              <TrainingCard 
                id={item.id}
                name={item.title} 
                auther={item.auther.user.username} 
                price={item.price} 
                img={item.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
