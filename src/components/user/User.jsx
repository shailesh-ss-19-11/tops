import { useState } from "react";
import UserList from "./UserList";
import { userdata } from "../../FakeData";
import AddUser from "./AddUser";
const User = () => {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("hema");
    const [addvisible, setaddvisible] = useState(false);
    const [listOfUser, setlistOfUser] = useState(userdata);
    const deleteUser = (id) => {
        const exceptDeleted = listOfUser.filter((user)=>user.user_id!==id)
        setlistOfUser(exceptDeleted)
    }

    const updateUser = (data)=>{
        console.log(data)
        const newuserlist = [...listOfUser];
        const obj = newuserlist.find((user)=>user.user_id===data.user_id);
        const index = newuserlist.indexOf(obj);
        newuserlist.splice(index,1,data);
        console.log(listOfUser)
        setlistOfUser(newuserlist);
    }

    const adduserdata = (data)=>{
        console.log(data,"data")
        data["user_id"] = listOfUser.length+1;
        let newuserlist = [...listOfUser,data];
        setlistOfUser(newuserlist)
        setaddvisible(false)
    }

    return (
        <div className="container">
            
            {addvisible? <button className="btn btn-sm btn-danger" onClick={()=>setaddvisible(false)}>Hide Form</button>:
            <button className="btn btn-primary" onClick={()=>setaddvisible(true)}>Add User</button>}
            {
                addvisible?<AddUser adduserdata={adduserdata}/>:null
            }

            
            
            {/* <button className="btn btn-primary" onClick={() => setcount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button className="btn btn-danger" onClick={() => setcount(count - 1)}>-</button>
            <button className="btn btn-danger" onClick={() => setname("tanushree")}>Change Name</button>
            <h1>{name}</h1> */}
            <UserList listOfUser={listOfUser} deleteuser={deleteUser} updateUser={updateUser}/>
        </div>
    )
}
export default User;