import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TraderBeastAAA10K',
  tokenName: 'TraderBeast AAA10K',
  tokenSymbol: 'TRB',
  hiddenMetadataUri: 'ipfs://QmRmeFC1QLRmy5cqvvZ5BJDm7AHTDLmooWM46M8bqFwQyd/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 20,
  },
  contractAddress: '0x42986Cb8F1F210bfA8c45e81A345fe39B0413d26',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
