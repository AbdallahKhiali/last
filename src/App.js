import CoachInfo from "./components/CoachInfo";
import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import AdvancedProgram from "./components/Payment/AdvancedProgram";
import PaymentProgram from "./components/Payment/PaymentProgram";
import { Route, Routes } from "react-router-dom";
import PersonalTraining from "./components/PersonalTraining";
import Home from "./components/Home";
import Thanks from "./components/Thanks";
import ProgramVideos from "./components/ProgramVideos";
import Market from "./components/Market";
import ProductDetails from "./components/ProductDetails";
import CheckoutBag from "./components/Payment/CheckoutBag";
// import { GeneralContext } from "./contexts/GeneralContext";
import { useContext } from "react";
import ShoppingBag from "./components/ShoppingBag";
// import Signup from "./components/Signup";
import { GeneralContext } from "./contexts/GeneralContext";
import Error from "./components/Error";
function App() {
  const {
    isAuth,
    role,
    gainers,
    clothes,
    headerAppearance,
    setHeaderAppearance,
    womenPack,
    menPack,
  } = useContext(GeneralContext);

  return (
    <div className="App">
      {window.location.pathname === "/login" ||
        window.location.pathname === "/contact"
        ? setHeaderAppearance(false)
        : setHeaderAppearance(true)}
      {headerAppearance && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/personal" element={<PersonalTraining />} />

        <Route
          path="/coach/tayeb"
          element={
            <CoachInfo
              coach_name="Tayeb Zerouki"
              description_insta={"i am tayeb a fitness coach ..."}
              second_pic="coachInfoSecond.png"
              pic_principal="coachInfoPrincipale.png"
              first_pic="coachInfoThird.png"
              about_pic="coach.png"
              pack={menPack}
              insta={"Tayeb_zr"}
              women={false}
            />
          }
        />

        <Route
          path="/coach/lyna"
          element={
            <CoachInfo
              second_pic="wcoachInfoSecond.png"
              pic_principal='wcoachInfoPrincipale.png'
              first_pic="wcoachInfoThird.png"
              coach_name="lyna Ben"
              about_pic="wcoach.png"
              description_insta={"i am lyna a fitness coach..."}
              pack={womenPack}
              insta={"_lynaben_"}
              women={true}
            />
          }
        />

        {isAuth ? (
          <Route path="/login" element={<ProgramVideos />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {isAuth && (role === "admin" || role === "viewer" || "admin") ? (
          <Route path="/video" element={<ProgramVideos />} />
        ) : (
          <Route path="/video" element={<Error />} />
        )}
        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/payment_advanced_program/:title/:subtitle/:price/"
          element={<AdvancedProgram />}
        />
        <Route
          path="/payment_program/:title/:subtitle/:price/"
          element={<PaymentProgram />}
        />

        <Route path="/market/gainers" element={<Market products={gainers} />} />
        <Route path="/market/clothes" element={<Market products={clothes} />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/shopping_bag" element={<ShoppingBag />} />
        <Route path="/payment_bag" element={<CheckoutBag />} />

        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
