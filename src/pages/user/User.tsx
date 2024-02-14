
import Single from "../../components/single/Single"
import { userData } from "../../data.ts"; 

import "./user.scss"

const User = () => {
  const { singleUser } = userData.userData;

  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User;
