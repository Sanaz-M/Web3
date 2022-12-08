// Compile contract locally and run it
// Imitating the blockchain environment to test

const main = async () => {

  //This will actually compile our contract and generate the necessary files we need to work with our contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  //Hardhat will create a local Ethereum network for us, but just for this contract.
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  //waveContract.address  will basically give us the address of the deployed contract. 
  console.log("Contract deployed to:", waveContract.address);
};

main();