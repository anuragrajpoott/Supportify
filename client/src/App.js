import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";
import logo from "./assets/images/logo.png"
import { useSelector } from "react-redux"
import Feed from "./pages/Feed";


function App() {

  const { loading, user } = useSelector((state) => state.slice)

  return (
    <div className="font-winky" >

      {
        loading ? (<div><Loader /></div>) : (<div>
          {
            user?.token ? (<div className="p-10 bg-pink-200">

              <Nav />

              <Routes>
                <Route path="/feed" element={<Feed />} />
              </Routes>

              <Footer />

            </div>) : (<div className="bg-[url(C:\Users\anura\OneDrive\Desktop\supportify\client\src\assets\images\bgl.webp)] min-h-screen bg-cover">

              <div className="flex gap-2.5 items-center p-5">
                <div className="h-10 w-10"><img src={logo} alt="" /></div>
                <div className="font-bold text-2xl">SUPPORTIFY...</div>
              </div>

              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/log-in" element={<Login />} />
                  <Route path="/sign-up" element={<Signup />} />
                </Routes>
              </div>

              <Footer />
            </div>)
          }
        </div>)
      }

    </div>
  );
}

export default App;
