import React, { useRef, useState } from 'react';
import moment from 'moment';
const AddUser = (props) => {
    const [forminputs, setforminputs] = useState({});
    const [errors, seterrors] = useState({});
    const errorRef = useRef();
    const handleInputs = (e) => {
        let tempObj = { ...forminputs }
        if (e.target.name == "birthdate") {
            tempObj[e.target.name] = moment(new Date(e.target.value)).format("DD/MM/YYYY")
            setforminputs(tempObj);
        } else {
            tempObj[e.target.name] = e.target.value
            setforminputs(tempObj);
        }
    }

    const save = (e) => {
        e.preventDefault();
        if (forminputs?.first_name===undefined) {
            let tempObj = { ...errors }
            tempObj["first_name"] = "first name is required field"
            seterrors(tempObj);
            errorRef.current.scrollIntoView({ behavior: 'smooth' })
        } else if (forminputs?.last_name===undefined) {
            seterrors({});
            let tempObj = { ...errors }
            tempObj["last_name"] = "Last name is required field"
            seterrors(tempObj);
            errorRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        else {
            e.preventDefault();
            props.adduserdata(forminputs)
            setforminputs({})
        }
    }
    return (
        <form onSubmit={save}>
            <div class="mb-3">
                <label for="" ref={errorRef} class="form-label">First Name<span className='text-danger' >*</span></label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='first_name' onChange={handleInputs} defaultValue={forminputs?.first_name ? forminputs?.first_name : ""} />
                <span className='text-danger' >{errors?.first_name}</span>
            </div>
            <div class="mb-3">
                <label ref={errorRef} for="" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" name='last_name' onChange={handleInputs} />
                <span className='text-danger'>{errors?.last_name}</span>
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
