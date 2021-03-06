import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Pages/Home/Home/Home";
import Reviews from "./Components/Pages/Home/Reviews/Reviews";
import Tools from "./Components/Pages/Home/Tools/Tools";
import Login from "./Components/Pages/Login/Login/Login";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Components/Pages/Login/SignUp/SignUp";
import PurchasePage from "./Components/Pages/PurchasePage/PurchasePage";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import NotFound from "./Components/Pages/Shared/NotFound/NotFound";
import DashboardMain from "./Components/Pages/Dashboard/DashboardMain/DashboardMain";
import MyProfile from "./Components/Pages/Dashboard/MyProfile/MyProfile";
import MyOrders from "./Components/Pages/Dashboard/MyOrders/MyOrders";
import AddReview from "./Components/Pages/Dashboard/AddReview/AddReview";
import Users from "./Components/Pages/Dashboard/Users/Users";
import Contact from "./Components/Pages/Home/Contact/Contact";
import Blog from "./Components/Pages/Blog/Blog";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Payment from "./Components/Pages/Dashboard/Payment/Payment";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct/ManageProduct";
import AddProduct from "./Components/Pages/Dashboard/AddProduct/AddProduct";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders/ManageOrders";
import RequireAdmin from "./Components/Pages/Login/RequireAdmin/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<RequireAuth><DashboardMain></DashboardMain></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          {/* ======================Admin page=========================== */}
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="/purchase/:id" element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
