import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom';
const ProductList = ({ productList, deleteProduct, paginate, counts, search }) => {
    const update = (id) => {
        console.log(id)
    }

    return (
        <div className="container">
            <div className='m-4'>
                <label htmlFor="">Search : &nbsp;</label>
                <input type="text" onChange={(e) => search(e.target.value)} />
            </div>
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
                                    <Link className='btn btn-sm btn-primary' to={"/update-product/" + item.id}><FaEdit /></Link>
                                    <button className='btn btn-sm btn-danger' onClick={() => deleteProduct(item.id)}><MdDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <Pagination count={Math.ceil(counts / 8)} onChange={(e, count) => paginate(count)} />
            </div>
        </div>
    );
}

export default ProductList;
