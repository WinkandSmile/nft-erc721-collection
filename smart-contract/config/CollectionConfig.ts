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
  contractName: 'Beastie11',
  tokenName: 'Beasties',
  tokenSymbol: 'B11',
  hiddenMetadataUri: 'ipfs://QmRmeFC1QLRmy5cqvvZ5BJDm7AHTDLmooWM46M8bqFwQyd/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xECfa4C5d8bCA1b0B77cFcF6fc4ce8e4226653698",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
