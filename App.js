import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Title Component</h1>;
const reactElement = <p>This is a react element</p>;

const HeadingComponent = () => {
  return (
    <div>
      {reactElement}
      <Title />
      <h1>This is a React Component</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
