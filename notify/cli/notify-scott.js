const { default: Wallet } = require("./sdagwallet/main/index");
const conf = require("./conf");
const thousand = require("./lib/amount");
(async function () {
    let wallet = new Wallet();
    wallet.configHub(conf.hub);
    wallet.loginWithMnemonic(conf.role.scott.mnemonic).then(() => {
        console.log(wallet.mainAddress);
        wallet.getBalance().then((balance) => {
            console.log("balance",thousand.get_thousand_num(balance/10^6));
        });
        wallet.onAssetMessage(msg => {

            //console.log(msg);
            const from = msg.from;
            const unit = msg.unit;
            const text = msg.text;
            const time = msg.time;
            const to_msg = msg.to_msg;
            console.log({
                unit:unit,
                text:text,
                time:time,
                amout:to_msg[0][1],
            });

            wallet.getBalance().then((balance) => {
                console.log("new balance",thousand.get_thousand_num(balance/10^6));
            });

        });
    }).catch((err) => console.log(err));
})();