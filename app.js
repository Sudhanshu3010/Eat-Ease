const parent = React.createElement(
  "div",
  {id : "heading"},
  [
    React.createElement("div",{id: "child", xyz: "abc"}, [
      React.createElement("h1", {}, "Hello This is my first text in React"),
      React.createElement("h2", {}, "Hello This is my second text in React"),
    ]),
    React.createElement("div",{id: "child2", xyz: "abc2"}, [
      React.createElement("h1", {}, "Hello This is my first text in React"),
      React.createElement("h2", {}, "Hello This is my second text in React"),
    ])  
  ]
  
);

const root = ReactDOM.createRoot(document.getElementById("parent2"));

root.render(parent);