import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import axios from 'axios'
import { BACKENDURL } from '../../Variable';
const Products = () => {
    const [productList, setproductList] = useState([]);

    const getproductList = () => {
        axios.get(BACKENDURL).
            then((response) => {
                if (response.status == 200) {
                    setproductList(response.data)
                } else {
                    setproductList([])
                }
            })
    }

    useEffect(() => {
        getproductList();
    }, [])
    return (
        <div>
            <ProductList productList={productList}/>
        </div>
    );
}

export default Products;
