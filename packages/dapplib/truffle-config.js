require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict forget force sugar guard render remind mistake guess deputy frame segment'; 
let testAccounts = [
"0x03d4bc8e1372bb7ea7e64ea44bee9faa3c4d08f7ea82d307c7a598e89df16da9",
"0x349bb425ac2fd8d22bd5e79841802c41a6928baabf8d323344c6ccd3372704f7",
"0x9c679d33b29edb461030379e2ddd74f87358f84f1bcb13d1a6537300246bdedf",
"0xa72b745b5cc59f924240eb4493e99011b69ec37d36d519adeba3a399975528b1",
"0xebaf40b6e571f143eed9ac34a855f5d5823315d466008dcc4f75cb022ea5fdf4",
"0x86ca9e780c896857d166554f33e4c26f823120b5e15eeefbc6c944e943a43c43",
"0x62c16c523c43e3861bbfcf68997dff605fbc0e1c7749c4356151ac3f1bf21785",
"0x83ab64fc74a3d6928c5750e3e508aca4d6b2d428637b8c2760a41149f060f3bc",
"0x6e917dd5d29231776faad71446ecc19471aa33e5b820304ec187e24aed178fa7",
"0x0cb8178cfa621697c4c8bb1212ee710f0c71e5098aed00a4cf911e6027bc0cdc"
]; 
let devUri = 'http://test.confluxrpc.org';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

