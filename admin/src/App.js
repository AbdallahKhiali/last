import Product from "./component/Product";
import Sidebar from "./component/Sidebar";
import User from "./component/User";
import "./style/index.scss";
import { Routes, Route } from "react-router-dom";
import CreateProduct from "./component/Product/CreateProduct";
import CreateUser from "./component/User/CreateUser";
import UpdateUser from "./component/User/UpdateUser";
import UpdateProduct from "./component/Product/UpdateProduct";
import Command from "./component/Commands";
import Video from "./component/Videos";
import CreateٍVideo from "./component/Videos/CreateVideo";
import UpdateVideo from "./component/Videos/UpdateVideo";
import { useState } from "react";
import { Context } from "./context/Context";
import Login from "./component/Login";
import Loading from "./component/utils/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState()
  const isAdmin = JSON.parse(localStorage.getItem("role"));
  const isAuth = JSON.parse(sessionStorage.getItem("auth"));
  const token = JSON.parse(localStorage.getItem("token"));

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
  };

  return (
    <Context.Provider value={{ axiosConfig, setLoading, loading, currentUser, setCurrentUser }}>
      {(isAuth && isAdmin) ? (
        <div className="dashboard bg-primary p-0 col-md-12">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="d-flex h-100 align-items-center justify-content-center ">
                    <img src={require("./assets/black-logo.png")} alt="logo" />
                  </div>
                }
              />
              <Route path="admin/user" element={<User />} />
              <Route path="admin/user/create" element={<CreateUser />} />
              <Route path="/admin/product/create" element={<CreateProduct />} />
              <Route path="admin/video/create" element={<CreateٍVideo />} />
              <Route path="admin/user/update/:id" element={<UpdateUser />} />
              <Route path="admin/video/update/:id" element={<UpdateVideo />} />
              <Route
                path="admin/product/update/:id"
                element={<UpdateProduct />}
              />
              <Route path="admin/product" element={<Product />} />
              <Route path="admin/video" element={<Video />} />
              <Route path="admin/command" element={<Command />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </Context.Provider>
  );
}

export default App;
