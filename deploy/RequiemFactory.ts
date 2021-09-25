import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import { writeFileSync } from 'fs';

// npx hardhat deploy --network bsc-testnet --tags deploy_BSCT --reset
// npx buidler verify --network bsc-testnet 0x3bB257a9D69089920A037D32cB9244d1931fA778 "0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B"


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, read} = deployments;

  const {deployer} = await getNamedAccounts();

  const pancakeFactory = await deploy('RequiemFactory', {
    from: deployer,
    args: [
      deployer, // feeToSetter
    ],
    log: true,
  });

  const init_hash = await read('RequiemFactory', 'INIT_CODE_PAIR_HASH')
  // console.log(x);

  const feeToSetter = await read('RequiemFactory', 'feeToSetter')
  console.log(feeToSetter)
  const contracts = {
    "RequiemFactory":  pancakeFactory.address,
    "INIT_CODE_PAIR_HASH": init_hash
  }

  pancakeFactory.deployedBytecode

  writeFileSync('swap-core.json', JSON.stringify(contracts));
};

export default func;
func.tags = ['RequiemFactory'];
