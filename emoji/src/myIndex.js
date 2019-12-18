import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {EmojiList} from './emoj';

class App extends React.Component {

    render() {
        return (


            <div className="App">
              <EmojiList/>
            </div>


        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);



