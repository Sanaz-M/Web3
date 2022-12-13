// Compile contract locally and run it
// Imitating the blockchain environment to test

const main = async () => {
  //the wallet address of contract owner and a random wallet address
  const [owner, randomPerson] = await hre.ethers.getSigners();

  //This will actually compile our contract and generate the necessary files we need to work with our contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  //Hardhat will create a local Ethereum network for us, but just for this contract.
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  //waveContract.address will basically give us the address of the deployed contract. 
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  await waveContract.getTotalWaves();

  // someone is waving :)
  const isWaving = await waveContract.wave();
  await isWaving.wait();

  await waveContract.getTotalWaves();
};

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();