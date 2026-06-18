import { Link } from "react-router-dom";

const SideBar = ({ sideBarVisible }) => {
  return (
    <div
      className={`border-end bg-white ${
        sideBarVisible ? "" : "d-none"
      }`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading border-bottom bg-light">
        Start Bootstrap
      </div>

      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
          Add Food
        </Link>

        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">
          List Foods
        </Link>

        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
