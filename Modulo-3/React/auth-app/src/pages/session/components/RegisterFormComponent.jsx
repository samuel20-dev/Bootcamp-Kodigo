// importamos la librearia
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";

export const RegisterFormComponent = () => {
   /*
   register: nos permitira registrar cada input
   handleSubmit: Se encargara de recivir todos los datos del formulario
   */
   const { register, handleSubmit } = useForm();

   const onSubmitForm = (data) => {
      console.log(data);

      createUserWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);

            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error);
            // ..
         });
   };

   return (
      <div>
         <h2>Register Form</h2>

         <form onSubmit={handleSubmit(onSubmitForm)}>
            <label>Email</label>
            <input
               type="text"
               id="email"
               // registramos los inputs
               placeholder="Example: email@example.com"
               {...register("email")}
            />

            <label>Password</label>
            <input
               type="password"
               id="password"
               placeholder="Input your password"
               {...register("password")}
            />

            <label>Confirm Password</label>
            <input
               type="password"
               id="confirPassword"
               placeholder="Repeat your password"
               {...register("confirmPassword")}
            />

            <button type="submit">Send</button>
         </form>
      </div>
   );
};
