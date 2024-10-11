const parent = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"Child"},
        [React.createElement("h1", {}, "I m h1 tag"),
        React.createElement("h2", {}, "I m h2 tag")]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)