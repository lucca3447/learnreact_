
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza"



const App = () => {
  return (
    <div>
      <h1>Lucca's - Order Now </h1>
      <Pizza name="Pepperoni" description=" stuff of a peperoni pizza"/>
      <Pizza name="Pineple" description=" stuff of a pinaple pizza"/>
      <Pizza name="Portuguese" description=" stuff of a portuguese pizza"/>
      
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
