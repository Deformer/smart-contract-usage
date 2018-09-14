import { web3 } from "../web3";
import { smartContract } from '../../config';

export const getCarsContract = () => {
  web3.eth.defaultAccount = web3.eth.accounts[0];
  const booksContract = web3.eth.contract(smartContract.abi);
  return booksContract.at(smartContract.address);
};
