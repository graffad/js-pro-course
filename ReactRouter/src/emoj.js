import React from 'react';

export class EmojiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://unpkg.com/emoji.json@12.1.0/emoji.json')
      .then(response => response.json())
      .then(result => this.setState({
        data: result,
        isLoaded: true
      }));
  }


  render() {
    const { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }


    return (
      <div className="emoj-wrapper">
        <div>
          <p>
            <input list="emoji" placeholder="Enter name"/>
            <datalist id="emoji">
              {data.map(item => (
                <option key={item.codes} value={item.char + item.name}></option>

              ))}
            </datalist>
          </p>
        </div>


      </div>

    );
  }
}
