import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Home from "./dashboard/components/Home";
import Hotels from "./dashboard/components/Hotels";
import Places from "./dashboard/components/Places";
import Users from "./dashboard/components/Users";
import Bookings from "./dashboard/components/Bookings";
import NewsEmails from "./dashboard/components/NewsEmails";
import Blogs from "./dashboard/components/Blogs";
import Advertisements from "./dashboard/components/Advertisements";
import HotelAdd from "./dashboard/components/HotelAdd";
import HomeUser from "./UserFrontend/pages/HomeUser";
import PlacesUser from "./UserFrontend/pages/PlacesUser";
import HotelsUser from "./UserFrontend/pages/HotelsUser";
import BlogUser from "./UserFrontend/pages/BlogUser";
import ContactUsUser from "./UserFrontend/pages/ContactUsUser";
import AboutUs from "./UserFrontend/pages/AboutUs";
import HotelEdit from "./dashboard/components/HotelEdit";
import HotelDelete from "./dashboard/components/HotelDelete";
import SavedHotels from "./UserFrontend/components/SavedHotels";
import BlogAdd from "./dashboard/components/BlogAdd";
import BlogEdit from "./dashboard/components/BlogEdit";
import BlogDelete from "./dashboard/components/BlogDelete";
import AdAdd from "./dashboard/components/AdAdd";
import AdEdit from "./dashboard/components/AdEdit";
import AdDelete from "./dashboard/components/AdDelete";
import PlaceAdd from "./dashboard/components/PlaceAdd";
import PlaceEdit from "./dashboard/components/PlaceEdit";
import PlaceDelete from "./dashboard/components/PlaceDelete";
import UserAdd from "./dashboard/components/UserAdd";
import Register from "./UserFrontend/pages/Register";
import Login from "./UserFrontend/pages/Login";
import FeedbackUser from "./UserFrontend/pages/FeedbackUser";
import Feedbacks from "./dashboard/components/Feedbacks";
import BookingUser from "./UserFrontend/pages/BookingUser";
// import UserEdit from "./dashboard/components/UserEdit";
// import UserDelete from "./dashboard/components/UserDelete";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* User Frontend */}
          <Route path="/" element={<HomeUser />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signin" element={<Register />} /> */}
          <Route path="/placesuser" element={<PlacesUser />} />
          <Route path="/hotelsuser" element={<HotelsUser />} />
          <Route path="/bloguser" element={<BlogUser />} />
          <Route path="/aboutuser" element={<AboutUs />} />
          <Route path="/contactuser" element={<ContactUsUser />} />
          <Route path="/feedbackuser" element={<FeedbackUser />} />
          <Route path="/savedhotels" element={<SavedHotels />} />
          <Route path="/bookhotel" element={<BookingUser />} />
          {/* Dashboard */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<UserAdd />} />
          {/* <Route path="/users/edit/:id" element={<UserEdit />} /> */}
          {/* <Route path="/users/delete/:id" element={<UserDelete />} /> */}
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/newsemails" element={<NewsEmails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/create" element={<BlogAdd />} />
          <Route path="/blogs/edit/:id" element={<BlogEdit />} />
          <Route path="/blogs/delete/:id" element={<BlogDelete />} />
          <Route path="/advertisements" element={<Advertisements />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/advertisements/create" element={<AdAdd />} />
          <Route path="/advertisements/edit/:id" element={<AdEdit />} />
          <Route path="/advertisements/delete/:id" element={<AdDelete />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/create" element={<PlaceAdd />} />
          <Route path="/places/edit/:id" element={<PlaceEdit />} />
          <Route path="/places/delete/:id" element={<PlaceDelete />} />
          <Route path="/hotels" element={<Hotels />} />

          <Route path="/hotels/create" element={<HotelAdd />} />
          <Route path="/hotels/edit/:id" element={<HotelEdit />} />
          <Route path="/hotels/delete/:id" element={<HotelDelete />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
