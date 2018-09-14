/* eslint-disable no-unused-vars */
import path from 'path'

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '/api',
    masterKey: requireProcessEnv('MASTER_KEY'),
    smartContract: {
      abi: [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_number",
              "type": "bytes16"
            },
            {
              "name": "_description",
              "type": "bytes16"
            }
          ],
          "name": "setCar",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getCarsAmount",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      address: requireProcessEnv('SC_ADDRESS')
    },
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  test: {
    mongo: {
      uri: 'mongodb://localhost/solidity-test-task-test',
      options: {
        debug: false
      }
    },
    blockchain: {
      link: 'http://127.0.0.1:8545',
    },
  },
  development: {
    mongo: {
      uri: 'mongodb://localhost/solidity-test-task-dev',
      options: {
        debug: true
      }
    },
    blockchain: {
      link: 'http://127.0.0.1:8545'
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/solidity-test-task'
    },
    blockchain: {
      link: 'http://127.0.0.1:8545'
    }
  }
}

module.exports = Object.assign(config.all, config[config.all.env])
export default module.exports
