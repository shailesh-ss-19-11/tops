import React from 'react';

const ProductList = ({ productList }) => {
    return (
        <div className="container">
            <div className="d-flex gap-2 flex-wrap justify-content-between">
                {productList.length > 0 ?
                    productList.map((item) => (
                        <div className="card" style={{ width: "18rem" }}>
                            <div style={{ width: "150px" }}>
                                <img src={item.image} className="w-100" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.product_name}</h5>
                                <p className="card-text">{item.product_disc}</p>
                                <a href="#" className="btn btn-primary">{item.product_rating}</a>
                            </div>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
}

export default ProductList;
