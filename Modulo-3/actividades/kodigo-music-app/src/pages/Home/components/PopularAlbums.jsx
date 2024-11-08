import { Link } from "react-router-dom";
import "./PopularAlbums.css";

// Array con todos los albunes
const albums = [
   {
      id: 1,
      title: "Un Verano Sin Ti",
      artist: "Bad Bunny",
      cover: "/src/assets/images/imgCancion1.jpg?height=300&width=300",
   },
   {
      id: 2,
      title: "nadie sabe lo que va a pasar mañana",
      artist: "Bad Bunny",
      cover: "/src/assets/images/imgCancion2.jpg?height=300&width=300",
   },
   {
      id: 3,
      title: "FERXXOCALIPSIS",
      artist: "Feid",
      cover: "/src/assets/images/imgCancion3.png?height=300&width=300",
   },
   {
      id: 4,
      title: "Fórmula, Vol. 2 (Deluxe Edition)",
      artist: "Romeo Santos",
      cover: "/src/assets/images/imgCancion4.png?height=300&width=300",
   },
   {
      id: 5,
      title: "MAÑANA SERÁ BONITO",
      artist: "KAROL G",
      cover: "/src/assets/images/imgCancion5.png?height=300&width=300",
   },
   {
      id: 6,
      title: "Vise Versa",
      artist: "Rauw Alejandro",
      cover: "/src/assets/images/imgCancion6.jpg?height=300&width=300",
   },
];

const PopularAlbums = () => {
   return (
      <section className="popular-albums">
         <div className="popular-albums-header">
            <h2>Álbumes populares</h2>
            <Link to="/playlist" className="show-all">
               Mostrar todos
            </Link>
         </div>
         <div className="album-grid">
            {/* Mostramos todas los albunes  */}
            {albums.map((album) => (
               <div key={album.id} className="album-item">
                  <Link to="playlist">
                     <img
                        src={album.cover}
                        alt={`${album.title} cover`}
                        className="album-cover"
                     />
                  </Link>

                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-artist">{album.artist}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default PopularAlbums;
