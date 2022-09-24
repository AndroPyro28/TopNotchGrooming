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
import { useDispatch, useSelector } from "react-redux";
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
import PaymentInfo from "./pages/customerPages/payment/PaymentInfo";
import shopingCartLogic from "./components/cartComponents/logic/shopingCartLogic";
import { setToCartReducer } from "./redux/cartSlice";
import Appointment from "./pages/customerPages/appointment/Appointment";
import AppointmentList from "./pages/adminPages/appointment/AppointmentList";
import Record from "./pages/adminPages/records/Record";
import OrderList from "./pages/adminPages/orders/OrderList";
import { memo } from "react";
import OrderDetails from "./pages/adminPages/order_detail/OrderDetails";
import Purchases from "./pages/customerPages/purchases/Purchases";
import Preparing from "./components/purchases/Preparing";
import ToReceive from "./components/purchases/ToReceive";
import PurchasedDetails from "./pages/customerPages/orderdetail/PurchasedDetails";
import { connection } from "./redux/socketSlice";
import io from "socket.io-client";
import AppointmentDetails from "./pages/adminPages/AppointmentDetail/AppointmentDetails";
import Channels from "./pages/shared/livestream_channels/Channels";
import LiveStreamRoom from "./pages/shared/livestream_room/LiveStreamRoom";
import CustomAxios from "./customer hooks/CustomAxios";
import AdminNavbar from "./components/admin_navbar/AdminNavbar";
import Sales from "./pages/adminPages/sales/Sales";
import PageNotFound from "./pages/shared/page-not-found/PageNotFound";

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
    const auth = {
      userinfo: Cookies.get("userToken"),
      isAuth: false
    };

    dispatch(connection(io(process.env.REACT_APP_SERVER_URI_PROD, {auth})));
  }, [])

  useEffect(() => {
    startTransition(() => {
      (async function () {
        try {
          setLoading(true);
          const data = await CustomAxios({METHOD:"GET", uri:`/api/auth`});
          const { success, msg } = data;

          if (!success || msg?.includes("session expired")) {
               Cookies.remove("userToken");
               dispatch(authenticationFailed());
             }

             if (success) {
                const { currentUser } = data;
                dispatch(authenticationSuccess({ currentUser, isAuth: true }));
    
                const auth = {
                  userinfo: Cookies.get("userToken"),
                  isAuth: true
                };
    
                dispatch(connection(io(process.env.REACT_APP_SERVER_URI_PROD, {auth})));
              }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    });
  }, []);

  const { fetcher } = shopingCartLogic();

  useEffect(() => {
    (async () => {
      if(pathname?.includes('customer')) {
        const cart = await fetcher();
        dispatch(setToCartReducer(cart));
      }
    })();
  }, []);


  if (loading) return <Loader bg="rgba(139, 133, 98, 0.526)" />;

  return (
    <AppRoot>

      {navbarType === "public" && !pathname?.includes('room=') && <PublicNavbar />}

      {navbarType === "customer" && !pathname?.includes('room=') && <CustomerNavbar />}

      {navbarType === "admin" && !pathname?.includes('room=') && <AdminNavbar />}

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
          element={<PublicRoutes Component={<Signup />} />}
        />
        <Route
          path="/customer/login"
          element={<PublicRoutes Component={<CustomerLogin />} />}
        />

        <Route
          path="/admin/login"
          element={<PublicRoutes Component={<AdminLogin />} />}
        />

        <Route
          path="/public/liveStreamChannels"
          element={<PublicRoutes Component={<Channels />} />}
        />

        <Route
          path="/public/liveStreamChannels/room=:link"
          element={<PublicRoutes Component={<LiveStreamRoom />} />}
        />

        {/* customer routes */}
        <Route
          path="/customer"
          element={<CustomerRoutes Component={<Home />} />}
        />

        <Route
          path="/customer/profile"
          element={<CustomerRoutes Component={<Profile />} />}
        >
          <Route index element={<CustomerRoutes Component={<Personal />} />} />
          <Route
            path="personal"
            element={<CustomerRoutes Component={<Personal />} />}
          />
          <Route
            path="activities"
            element={<CustomerRoutes Component={<Activities />} />}
          />
        </Route>

        <Route
          path="/customer/store"
          element={<CustomerRoutes Component={<Store />} />}
        />
        <Route
          path="/customer/cart"
          element={<CustomerRoutes Component={<Cart />} />}
        />

        <Route
          path="/customer/payment"
          element={<CustomerRoutes Component={<PaymentInfo />} />}
        />
       
        <Route
          path="/customer/appointment"
          element={<CustomerRoutes Component={<Appointment />} />}
        />

        <Route
          path="/customer/purchases"
          element={<CustomerRoutes Component={<Purchases />} />}
        >
          {/* purchases children */}
          <Route index element={<Preparing />} />

          <Route path="preparing" element={<Preparing />} />
          <Route path="to-receive" element={<ToReceive />} />
        </Route>

        <Route
          path="/customer/purchases/:reference"
          element={<CustomerRoutes Component={<PurchasedDetails />} />}
        />

        <Route
          path="/customer/liveStreamChannels"
          element={<CustomerRoutes Component={<Channels />} />}
        />

        <Route
          path="/customer/liveStreamChannels/room=:link"
          element={<CustomerRoutes Component={<LiveStreamRoom />} />}
        />

        {/* admin routes */}
        <Route
          path="/admin"
          element={<AdminRoutes Component={<Dashboard />} />}
        />
        <Route
          path="/admin/inventory"
          element={<AdminRoutes Component={<Inventory />} />}
        />

        <Route
          path="/admin/appointments/"
          element={<AdminRoutes Component={<Record />} />}
        >
          <Route index element={<AppointmentList />} />
          <Route path="appointments" element={<AppointmentList />} />
        </Route>

        <Route
          path="/admin/sales"
          element={<AdminRoutes Component={<Sales />} />}
        />

        <Route
          path="/admin/orders"
          element={<AdminRoutes Component={<OrderList />} />}
        />

        <Route
          path="/admin/orders/:reference"
          element={<AdminRoutes Component={<OrderDetails />} />}
        />

        <Route
          path="/admin/record/appointments/:id"
          element={<AdminRoutes Component={<AppointmentDetails />} />}
        />

        <Route
          path="/admin/liveStreamChannels"
          element={<AdminRoutes Component={<Channels />} />}
        />

        <Route
          path="/admin/liveStreamChannels/room=:link"
          element={<AdminRoutes Component={<LiveStreamRoom />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <Footer /> */}
    </AppRoot>
  );
}

export default memo(App);
