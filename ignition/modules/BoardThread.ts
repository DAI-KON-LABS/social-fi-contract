// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { parseEther } from 'viem';

const LockModule = buildModule('LockModule', (m) => {
  const boardThread = m.contract('BoardThread', [], {});

  return { boardThread };
});

export default LockModule;
