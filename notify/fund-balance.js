const { default: Wallet } = require("./sdagwallet/main/index");
const conf = require("./conf");
const thousand = require("./lib/amount");
(async function () {
    let wallet = new Wallet();
    wallet.configHub(conf.hub);
    wallet.loginWithMnemonic(conf.role.fond.mnemonic).then(() => {
        console.log(wallet.mainAddress);
        wallet.getBalance().then((balance) => {
            console.log("balance",thousand.get_thousand_num(balance/10^6));
            process.exit();
        });
    }).catch((err) => console.log(err));
})();


