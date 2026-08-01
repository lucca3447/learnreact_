import React from "react";
import { createRoot } from "react-dom/client";


const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The portuguese pizza",
      description: "Eggs, ham, muzzarela chesse, tomatoes",
    }),
    React.createElement(Pizza, {
      name: "The bacon pizza",
      description: "Bacon, corn and cheese",
    }),
    React.createElement(Pizza, {
      name: "Strogonoff Pizza",
      description: "Strogonoff",
    }),
    React.createElement(Pizza, {
      name: "Pinneaple pizza",
      description: "Some pineple pizza igredients that I can't make up",
    }),
    React.createElement(Pizza, {
      name: "Peperoni Pizza",
      description:
        "Idk what go in peperoni pizza, maybe peperoni and cheese idk",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
