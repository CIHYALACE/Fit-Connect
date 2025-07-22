import { useNavigate } from "react-router-dom";

export default function TrainerCard({id, first_name, last_name, img }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trainers/${id}`);
  };
  return (
    <div className="h-100 d-flex flex-column">
      <div className="profile-card-2 trainer-card position-relative overflow-hidden rounded-2 rounded-md-3 mb-0 mb-md-3" style={{ paddingBottom: '133.33%' }}>
        <img
          src={img}
          className="position-absolute w-100 h-100"
          alt="Profile image"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="profile-name">
            <a onClick={handleClick} className="text-light text-decoration-none flex-wrap-nowrap fs-6 fs-md-3" style={{ cursor: "pointer" }}>
                {first_name} {last_name}
            </a>
        </div>
        <div className="profile-username text-light">@johndoesurname</div>
        <div className="profile-icons">
          <a href="#">
            <i className="fab fa-facebook text-light mx-1"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok text-light mx-1"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-light mx-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
