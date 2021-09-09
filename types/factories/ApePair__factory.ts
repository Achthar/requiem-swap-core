/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApePair, ApePairInterface } from "../ApePair";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604051469080605261236f823960408051918290036052018220828201825260128352714170655377617046696e616e6365204c507360701b6020938401528151808301835260018152603160f81b908401528151808401919091527f3daa526e0cb6e02f6c18cec975ea46f882a39b41e4defdbb2e199e0476b3122d818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b031916331790556122628061010d6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610b0e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b3c565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b66565b604080519115158252519081900360200190f35b610339610b7d565b604080516001600160a01b039092168252519081900360200190f35b61035d610b8c565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b92565b61035d610c2c565b6103b5610c50565b6040805160ff9092168252519081900360200190f35b61035d610c55565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c5b565b61035d610cdd565b61035d610ce3565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610ce9565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610fe7565b61035d610ff9565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610fff565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611011565b6040805192835260208301919091528051918290030190f35b6102446113b5565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356113d7565b61035d6113e4565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b03166113ea565b610339611553565b610339611562565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611571565b61035d600480360360408110156105a357600080fd5b506001600160a01b0381358116916020013516611771565b61023a61178e565b600c5460011461060c576040805162461bcd60e51b815260206004820152600f60248201526e105c1954ddd85c0e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c558415158061061f5750600084115b61065a5760405162461bcd60e51b81526004018080602001828103825260238152602001806121c36023913960400191505060405180910390fd5b600080610665610b3c565b5091509150816001600160701b03168710801561068a5750806001600160701b031686105b6106db576040805162461bcd60e51b815260206004820152601f60248201527f417065537761703a20494e53554646494349454e545f4c495155494449545900604482015290519081900360640190fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107195750806001600160a01b0316896001600160a01b031614155b610760576040805162461bcd60e51b8152602060048201526013602482015272417065537761703a20494e56414c49445f544f60681b604482015290519081900360640190fd5b8a1561077157610771828a8d6118ee565b891561078257610782818a8c6118ee565b861561083d57886001600160a01b03166384800812338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082457600080fd5b505af1158015610838573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088357600080fd5b505afa158015610897573d6000803e3d6000fd5b505050506040513d60208110156108ad57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108f957600080fd5b505afa15801561090d573d6000803e3d6000fd5b505050506040513d602081101561092357600080fd5b5051925060009150506001600160701b0385168a90038311610946576000610955565b89856001600160701b03160383035b9050600089856001600160701b0316038311610972576000610981565b89856001600160701b03160383035b905060008211806109925750600081115b6109cd5760405162461bcd60e51b81526004018080602001828103825260228152602001806121e66022913960400191505060405180910390fd5b6000610a016109e384600263ffffffff611a8816565b6109f5876103e863ffffffff611a8816565b9063ffffffff611aeb16565b90506000610a196109e384600263ffffffff611a8816565b9050610a4a620f4240610a3e6001600160701b038b8116908b1663ffffffff611a8816565b9063ffffffff611a8816565b610a5a838363ffffffff611a8816565b1015610a9a576040805162461bcd60e51b815260206004820152600a602482015269417065537761703a204b60b01b604482015290519081900360640190fd5b5050610aa884848888611b3b565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b604051806040016040528060128152602001714170655377617046696e616e6365204c507360701b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b73338484611cfe565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610c17576001600160a01b0384166000908152600260209081526040808320338452909152902054610bf2908363ffffffff611aeb16565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c22848484611d60565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610caf576040805162461bcd60e51b815260206004820152601260248201527120b832a9bbb0b81d102327a92124a22222a760711b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d34576040805162461bcd60e51b815260206004820152600f60248201526e105c1954ddd85c0e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c81905580610d44610b3c565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d9857600080fd5b505afa158015610dac573d6000803e3d6000fd5b505050506040513d6020811015610dc257600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e1557600080fd5b505afa158015610e29573d6000803e3d6000fd5b505050506040513d6020811015610e3f57600080fd5b505190506000610e5e836001600160701b03871663ffffffff611aeb16565b90506000610e7b836001600160701b03871663ffffffff611aeb16565b90506000610e898787611e1a565b60005490915080610ec657610eb26103e86109f5610ead878763ffffffff611a8816565b611f78565b9850610ec160006103e8611fca565b610f15565b610f126001600160701b038916610ee3868463ffffffff611a8816565b81610eea57fe5b046001600160701b038916610f05868563ffffffff611a8816565b81610f0c57fe5b04612060565b98505b60008911610f545760405162461bcd60e51b815260040180806020018281038252602681526020018061219d6026913960400191505060405180910390fd5b610f5e8a8a611fca565b610f6a86868a8a611b3b565b8115610f9a57600854610f96906001600160701b0380821691600160701b90041663ffffffff611a8816565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461105d576040805162461bcd60e51b815260206004820152600f60248201526e105c1954ddd85c0e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c8190558061106d610b3c565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110c957600080fd5b505afa1580156110dd573d6000803e3d6000fd5b505050506040513d60208110156110f357600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561114157600080fd5b505afa158015611155573d6000803e3d6000fd5b505050506040513d602081101561116b57600080fd5b50513060009081526001602052604081205491925061118a8888611e1a565b600054909150806111a1848763ffffffff611a8816565b816111a857fe5b049a50806111bc848663ffffffff611a8816565b816111c357fe5b04995060008b1180156111d6575060008a115b6112115760405162461bcd60e51b81526004018080602001828103825260268152602001806122086026913960400191505060405180910390fd5b61121b3084612078565b611226878d8d6118ee565b611231868d8c6118ee565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561127757600080fd5b505afa15801561128b573d6000803e3d6000fd5b505050506040513d60208110156112a157600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112ed57600080fd5b505afa158015611301573d6000803e3d6000fd5b505050506040513d602081101561131757600080fd5b5051935061132785858b8b611b3b565b811561135757600854611353906001600160701b0380821691600160701b90041663ffffffff611a8816565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600681526020016504150452d4c560d41b81525081565b6000610b73338484611d60565b6103e881565b600c54600114611433576040805162461bcd60e51b815260206004820152600f60248201526e105c1954ddd85c0e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114e292859287926114dd926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156114a557600080fd5b505afa1580156114b9573d6000803e3d6000fd5b505050506040513d60208110156114cf57600080fd5b50519063ffffffff611aeb16565b6118ee565b600854604080516370a0823160e01b8152306004820152905161154992849287926114dd92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b1580156114a557600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115b9576040805162461bcd60e51b815260206004820152601060248201526f105c1954ddd85c0e881156141254915160821b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116d4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061170a5750886001600160a01b0316816001600160a01b0316145b61175b576040805162461bcd60e51b815260206004820152601a60248201527f417065537761703a20494e56414c49445f5349474e4154555245000000000000604482015290519081900360640190fd5b611766898989611cfe565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c546001146117d7576040805162461bcd60e51b815260206004820152600f60248201526e105c1954ddd85c0e881313d0d2d151608a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118e7926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561182857600080fd5b505afa15801561183c573d6000803e3d6000fd5b505050506040513d602081101561185257600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561189f57600080fd5b505afa1580156118b3573d6000803e3d6000fd5b505050506040513d60208110156118c957600080fd5b50516008546001600160701b0380821691600160701b900416611b3b565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061199b5780518252601f19909201916020918201910161197c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119fd576040519150601f19603f3d011682016040523d82523d6000602084013e611a02565b606091505b5091509150818015611a30575080511580611a305750808060200190516020811015611a2d57600080fd5b50515b611a81576040805162461bcd60e51b815260206004820152601860248201527f417065537761703a205452414e534645525f4641494c45440000000000000000604482015290519081900360640190fd5b5050505050565b6000811580611aa357505080820282828281611aa057fe5b04145b610b77576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b77576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b5957506001600160701b038311155b611b9e576040805162461bcd60e51b8152602060048201526011602482015270417065537761703a204f564552464c4f5760781b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611bce57506001600160701b03841615155b8015611be257506001600160701b03831615155b15611c53578063ffffffff16611c1085611bfb86612116565b6001600160e01b03169063ffffffff61212816565b600980546001600160e01b03929092169290920201905563ffffffff8116611c3b84611bfb87612116565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d89908263ffffffff611aeb16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611dbe908263ffffffff61214d16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e6b57600080fd5b505afa158015611e7f573d6000803e3d6000fd5b505050506040513d6020811015611e9557600080fd5b5051600b546001600160a01b038216158015945091925090611f64578015611f5f576000611ed8610ead6001600160701b0388811690881663ffffffff611a8816565b90506000611ee583611f78565b905080821115611f5c576000611f13611f04848463ffffffff611aeb16565b6000549063ffffffff611a8816565b90506000611f3883611f2c86600363ffffffff611a8816565b9063ffffffff61214d16565b90506000818381611f4557fe5b0490508015611f5857611f588782611fca565b5050505b50505b611f70565b8015611f70576000600b555b505092915050565b60006003821115611fbb575080600160028204015b81811015611fb557809150600281828581611fa457fe5b040181611fad57fe5b049050611f8d565b50611fc5565b8115611fc5575060015b919050565b600054611fdd908263ffffffff61214d16565b60009081556001600160a01b038316815260016020526040902054612008908263ffffffff61214d16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081831061206f5781612071565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546120a1908263ffffffff611aeb16565b6001600160a01b038316600090815260016020526040812091909155546120ce908263ffffffff611aeb16565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161214557fe5b049392505050565b80820182811015610b77576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe417065537761703a20494e53554646494349454e545f4c49515549444954595f4d494e544544417065537761703a20494e53554646494349454e545f4f55545055545f414d4f554e54417065537761703a20494e53554646494349454e545f494e5055545f414d4f554e54417065537761703a20494e53554646494349454e545f4c49515549444954595f4255524e4544a265627a7a7231582067b720d7f2b9c561172ca84c1ee612b26ce03b5c0780b1c843fc6ab1e78144a864736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

export class ApePair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ApePair> {
    return super.deploy(overrides || {}) as Promise<ApePair>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ApePair {
    return super.attach(address) as ApePair;
  }
  connect(signer: Signer): ApePair__factory {
    return super.connect(signer) as ApePair__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ApePairInterface {
    return new utils.Interface(_abi) as ApePairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApePair {
    return new Contract(address, _abi, signerOrProvider) as ApePair;
  }
}
