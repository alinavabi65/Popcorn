import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import StarRainting from "./StarRaiting";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRaiting, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRainting
//         maxRaiting={10}
//         color="blue"
//         onSetRaiting={setMovieRating}
//       />
//       <p>This moive has {movieRaiting} raiting.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRainting maxRaiting={5} defaultRaiting={2} /> */}
  </React.StrictMode>
);
