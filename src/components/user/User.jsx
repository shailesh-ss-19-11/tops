import { useState } from "react";
import UserList from "./UserList";

const User = () => {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("hema");
    return (
        <div style={{ textAlign: "center" }}>
            {/* <button className="btn btn-primary" onClick={() => setcount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button className="btn btn-danger" onClick={() => setcount(count - 1)}>-</button>
            <button className="btn btn-danger" onClick={() => setname("tanushree")}>Change Name</button>
            <h1>{name}</h1> */}
            <UserList/>
        </div>
    )
}
export default User;