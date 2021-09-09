
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  const cakeFactory = await ethers.getContractFactory("ApeFactory");
  //cakeToken = (await cakeFactory.deploy()) as CakeToken;
  // await cakeToken.deployed();
  const pancakeFactory =  await cakeFactory.attach("0xCdAbDB5eC9eeE7A6B25482BC674fcF41836AE7bA")

  console.log(await pancakeFactory.allPairsLength());
  console.log('hash generator:');
  const hash = await pancakeFactory.INIT_CODE_PAIR_HASH();
  console.log(hash);
  // expect(initialCount).to.eq(0);
  /* await pancakeFactory.createPair(
    '', // cake
    ''  // WBNB
  ); */

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
