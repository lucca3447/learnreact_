
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza"



const App = () => {
  return (
    <div>
      <h1>Lucca's - Order Now </h1>
      <Pizza name="Pepperoni" description=" stuff of a peperoni pizza" image={"/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Pineple" description=" stuff of a pinaple pizza" image={"/public/pizzas/hawaiian.webp"}/>
      <Pizza name="Portuguese" description=" stuff of a portuguese pizza" image={"/public/pizzas/big_meat.webp"} />
      
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
