const heading = React.createElement("div", {id:"parent"},
                                     React.createElement("div", {id:"child-1"},
                                     React.createElement("h1",{}, "Hello!")
                                      ));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);