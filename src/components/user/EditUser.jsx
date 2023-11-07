import { useState } from "react";

const EditUser = (props) => {
    const [firstName, setfirstName] = useState(props.user.first_name);
    const [lastname, setlastname] = useState(props.user.last_name);
    const [email, setemail] = useState(props.user.email);
    const [age, setage] = useState(props.user.age);
    const [country, setcountry] = useState(props.user.country);
    const [postalcode, setpostalcode] = useState(props.user.postal_code);
    const [phoneNumber, setphoneNumber] = useState(props.user.phone_number);
    const [dob, setdob] = useState(props.user.birthdate);
    console.log(props.user)

    const saveEdit = (e) => {
        e.preventDefault();
        let obj = {};
        obj.first_name = firstName
        obj.last_name = lastname
        obj.email = email
        obj.age = age
        obj.country = country
        obj.postal_code = postalcode
        obj.phone_number = phoneNumber
        obj.birthdate = dob;
        obj.user_id = props.user.user_id
        props.updateUser(obj)
        props.setopenEdit(false)
    }
    return (
        <>
            <form onSubmit={saveEdit}>
                <div class="mb-3">
                    <label for="" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" defaultValue={firstName} onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" defaultValue={lastname} onChange={(e) => setlastname(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Age</label>
                    <input type="number" class="form-control" id="" aria-describedby="emailHelp" defaultValue={age} onChange={(e) => setage(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">email</label>
                    <input type="email" class="form-control" id="" aria-describedby="emailHelp" defaultValue={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Country</label><br defaultValue={country} onChange={(e) => setcountry(e.target.value)} />
                    <select name="" id="">
                        <option value="india">india</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="singapore">singapore</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Postalcode</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" defaultValue={postalcode} onChange={(e) => setpostalcode(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">phone Number</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" defaultValue={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">DOB	</label>
                    <input type="date" class="form-control" id="" aria-describedby="emailHelp" defaultValue={new Date(dob)} onChange={(e) => setdob(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default EditUser