const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();
const mnemonic = "fade aunt crack express uncle fit valley faculty candy toddler buzz pink";
wallet.configHub("ws://localhost:6615");
wallet.loginWithMnemonic(mnemonic).then(async () => {
    await wallet.getBalance();
    wallet.send({
        to: 'HKIRYKXL65TTTBLIW3CXIYQHGPBX3YGI',
        amount: 10,
        text: 'from scott to alice'
    }).then(() => {
        console.log("ok");
    }).catch((err) => {
        console.log(err);
    });
});
