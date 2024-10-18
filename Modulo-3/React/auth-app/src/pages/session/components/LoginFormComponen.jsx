import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserDataContext";

export const LoginFormComponen = () => {
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   // usando el useContext
   const {setUser } = useContext(UserContext);

   const onSubmitForm = (data) => {
      console.log(data);

      signInWithEmailAndPassword(auth, data.mail, data.pass)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert("Inicio de sesion exitoso!");

            setUser(user); //le pasamos el usuario que nos da firebas
            navigate("/");
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <div>
         <h2>Login Form</h2>

         <form onSubmit={handleSubmit(onSubmitForm)}>
            <label>Email</label>
            <input
               type="email"
               id="email"
               placeholder="Email"
               {...register("mail")}
            />

            <label>Password</label>
            <input
               type="password"
               id="password"
               placeholder="Password"
               {...register("pass")}
            />

            <button type="submit">Login</button>
         </form>
      </div>
   );
};
