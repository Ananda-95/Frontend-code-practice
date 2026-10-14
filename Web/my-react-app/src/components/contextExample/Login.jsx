import { useState, useContext } from "react";
import UserContext from "./UserContext";

const Login = () => {
    const {login} = useContext(UserContext);

    const [username, setUsername]=useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if(username==="admin" && password==="123"){
            login(username)
        }else{
            alert("invalid credentials")
        }
    }


    return(
        <div>
            <input type="text" value={username} name="username" onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Submit</button>
        </div>
    )

}

export default Login