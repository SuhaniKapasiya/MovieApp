// import React from "react";

// const MovieList = ({ movie }) => {
//   return (
//     <div className=" bg-red-300  w-[300px] flex flex-col justify-between mt-3 rounded-lg shadow dark:bg-gray-white dark:border-gray-700 ">
//       <div className="m-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//         <img
//           src={movie.moviemainphotos[0]}
//           alt={movie.movietitle}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4">
//           <h2 className="text-white text-xl font-semibold mb-2">
//             {movie.movietitle}
//           </h2>
//           <p className="text-gray-400">{movie.movielanguages.join(", ")}</p>
//           <p className="text-gray-400">{movie.moviecountries.join(", ")}</p>
//           <div className="flex mt-4">
//             {movie.moviegenres.map((genre, index) => (
//               <span
//                 key={index}
//                 className="mr-2 bg-gray-600 text-sm text-white px-2 py-1 rounded"
//               >
//                 {genre}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
import React from "react";

const MovieList = ({ movie }) => {
  return (
    <div className="movie-item  h-[500px]  w-[300px] flex flex-col justify-between mt-3 rounded-lg shadow dark:bg-gray-white dark:border-gray-700">
      <div className="m-4 flex flex-col justify-between bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={movie.moviemainphotos[0]}
          alt={movie.movietitle}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-white text-xl font-semibold mb-2">
            {movie.movietitle}
          </h2>
          <p className="text-gray-400">
            {movie.movielanguages.slice(0, 10).join(", ")}...
          </p>
          <p className="text-gray-400">
            {movie.moviecountries.slice(0, 10).join(", ")}...
          </p>
          <div className="flex mt-4">
            {movie.moviegenres.map((genre, index) => (
              <span
                key={index}
                className="mr-2 bg-gray-600 text-sm text-white px-2 py-1 rounded"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
