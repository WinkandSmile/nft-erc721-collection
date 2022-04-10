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
  contractName: 'TraderBeastsAA',
  tokenName: 'Trader Beasts A',
  tokenSymbol: 'TRBAA',
  hiddenMetadataUri: 'ipfs://QmbmSGdWgE8fDZ4pD4eViGfLDWKWmPXNPgzgUd7WcJ264i/hidden.json',
  maxSupply: 50,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x807BB03E753321c10A11390Dc5581BA86C4c7312",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
