import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 import { todoListContract, web3 } from './ethereumSetup';
class App extends Component{

  constructor(props){
    super(props);
    const account = web3.eth.defaultAccount
    this.state = {
      greeting: "",
      totalTaskCount: "",
      account: account
    }
  }

  componentDidMount(){
    // var data =  greeterContract.methods.greet()
      // this.createTask()
    // this.loadCurrentMessage()
    // this.toogleTaskCompleted(1)
    this.loadCurrentMessage()
      // todoListContract.methods.taskCount().call().then( function( info ) { 
      //   console.log("count: ", info);
      //   // document.getElementById('lastInfo').innerHTML = info;
      // }); 
    
  }

  loadCurrentMessage = async () => {
    todoListContract.methods.tasks(1).call().then( function( info ) { 
      console.log("info: ", info);
      // document.getElementById('lastInfo').innerHTML = info;
    });  
  };
  createTask() {
    this.totalTaskCount++;

    console.log('Account: ' + this.state.account);
    const info = `New task ${this.totalTaskCount}`
    todoListContract.methods.createTask (info).send({from: this.state.account}).then( function(tx) { 
      console.log("Transaction: ", tx); 
    });
  };

  toogleTaskCompleted(id) {
    todoListContract.methods.toogleTaskCompleted (id).send({from: this.state.account}).then( function(tx) { 
      console.log("complete toogle: ", tx); 
    });
  };
  render(){
    // const [ greeting ] = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>{this.state.greeting}</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
}

export default App;
