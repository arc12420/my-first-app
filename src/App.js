import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulClass from './Components/StatefulClass'
import StatelessFunc from './Components/StatelessFunc'

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  changePicture = (e) => {
    this.setState({
      picture: e.target.value
    })
  }

  addFriend = () => {
    const buddy = { name: this.state.name, picture: this.state.picture}
    this.setState({
      friends: [...this.state.friends, buddy],
      picture: '',
      name: ''
    })
  }

 render(){
   const mappedFriends = this.state.friends.map( (elem, index) => {
     return <div key={`friend-${index}`}>
       <img className="friend-pic" alt="friend-pic" src={elem.picture}/>
       <h3>{elem.name}</h3>
     </div>
   })
   return <div>
     <span>Picture:</span>
     <input 
          value={this.state.picture} 
          onChange={ e => this.changePicture(e)}
      />
     <span>Name:</span>
     <input 
          value={this.state.name} 
          onChange={ e => this.changeName(e)}
      />
     <button onClick={() => this.addFriend()}>Add Friend</button>
     {mappedFriends}
   </div>
 }
}

export default App;
