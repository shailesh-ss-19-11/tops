import User from "./components/user/User";
import Header from "./components/commonComponents/Header";
import {Routes,Route} from 'react-router-dom'
import Service from "./components/site/Service";
import Home from "./components/site/Home";
import About from "./components/site/About";
import Contact from "./components/site/Contact";
import Products from "./components/products/Products";
const App =()=>{
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/service" Component={Service}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/about" Component={About}/>
            <Route path="/users" Component={User}/>
            <Route path="/products" Component={Products}/>
            <Route path="/" Component={Home}/>
        </Routes>
       {/* <User/> */}
        </>
    )
}

export default App;