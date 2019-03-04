// react hooks logger enabled
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const Component = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>Count: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>add</button>
        </div>
    );
};

const App = () => {
    return <Component />;
};

const root = document.getElementById("root");
if (root) {
    ReactDOM.render(<App />, root);
}
