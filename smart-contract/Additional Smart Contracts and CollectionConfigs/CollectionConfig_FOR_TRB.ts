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
  contractName: 'TraderBeasts',
  tokenName: 'TraderBeasts',
  tokenSymbol: 'TRB',
  hiddenMetadataUri: 'ipfs://QmRmeFC1QLRmy5cqvvZ5BJDm7AHTDLmooWM46M8bqFwQyd/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.025,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.025,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.025,
    maxMintAmountPerTx: 20,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
