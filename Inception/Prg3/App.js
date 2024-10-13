const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello world from React!"
);

/**
 *  <div id = "parent">
 *      <div id = "child1">
 *          <h1>Heading 1</h1>
 *          <h2>Heading 2</h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>Heading 1</h1>
 *          <h2>Heading 2</h2>
 *      </div>
 *  </div>
 */

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child1"}, 
            [
                React.createElement("h1", {}, "Heading1 of child1"), 
                React.createElement("h2", {}, "Heading2 of child1")
            ]
        ), 
        React.createElement("div", {id: "child2"}, 
            [
                React.createElement("h1", {}, "Heading1 of child2"), 
                React.createElement("h2", {}, "Heading2 of child2")
            ]
        )
    ]
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

