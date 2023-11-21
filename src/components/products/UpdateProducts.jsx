import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKENDURL } from '../../Variable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../commonComponents/Loader';


const UpdateProducts = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        axios.get(`${BACKENDURL}/${params.id}`).then((resp) => {
            console.log(resp)
            if (resp.status === 200) {
                setdata(resp.data);
                setloading(false)
            } else {
                setdata({});
            }
        })
    }, [])

    const handleInputChange = (e) => {
        let temp = { ...data };
        temp[e.target.name] = e.target.value;
        setdata(temp);
    }

    const update = () => {
        setloading(true)
        axios.put(`${BACKENDURL}/${params.id}`, data).then((resp) => {
            if (resp.status === 200) {
                navigate(-1)
            }
        })
    }
    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "10%" }}>
                <Loader />
            </div> :
                <div className='container'>
                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Product Name</label>
                        <input type="text" name='product_name' defaultValue={data.product_name} class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Product Description</label>
                        <input type="text" name='product_disc' defaultValue={data.product_disc} class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Product Price</label>
                        <input type="number" name='product_price' defaultValue={data.product_price} class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                    </div>
                    <button className='mt-2 btn btn-sm btn-success' onClick={update}>Update</button>
                </div>
            }
        </>
    );
}

export default UpdateProducts;
