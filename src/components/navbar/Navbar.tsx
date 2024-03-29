import "./navbar.scss";
import { userData } from "../../data.ts"; 

const Navbar = () => {
  const { userName } = userData.userData; 
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>calderonDev</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>{userName}</span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
