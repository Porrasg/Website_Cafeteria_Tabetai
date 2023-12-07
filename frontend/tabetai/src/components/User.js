import Signup from './Signup/Signup';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import { useState } from "react";
import ViewsAdmin from './ViewsAdmin/ViewsAdmin';


const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div>
                <Logout setCurrUser={setCurrUser}/>
                <br></br>
                <ViewsAdmin></ViewsAdmin> {currUser.email}
            </div>
        )
    return (
        <div>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>  
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}
export default User