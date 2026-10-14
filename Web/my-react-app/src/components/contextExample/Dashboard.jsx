import { useContext } from "react"
import UserContext from "./UserContext"

const Dashboard = () => {
    const {logout , user} = useContext(UserContext)
    return(
        <>
        <h4>This is Home Page</h4>

        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard