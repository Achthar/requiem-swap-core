
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

  const reqFactory = await ethers.getContractFactory("RequiemFactory");
  //requiemToken = (await requiemFactory.deploy()) as requiemToken;
  // await requiemToken.deployed();
  const requiemFactory =  await reqFactory.attach("0xE26b6931ad909e2512B5eEdD14e87e507c4cb5BA")

  console.log(await requiemFactory.allPairsLength());
  console.log('hash generator:');
  const hash = await requiemFactory.INIT_CODE_PAIR_HASH();
  console.log(hash);
  // expect(initialCount).to.eq(0);
  /* await panrequiemFactory.createPair(
    '', // requiem
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
