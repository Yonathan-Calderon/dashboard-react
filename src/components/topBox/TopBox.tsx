import "./topBox.scss";
import { userData } from "../../data.ts"; 

const TopBox = () => {
  const { listProspectsSellers, listProspectSellers } = userData.userData; 

  return (
    <div className="topBox">
      <h1>{listProspectSellers}</h1>
      <div className="list">
        {listProspectsSellers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
