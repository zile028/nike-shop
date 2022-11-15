import './App.scss';
import Navigation from "./component/Navigation/Navigation";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home";
import {useEffect, useState} from "react";
import Products from "./services/Products";
import {useDispatch} from "react-redux";
import {storeData} from "./store/sliceProduct";
import ShowRoom from "./pages/ShowRoom/ShowRoom";

function App() {
    const [reciveData, setReciveData] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        Products.getAll().then(res => {
            dispatch(storeData(res.data.shop.products))
        }).finally(() => {
            setReciveData(true)
        })
    }, [])

    return (
        reciveData &&
        <>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/showroom/:category"} element={<ShowRoom/>}/>
            </Routes>
        </>
    );
}

export default App;
