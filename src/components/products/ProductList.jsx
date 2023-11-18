import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {Pagination} from '@mui/material'
const ProductList = ({ productList, deleteProduct,paginate,counts }) => {
    const update = (id) => {
        console.log(id)
    }

    return (
        <div className="container">
            <div className="d-flex gap-2 flex-wrap justify-content-between">
                {productList.length > 0 ?
                    productList.map((item) => (
                        <div className="card" style={{ width: "18rem" }}>
                            <div style={{ width: "150px" }}>
                                <img src={item.image} className="w-100" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.product_name}</h5>
                                <p className="card-text">{item.product_disc}</p>
                                <a href="#" className="btn btn-primary">{item.product_rating}</a>
                                <div className='d-flex justify-content-end gap-1'>
                                    <button className='btn btn-sm btn-primary' onClick={() => update(item.id)}><FaEdit /></button>
                                    <button className='btn btn-sm btn-danger' onClick={() => deleteProduct(item.id)}><MdDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}
            </div>
            <Pagination count={Math.ceil(counts/8)} onChange={(e,count)=>paginate(count)}/>
        </div>
    );
}

export default ProductList;
