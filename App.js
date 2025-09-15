import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "" }, [
  React.createElement("div", {}, [
    React.createElement("p", {}, "Children"),
    React.createElement("p", {}, "Children"),
  ]),
  React.createElement("h1", {}, "Sibling"),
  React.createElement("div", {}, [
    React.createElement("p", {}, "Children"),
    React.createElement("p", {}, "Children"),
  ]),
  ,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/**
 * div
 *      div
 *          child1
 *          child2
 *      /div
 *                  h1 /h1
 *      div
 *          child3
 *          child4
 *      /div
 * /div
 */
