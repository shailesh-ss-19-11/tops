import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import axios from 'axios'
import { BACKENDURL } from '../../Variable';
import Loader from '../commonComponents/Loader';
const Products = () => {
    const [productList, setproductList] = useState([]);
    const [loading, setloading] = useState(false);
    const [counts, setcounts] = useState(0);
    const getproductList = () => {
        axios.get(BACKENDURL).
            then((response) => {
                if (response.status == 200) {
                    setloading(false)
                    setproductList(response.data)
                    setcounts(response.data.length)
                } else {
                    setproductList([])
                }
            })
    }

    useEffect(() => {
        setloading(true)
        getproductList();
    }, [])

    const deleteProduct = (id) => {
        // console.log(id)
        setloading(true)
        axios.delete(`${BACKENDURL}/${id}`).then((resp) => {
            console.log(resp);
            if (resp.status === 200) {
                setloading(false)
                getproductList();
            }
        })
    }

    const paginate = (count) => {
        console.log(count)//1
        const listitems = productList.slice(0,8)
        console.log(listitems)
        setproductList(listitems)
    }

    return (
        <div>
            {loading ?
                <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "10%" }}>
                    <Loader />
                </div> :
                <ProductList
                    productList={productList}
                    deleteProduct={deleteProduct}
                    paginate={paginate}
                    counts={counts}
                />}
        </div>
    );
}

export default Products;
