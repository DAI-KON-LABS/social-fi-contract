import { viem } from 'hardhat';
import { LoremIpsum } from 'lorem-ipsum';
import hre from 'hardhat';
import { kairos } from 'viem/chains';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

async function deploy() {
  //   const boardThread = await viem.deployContract('BoardThread', []);
  //   console.log('BoardThread deployed to:', boardThread.address);
  //   return boardThread;

  const boardThread = await hre.viem.getContractAt(
    'BoardThread',
    '0x6A5266a160a23dAa7BC4d9A1994B317482A2ED91',
    {
      client: {
        public: await hre.viem.getPublicClient({
          chain: kairos,
        }),
      },
    },
  );

  return boardThread;
}

async function main() {
  const boardThread = await deploy();
  console.log('BoardThread deployed to:', boardThread.address);

  const threadId = await boardThread.read.threadId();
  console.log('Thread ID:', threadId.toString());

  console.log('Adding a new thread...');
  const txHash1 = await boardThread.write.writePost([
    lorem.generateSentences(1),
    lorem.generateParagraphs(2),
    '',
  ]);

  console.log('txHash1:', txHash1);

  console.log('Updating the thread...');
  const txHash2 = await boardThread.write.updatePost([
    3n,
    lorem.generateParagraphs(1),
    lorem.generateParagraphs(2),
    '',
    true,
  ]);

  console.log('txHash2:', txHash2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
