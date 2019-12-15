import './styles.css';
import React from "react";
import ReactDOM from "react-dom";
import { ClickApp} from "./Clicker";

class App extends React.Component {

    render() {
        return (
            
                
            <div className="App">
                <ClickApp />
                <ClickApp />
                <ClickApp />
            </div>
            
            
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


