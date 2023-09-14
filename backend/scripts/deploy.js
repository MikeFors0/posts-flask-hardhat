const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  await myContract.waitForDeployment();

  // console.log("MyContract deployed to (address):", myContract.target);

  // пуш адресса контракта в файл json 
  const fs = require("fs");
  const path = require("path");
  
  const filePath = path.join(__dirname, "../artifacts/contracts/contract.sol/MyContract.json");
  
  let data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : {};
  data.address = myContract.target;
  fs.writeFileSync(filePath, JSON.stringify(data));


    
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });