import { Outlet } from "react-router-dom";

const DashBoardContent = () => {
  return (
    <div className="custom-container">
      <Outlet />
    </div>
  );
}

export default DashBoardContent;