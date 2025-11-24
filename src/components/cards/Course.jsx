import { NavLink } from "react-router";
export default function CourseCard() {
  return (
    <div className="card">
      <div className="">
        <img
          src={`${process.env.PUBLIC_URL}/img/bg1.png`}
          className="w-100 h-100 card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-bold">Learn Python</h5>
        <p className="card-text">This is Description</p>
        <span>Duration : 3 Hour</span>
      </div>
      <ul className="list-group list-group-flush text-center align-items-center">
        <li className="list-group-item w-100">
          <NavLink to="#" className="text-deco-none">
            <button type="button" className="btn btn-danger  d-block text-bold">
              Documentation
            </button>
          </NavLink>
        </li>
        <li className="list-group-item w-100">
          {" "}
          <NavLink to={`/course/details/#`} className="text-deco-none">
            <button
              type="button"
              className="btn btn-secondary d-block text-bold"
            >
              Details{" "}
            </button>{" "}
          </NavLink>
        </li>
        <li className="list-group-item w-100">
          <button type="button" className="btn btn-primary d-block text-bold">
            Add To My
          </button>
        </li>
      </ul>
    </div>
  );
}
