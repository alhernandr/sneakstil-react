// import { createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//importamos todas las vistas para despues imprementarlas
import Home from "./views/home";
import Shop from "./views/shop";
import Shop2 from "./views/shop2";
import Shop3 from "./views/shop3";
import Login from "./views/login";
import SignIn from "./views/signin";
import Admin from "./views/indexAdmin";
import Basket from "./views/basket";
import Actualizar from "./views/actualizar"
import Crear from "./views/crear"
import Stuff from "./views/stuff"

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop2" element={<Shop2 />} />
      <Route path="/shop3" element={<Shop3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signin" element={<SignIn />} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/basket/stuff" element={<Stuff/>}/>
      <Route path="/admin/crear" element={<Crear/>}/>
      <Route path="/admin/actualizar/:id" element={<Actualizar/>}/>
    </Routes>
  );
}

export default router;
