// import { createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//importamos todas las vistas para despues imprementarlas
import Home from "./views/home";
import Shop from "./views/shop";
import Login from "./views/login";
import SignIn from "./views/signin";
import Admin from "./views/indexAdmin";
import Basket from "./views/basket";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/login" element={<Login />} />
      <Route path="/shop/signin" element={<SignIn />} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>
  );
}

export default router;
