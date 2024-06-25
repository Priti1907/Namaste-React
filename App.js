const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Welcome To React!"),
      React.createElement("h2", {}, "Welcome To JS!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Welcome To React project!"),
      React.createElement("h2", {}, "Welcome To JS project!"),
    ]),
  ]);
  
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  