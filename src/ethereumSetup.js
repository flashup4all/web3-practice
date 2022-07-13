import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

// const greeeterABI = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true}];
// const greeterAddress = '0x03757DC8b57cB7196D28C7011C6E7Ff330b5201b';

// const greeterContract = new web3.eth.Contract(greeeterABI, greeterAddress);

// export { greeterContract };

// JSON.stringify(TodoList.abi)
const todoListABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"taskCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb6cb58a5"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tasks","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"bool","name":"completed","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8d977672"},{"inputs":[{"internalType":"string","name":"_content","type":"string"}],"name":"createTask","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x111002aa"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"toogleTaskCompleted","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd4fffd35"}];
const todoListAddress = '0x7469F88DF01c5B26150C2ab2b54b9CD09d0ac568';

const todoListContract = new web3.eth.Contract(todoListABI, todoListAddress);
// console.log(todoListContract.method.taskCount)
// Accounts
let account;

// web3.eth.getAccounts(function(err, accounts) {
//   if (err != null) {
//     alert("Error retrieving accounts.");
//     return;
//   }
//   if (accounts.length == 0) {
//     alert("No account found! Make sure the Ethereum client is configured properly.");
//     return;
//   }
//   account = accounts[0];
// //   web3.eth.defaultAccount = account.toString();
//   console.log('Account: ' + account);

// });
(async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    web3.eth.defaultAccount = accounts[0].toString();
  
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log("balance", web3.utils.fromWei(balance, "ether"));
  })();



export { todoListContract, web3};

