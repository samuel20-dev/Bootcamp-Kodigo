import "./assets/css/App.css";
import { MyProvider } from "./context/UserDataContext";
import { Home } from "./pages/home/Home";
import { Session } from "./pages/session/Session";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         {/* utilizando el provider */}
         <MyProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/session" element={<Session />} />
                  <Route path="/" element={<Home />} />
               </Routes>
            </BrowserRouter>
         </MyProvider>
      </>
   );
}

export default App;
