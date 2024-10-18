import { useState } from "react";
import { LoginFormComponen } from "./components/LoginFormComponen";
import { RegisterFormComponent } from "./components/RegisterFormComponent";
import { Link } from "react-router-dom";

export const Session = () => {
   const [typeForm, setTypeForm] = useState("login");

   return (
      <div>
         <Link to="/">Regresar</Link>

         <button onClick={() => setTypeForm("login")}>Iniciar sesion</button>
         <button onClick={() => setTypeForm("signup")}>Registrar</button>

         {/* realizando Renderizado condicional */}
         {typeForm === "login" ? (
            <LoginFormComponen />
         ) : (
            <RegisterFormComponent />
         )}
      </div>
   );
};
