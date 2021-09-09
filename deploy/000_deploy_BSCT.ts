import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import { writeFileSync } from 'fs';

// npx hardhat deploy --network bsc-testnet --tags deploy_BSCT --reset

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, read} = deployments;

  const {deployer} = await getNamedAccounts();

  const pancakeFactory = await deploy('ApeFactory', {
    from: deployer,
    args: [
      deployer, // feeToSetter
    ],
    log: true,
  });

  const init_hash = await read('ApeFactory', 'INIT_CODE_PAIR_HASH')
  // console.log(x);

  const feeToSetter = await read('ApeFactory', 'feeToSetter')
  console.log(feeToSetter)
  const contracts = {
    "ApeFactory":  pancakeFactory.address,
    "INIT_CODE_PAIR_HASH": init_hash
  }

  pancakeFactory.deployedBytecode

  writeFileSync('swap-core.json', JSON.stringify(contracts));
};

export default func;
func.tags = ['deploy_BSCT'];
