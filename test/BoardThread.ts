import {
  time,
  loadFixture,
} from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { expect } from 'chai';
import hre from 'hardhat';
import { getAddress, parseGwei } from 'viem';

describe('BoardThread', function () {
  async function deployBoardThreadFixture() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();
    const boardThread = await hre.viem.deployContract('BoardThread', []);
    const publicClient = await hre.viem.getPublicClient();
    return {
      boardThread,
      owner,
      otherAccount,
      publicClient,
    };
  }

  it('Deployment', async function () {
    const { boardThread } = await loadFixture(deployBoardThreadFixture);
  });
});
