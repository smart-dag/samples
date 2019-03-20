const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();

const mnemonic = "april warrior alarm actress end story social palm desert twist knife future";

wallet.configHub("ws://localhost:6615");
wallet.loginWithMnemonic(mnemonic).then(() => {
    var address = wallet.getAddress();
    console.log("address",address);
    wallet.getBalance().then((balance) => {
        console.log("balance",balance);
    });
});
