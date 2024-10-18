import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserDataContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
   const { user, setUser } = useContext(UserContext);
   const navigate = useNavigate();

   const logout = () => {
      signOut(auth)
         .then(() => {
            // Sign-out successful.
            alert("Sesion Cerrada");
            setUser(null); //vaciamos el usuario
            navigate("/session");
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <>
         {/* renderizado condicional (preguntar si tiene un usuario) */}

         {user ? (
            <>
               <h1>{user.email}</h1>
               <button onClick={logout}>Cerrar Sesion</button>
            </>
         ) : (
            <Link to="/session">INICIAR SESION</Link>
         )}
         <br />
      </>
   );
};
