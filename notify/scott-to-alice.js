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
        wallet.send({amount:1,to:conf.role.alice.address,text:"hello"}).then(()=>{
            wallet.getBalance().then((balance) => {
                console.log("balance",thousand.get_thousand_num(balance/10^6));
            });
        }).catch((err)=>console.log(err))
    }).catch((err) => console.log(err));
})();


