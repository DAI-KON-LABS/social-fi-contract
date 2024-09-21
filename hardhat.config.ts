import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const DEPLOYER_PRIVATE_KEY = process.env.DEV_WALLET_PK_MAIN;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.27',
  defaultNetwork: 'kairos',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.gateway.tenderly.co',
      chainId: 11155111,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    kairos: {
      url: 'https://public-en.kairos.node.kaia.io',
      chainId: 1001,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};

export default config;
