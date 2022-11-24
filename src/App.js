import "./App.scss";
import Navigation from "./component/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Products from "./services/Products";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./store/sliceProduct";
import ShowRoom from "./pages/ShowRoom/ShowRoom";
import { restoreCart } from "./store/sliceCart";
import { login } from "./store/sliceUser";

function App() {
  const [reciveData, setReciveData] = useState(false);
  const { user, isLogged } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  useEffect(() => {
    let userDb = JSON.parse(localStorage.getItem("usersDB"));
    userDb?.find((el, index) => {
      if (el.email === user.email && isLogged) {
        userDb[index] = user;
        localStorage.setItem("usersDB", JSON.stringify(userDb));
      }
      return el.email === user.email;
    });
  }, [user, isLogged]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("cart")) {
      dispatch(restoreCart(JSON.parse(localStorage.getItem("cart"))));
    }

    if (localStorage.hasOwnProperty("logedUser")) {
      dispatch(login(JSON.parse(localStorage.getItem("logedUser"))));
    }

    Products.getAll()
      .then((res) => {
        dispatch(storeData(res.data.shop.products));
      })
      .finally(() => {
        setReciveData(true);
      });
  }, []);

  return (
    reciveData && (
      <>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/showroom/:category"} element={<ShowRoom />} />
        </Routes>
      </>
    )
  );
}

export default App;
