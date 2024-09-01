import { Outlet } from "react-router-dom";
import { MainHeader } from "../../components/global";
import "./index.css";


const MainLayout = () => {

  return (
    <div className="main_layout_container">
      <MainHeader/>     
        <Outlet />     
    </div>
  );
};
export default MainLayout;
