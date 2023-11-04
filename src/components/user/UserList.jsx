import { useState } from "react";
const UserList = (props) => {
    console.log(props);
    
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
                    {props.listOfUser.length > 0 ?
                        props.listOfUser.map((user,index) => {
                            return (
                                <tr>
                                    <td>{user.user_id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.country}</td>
                                    <td>{user.postal_code}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.birthdate}</td>
                                    <td><button className="btn btn-primary m-1">edit</button>
                                    <button className="btn btn-danger m-1" onClick={()=>props.deleteuser(user.user_id)}>delete</button></td>
                                    
                                </tr>
                            )
                        }) : null}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;