import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKENDURL } from '../../Variable';
import axios from 'axios';

const UpdateProducts = () => {
    const params = useParams();
    const [data, setdata] = useState({});
    useEffect(()=>{
        axios.get(`${BACKENDURL}/${params.id}`).then((resp)=>{
            console.log(resp)
            if(resp.status===200){
                setdata(resp.data);
            }else{
                setdata({});
            }
        })
    },[])
    console.log(data)
    return (
        <div>
            <input type="text" />
        </div>
    );
}

export default UpdateProducts;
