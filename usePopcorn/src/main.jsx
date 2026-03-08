import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import StarRating from "./components/StarRating.jsx";
import Test from "./components/Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating="3"
      size={35}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test/> */}
  </StrictMode>,
);
