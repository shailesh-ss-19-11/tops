import React, { useState } from 'react';
import moment from 'moment';
const AddUser = (props) => {
    const [forminputs, setforminputs] = useState({});

    const handleInputs = (e) => {
        let tempObj = { ...forminputs }
        if (e.target.name === "birthdate") {
            console.log(moment(new Date(e.target.value)).format("DD/MM/YYYY"))
            tempObj[e.target.name] = moment(new Date(e.target.value)).format("DD/MM/YYYY")
        } else {
            tempObj[e.target.name] = e.target.value
            setforminputs(tempObj);
        }
    }

    const save = (e) => {
        e.preventDefault();
        props.adduserdata(forminputs)
        setforminputs({})
    }
    console.log(forminputs);
    return (
        <form onSubmit={save}>
            <div class="mb-3">
                <label for="" class="form-label">First Name</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='first_name' onChange={handleInputs} defaultValue={forminputs?.first_name ? forminputs?.first_name : ""} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='last_name' onChange={handleInputs} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Age</label>
                <input type="number" class="form-control" id="" aria-describedby="emailHelp" name='age' onChange={handleInputs} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">email</label>
                <input type="email" class="form-control" id="" aria-describedby="emailHelp" name='email' onChange={handleInputs} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Country</label><br onChange={handleInputs} />
                <select name="country" id="" onChange={handleInputs}>
                    <option value="india">india</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="singapore">singapore</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Postalcode</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='postal_code' onChange={handleInputs} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">phone Number</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='phone_number' onChange={handleInputs} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">DOB	</label>
                <input type="date" class="form-control" id="" aria-describedby="emailHelp" name='birthdate' onChange={handleInputs} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default AddUser;
