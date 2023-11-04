import { useState } from "react";
import UserList from "./UserList";
import { userdata } from "../../FakeData";
const User = () => {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("hema");
    const [listOfUser, setlistOfUser] = useState(userdata);
    const deleteUser = (id) => {
        const exceptDeleted = listOfUser.filter((user)=>user.user_id!==id)
        setlistOfUser(exceptDeleted)
    }

    return (
        <div style={{ textAlign: "center" }}>
            {/* <button className="btn btn-primary" onClick={() => setcount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button className="btn btn-danger" onClick={() => setcount(count - 1)}>-</button>
            <button className="btn btn-danger" onClick={() => setname("tanushree")}>Change Name</button>
            <h1>{name}</h1> */}
            <UserList listOfUser={listOfUser} deleteuser={deleteUser} />
        </div>
    )
}
export default User;