const { default: Wallet } = require("./sdagwallet/main/index");
(async function () {
    let wallet = new Wallet();
    wallet.configHub('ws://10.168.3.131:6615');
    var mnemonic = wallet.generateMnemonic();
    console.log(mnemonic);
    wallet.loginWithMnemonic(mnemonic).then(() => {
        console.log(wallet.mainAddress);
    }).catch((err) => console.log(err));
})();