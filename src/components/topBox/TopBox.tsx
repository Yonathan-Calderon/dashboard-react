import "./topBox.scss";
import { userData } from "../../data.ts"; // Importa el objeto userData

const TopBox = () => {
  const { topDealUsers } = userData.userData; // Accede a la lista de topDealUsers dentro de userData

  return (
    <div className="topBox">
      <h1>Prospects</h1>
      <div className="list">
        {topDealUsers.map((user) => (
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
