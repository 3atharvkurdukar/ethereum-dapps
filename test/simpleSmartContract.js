const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('SimpleSmartContract', (accounts) => {
  it('should deploy smart contract properly', async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();
    console.log(simpleSmartContract.address);
    assert(simpleSmartContract.address !== '');
  });
});
