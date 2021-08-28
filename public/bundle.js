const contractABI = [];
const contractAddress = '0x5Ed353099f25aaD47952CD72B291af218dF28CF6';
const web3 = new Web3('http://localhost:9545');
const simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then((accounts) => {
  console.log(accounts);
});
