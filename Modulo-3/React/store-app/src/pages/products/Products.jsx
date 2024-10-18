import { useForm } from "react-hook-form";
import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";

export const Products = () => {
   const { register, handleSubmit, reset, setValue } = useForm();
   const [products, setProducts] = useState([]);
   const [editId, setEditId] = useState(null);

   // obtener los productos (documentos) de la coleccion
   const getProducts = async () => {
      const productsCollection = await getDocs(collection(db, "products"));
      const data = productsCollection.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
      }));
      console.log(data);
      // guardamos los datos en nuestro estado
      setProducts(data);
   };

   // guardar producto
   const addProduct = async (data) => {
      const respuesta = await addDoc(collection(db, "products"), {
         name: data.name,
         price: parseFloat(data.price),
         stock: parseInt(data.stock),
      });
      console.log(respuesta);
      reset();
      getProducts(); //actualizamos los productos cuando agregamos uno
   };

   // editar producto (muestra los datos en los inputs del form)
   const editProduct = (product) => {
      console.log("editando un producto");
      console.log(product);

      // mandamos los datos al formulario para editarlo
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("stock", product.stock);

      // seteamos el id en el estado para actualizarlo
      setEditId(product.id);
   };

   // Actualizar un producto (documento) en la coleccion
   const updateProduct = async (data) => {
      const docRef = doc(db, "products", editId);

      await updateDoc(docRef, {
         name: data.name,
         price: parseFloat(data.price),
         stock: parseInt(data.stock),
      });
      setEditId(null);
      reset();
      getProducts();
   };

   // Eliminar un producto
   const deleteProduct = async (id) => {
      const docRef = doc(db, "products", id);
      await deleteDoc(docRef);
      getProducts();
   };

   // mostramos los productos al momento de cargar la app
   useEffect(() => {
      // Ejecutamos funciones al momento de montar un componente
      getProducts();
   }, []);

   return (
      <div>
         <h2>Productos</h2>

         <form
            onSubmit={
               editId ? handleSubmit(updateProduct) : handleSubmit(addProduct)
            }
         >
            <div>
               <label>Nombre</label>
               <input
                  type="text"
                  required
                  placeholder="nombre"
                  {...register("name")}
               />
            </div>
            <div>
               <label>Precio</label>
               <input
                  type="number"
                  required
                  placeholder="precio"
                  {...register("price")}
               />
            </div>
            <div>
               <label>Cantidad</label>
               <input
                  type="number"
                  required
                  placeholder="cantidad"
                  {...register("stock")}
               />
            </div>
            <div>
               <button type="submit">{editId ? "Editar" : "Agregar"}</button>
            </div>
         </form>

         <main>
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Stock</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {/* Listamos los productos */}
                  {products.map((product) => (
                     <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                           <button onClick={() => editProduct(product)}>
                              Edit
                           </button>
                           <button onClick={() => deleteProduct(product.id)}>
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </main>
      </div>
   );
};
