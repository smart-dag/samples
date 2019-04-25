const { default: Wallet } = require("sdagwallet.js");
(async function () {
    let wallet = new Wallet();
    wallet.configHub("ws:127.0.0.1:6615");
    var mnemonic = wallet.generateMnemonic();
    console.log(mnemonic);
    wallet.loginWithMnemonic(mnemonic).then(() => {
        console.log(wallet.mainAddress);
    }).catch((err) => console.log(err));
})();
