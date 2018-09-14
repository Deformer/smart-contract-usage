import Web3 from 'web3';

import { blockchain } from '../../config';

export const web3 = new Web3(new Web3.providers.HttpProvider(blockchain.link));

