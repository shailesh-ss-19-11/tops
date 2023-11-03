import { useState } from "react";
import { userdata } from "../../FakeData";
const UserList = () => {
    console.log(userdata)
    const [listOfUser, setlistOfUser] = useState(userdata);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">Postal Code</th>
                        <th scope="col">phone Number</th>
                        <th scope="col">DOB</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfUser.length > 0 ?
                        listOfUser.map((user,index) => {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.country}</td>
                                    <td>{user.postal_code}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.birthdate}</td>
                                    <td><button className="btn btn-primary m-1">edit</button>
                                    <button className="btn btn-danger m-1">delete</button></td>
                                    
                                </tr>
                            )
                        }) : null}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;