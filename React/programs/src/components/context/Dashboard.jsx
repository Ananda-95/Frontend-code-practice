import { useContext } from "react"
import UserContext from "./UserContext"
const Dashboard = () => {
    const {logout, user} = useContext(UserContext)
    return(
        <>
        <h2>Welcome {user}</h2>
        <button onClick={logout}>Logout</button>
        <div>
            
        </div>
        </>
    )
}
export default Dashboard