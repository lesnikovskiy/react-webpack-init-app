import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer";

const App = props => (
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-4 offset-md-1">
                <FormContainer />
            </div>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("react-app"));
