import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext({});

export const GeneralContextProvider = ({ children }) => {
  //Here you declare states and functions

  const isAuth = sessionStorage.getItem("isAuth");
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  // const programFor = localStorage.getItem("program");
  const userId = localStorage.getItem("id");

  const baseURI = "http://localhost:3004/api/v1";

  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState();
  const [cart, setCart] = useState(localStorage.getItem(JSON.stringify('cart')) || []);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [headerAppearance, setHeaderAppearance] = useState([]);

  const [isPassword, setIsPassword] = useState(false);

  const getProducts = async () => {
    axios
      .get(`${baseURI}/product/all`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, [products]);

  const gainers = products?.filter((product) => product.type === "gainer");
  const clothes = products?.filter((product) => product.type === "clothe");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    axios
      .post(`${baseURI}/users/login`, loginForm)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("id", res.data.user._id);
        sessionStorage.setItem("isAuth", true);

        setLoading(false);
        window.location.replace("/video");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const womenPack = [
    {
      price: "15 000",
      pack_type: "starter",
      period: "month",
      title: "Bodyetic Starter",
      subtitle: "Workout video Program ",
      // link: "/payment_program/:title/:subtitle/:price/",
      options: ["Level training : Beginner", "Video : All exercise"],
      picture: `${baseURI}/public/images/wcoachInfoPrincipale.png`,
    },
    {
      price: "28 000",
      period: "month",
      pack_type: "pro",
      title: "Bodyetic Advanced Training",
      subtitle: "Workout video Program 2 ",
      options: [
        "Level training : Beginner",
        "Video : All exercise",
        "Supplements & Fitness accessories",
      ],
      picture: `${baseURI}/public/images/wvideoProgramAdvanced.png`,
    },
  ];

  const menPack = [
    {
      price: "15 000",
      pack_type: "starter",
      period: "month",
      title: "Bodyetic Starter",
      subtitle: "Workout video Program ",
      options: ["Level training : Beginner", "Video : All exercise"],
      picture: `${baseURI}/public/images/coachInfoPrincipale.png`,
    },
    {
      price: "28 000",
      period: "month",
      pack_type: "pro",
      title: "Bodyetic Advanced Training",
      subtitle: "Workout video Program 2 ",
      options: [
        "Level training : Beginner",
        "Video : All exercise",
        "Supplements & Fitness accessories",
      ],
      picture: `${baseURI}/public/images/videoProgramAdvanced.png`,
    },
  ];

  //useEffect exectutions

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ` + token,
    },
  };

  const value = {
    // all states and functions
    products,
    gainers,
    clothes,
    setSelectedProduct,
    selectedProduct,
    cart,
    setCart,
    setLoading,
    loading,
    axiosConfig,
    isAuth,
    role,
    userId,
    login,
    loginForm,
    setLoginForm,
    headerAppearance,
    setHeaderAppearance,
    navigate,
    womenPack,
    menPack,
    baseURI,
    isPassword,
    setIsPassword,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};
