import React, { Suspense } from "react";
// import User from "./components/user/User";
// import Header from "./components/commonComponents/Header";
import { Routes, Route } from 'react-router-dom'
import Loader from "./components/commonComponents/Loader";
// import Service from "./components/site/Service";
// import Home from "./components/site/Home";
// import About from "./components/site/About";
// import Contact from "./components/site/Contact";
// import Products from "./components/products/Products";
// import UpdateProducts from "./components/products/UpdateProducts";
// import PageNotFound from "./components/not-found/PageNotFound";
const PageNotFound = React.lazy(() => import('./components/not-found/PageNotFound'));
const Service = React.lazy(() => import('./../src/components/site/Service'))
const Home = React.lazy(() => import('./../src/components/site/Home'))
const Contact = React.lazy(() => import('./../src/components/site/Contact'))
const About = React.lazy(() => import('./../src/components/site/About'))
const Header = React.lazy(() => import('./components/commonComponents/Header'))
const User = React.lazy(() => import('./components/user/User'))
const Products = React.lazy(() => import('./components/products/Products'))
const UpdateProducts = React.lazy(() => import('./components/products/UpdateProducts'))
const App = () => {
    return (
        <>
            <Suspense fallback={<div className='d-flex justify-content-center align-item-center' style={{ marginTop: "10%" }}>
                <Loader />
            </div>}>
                <Header />
                <Routes>
                    <Route path="/service" Component={Service} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/about" Component={About} />
                    <Route path="/users" Component={User} />
                    <Route path="/products" Component={Products} />
                    <Route path="/update-product/:id" Component={UpdateProducts} />
                    <Route path="*" Component={PageNotFound} />
                    <Route path="/" Component={Home} />
                </Routes>
                {/* <User/> */}
            </Suspense>
        </>
    )
}

export default App;