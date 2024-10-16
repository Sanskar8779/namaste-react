import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => JS Object => HTML Element(render)

const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Namaste React 🚀"
);

// JSX(transpiled by Babel) => React.createElement => ReactElement => JS Object => HTML Element(render)
// React element using JSX 👇

const jsxHeading = (
	<h1
		className="head"
		tabIndex="5"
	>
		Namaste React using JSX 🚀
	</h1>
);

// React Component :-
//						 1) Class Component
//						 2) Functional Component
// But we use Functional Component

// React Functional Component - Always start with Capital Letter
// It is just a JS function that returns some JSX

// Below are the four ways of writing React Component 👇

const HeadingComponent1 = () => {
	return <h1>Namaste React Functional Component 🚀</h1>;
};

const HeadingComponent2 = () => {
	<h1>Namaste React Functional Component 🚀</h1>;
};

const HeadingComponent3 = () => <h1>Namaste React Functional Component 🚀</h1>;

const HeadingComponent4 = () => (
	<div id="container">
		<h1 className="heading">Namaste React Functional Component 🚀</h1>
	</div>
);

// Calling a component inside a component is called component composition
// Component Composition 👇

const Title = () => <h1 id="head">Here is the title</h1>;

const Description = () => (
	<div id="container">
		<Title />
		{Title()}
		<Title></Title>
		<h2 id="heading">Here is the explanation</h2>
	</div>
);

// How to use JS code inside JSX
// By using {} 'curly braces',  you can write any JS code inside JSX

const number = 2000;
const Component1 = () => (
	<div id="container">
		{number}
		{console.log("Executing JS code inside JSX")}
		<h1 id="heading">Namaste React 🚀</h1>
	</div>
);

// How to call React ELement in JSX or inside Component or inside element
// By using {} only

const title1 = <h1>Namaste React Element</h1>;

const title2 = <span>{title1}</span>; // Element inside element

const Component2 = () => (
	<div id="container">
		{title2}
		<h1 id="heading">Namaste React 🚀</h1>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// root.render(<HeadingComponent4 />);
root.render(<Description />);
//root.render(<Component1 />);
// root.render(<Component2 />);
