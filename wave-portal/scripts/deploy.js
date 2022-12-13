//We want to create a new block and get our smart contract on it! 
//deploying the contract, and also have its address on the blockchain! 
//website is going to need this so it knows where to look on the blockchain for your contract. 

const mainDeploy = async () => {

  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await mainDeploy();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();