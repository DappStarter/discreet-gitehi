require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'good entire sugar tooth film ring remain unfold inner clip bottom gaze'; 
let testAccounts = [
"0x515d1f06edffff215fc33448e36f833741e84541e489bf8c356dda327a33de58",
"0x7970748b89fe01fceb2f7ac7fe578d89069c17e996772dfb2dfc1e1293849a24",
"0xe5714065a99a877507340533fe1f39ad5a8518b468ba9801b389147f94751f3d",
"0x9430ab311326bbf6cf012057e4f0967763c7a6dcc0b71744f9ef4aa304f3c6b6",
"0x83a17585758c365b52189dc75548175e00fe584ef7eac04d366a2dded69db642",
"0x7a81a7aca6a5a9ecde15a909fdac5dc34d85fa6d90262ccbb03f5cbe2c191ea8",
"0x6e28e8977c8e3312e82ea10e2c73779afe7b6fc0c165fbd05428348edf5156d1",
"0x07a4468895260ed984b2404aa4dc6b8a0771092409bff543de1fe115cc5fb4f6",
"0x36aa522161d181ca387a6fb270abf9b8b1b9cff437aa59aab61c4b2f5c160d34",
"0x050cc2c5e9ffe0f1082bda1a9c9799272f307491c2f365f24eeb6098a7b2d70e"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
