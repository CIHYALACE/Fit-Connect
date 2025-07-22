export default function TrainerCard({ first_name, last_name, img }) {
  return (
    <div className="h-100 d-flex flex-column">
      <div className="profile-card-2 trainer-card position-relative overflow-hidden rounded-3 mb-3" style={{ paddingBottom: '133.33%' }}>
        <img
          src={img}
          className="position-absolute w-100 h-100"
          alt="Profile image"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="profile-name">
            <a href="#" className="text-light text-decoration-none">
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
