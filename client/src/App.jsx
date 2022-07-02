import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/publicPages/index/Index";
import Home from "./pages/customerPages/home/Home";
import Dashboard from "./pages/adminPages/dashboard/Dashboard";
import PublicNavbar from "./components/public_navbar/PublicNavbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/publicPages/contact/Contact.jsx";
import About from "./pages/publicPages/about/About";
import { Suspense, startTransition } from "react";
import CustomerLogin from "./pages/publicPages/customer_login_signup/Login";
import Signup from "./pages/publicPages/customer_login_signup/Signup";
import PublicRoutes from "./authentication/PublicRoutes";
import CustomerNavbar from "./components/customer_navbar/CustomerNavbar";
import Profile from "./pages/customerPages/profile/Profile";
import Personal from "./pages/customerPages/profile/Personal.jsx";
import Activities from "./pages/customerPages/profile/Activities.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { authenticationFailed, authenticationSuccess } from "./redux/userSlice";
import { AppRoot } from "./appComponents";
import Store from "./pages/customerPages/store/Store";
import AdminLogin from "./pages/publicPages/admin_login/AdminLogin";
import AdminSidebar from "./components/admin_sidebar/AdminSidebar";
import Inventory from "./pages/adminPages/inventory/Inventory";
import CustomerRoutes from "./authentication/CustomerRoutes";
import AdminRoutes from "./authentication/AdminRoutes";
import Loader from "./components/loader/Loader";
import Cart from "./pages/customerPages/cart/Cart";
import PaymentSuccess from "./pages/customerPages/payment/PaymentSuccess";
import PaymentFailed from "./pages/customerPages/payment/PaymentFailed";
import shopingCartLogic from "./components/cartComponents/logic/shopingCartLogic";
import {setToCartReducer } from "./redux/cartSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const [navbarType, setNavbarType] = useState(null);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const userInfo = Cookies.get("userToken");
      if (!userInfo) {
        return setNavbarType("public");
      }

      const { userType } = JSON.parse(userInfo);

      setNavbarType(userType);
    } catch (error) {
      console.error(error.message);
    }
  }, [pathname]);

  useEffect(() => {
    startTransition(() => {
      (async function () {
        try {
          setLoading(true);
          const res = await axios.get(`/api/auth`, {
            headers: {
              userinfo: Cookies.get("userToken"),
            },
          });

          const { success, msg } = res.data;

          if (!success || msg?.includes("session expired")) {
            Cookies.remove("userToken");
            dispatch(authenticationFailed());
          }

          if (success) {
            const { currentUser } = res.data;
            dispatch(authenticationSuccess({currentUser, isAuth:true}))
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    });
  }, []);

  const {fetcher} = shopingCartLogic()
  useEffect(() => {
    (async () => {
      const cart = await fetcher();
      dispatch(setToCartReducer(cart))
    })();
  }, []);


  if (loading) return <Loader bg="rgba(139, 133, 98, 0.526)" />;

  return (
    <AppRoot>

      {navbarType === "public" && <PublicNavbar />}

      {navbarType === "customer" && <CustomerNavbar />}
      
      {navbarType === "admin" && <AdminSidebar />}

      <Routes>
        {/* public routes */}
        <Route path="/" element={<PublicRoutes Component={<Index />} />} />
        <Route
          path="/contact"
          element={<PublicRoutes Component={<Contact />} />}
        />
        <Route path="/about" element={<PublicRoutes Component={<About />} />} />
        <Route
          path="/customer/signup"
          element={<PublicRoutes Component={<PublicRoutes Component={<Signup />} />} />}
        />
        <Route
          path="/customer/login"
          element={<PublicRoutes Component={<PublicRoutes Component={<CustomerLogin />} />} />}
        />

        <Route
          path="/admin/login"
          element={<PublicRoutes Component={<PublicRoutes Component={<AdminLogin />} />} />}
        />

        {/* customer routes */}
        <Route
          path="/customer"
          element={<CustomerRoutes Component={<Home />} />}
        />

        <Route path="/customer/profile" element={<CustomerRoutes Component={<Profile />} />} >
          <Route index element={<CustomerRoutes Component={<Personal />} />} />
          <Route path="personal" element={<CustomerRoutes Component={<Personal />} />} />
          <Route path="activities" element={<CustomerRoutes Component={<Activities />} />} />
        </Route>

        <Route path="/customer/store" element={<CustomerRoutes Component={<Store />} />} />
        <Route path="/customer/cart" element={<CustomerRoutes Component={<Cart />} />} />
        <Route path="/customer/payment=success" element={<CustomerRoutes Component={<PaymentSuccess />} />} />
        <Route path="/customer/payment=failed" element={<CustomerRoutes Component={<PaymentFailed />} />} />

        {/* admin routes */}
        <Route path="/admin" element={<AdminRoutes Component={<Dashboard />} />} />
        <Route path="/admin/inventory" element={<AdminRoutes Component={<Inventory />} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      {/* <Footer /> */}
    </AppRoot>
  );
}




export default App;
