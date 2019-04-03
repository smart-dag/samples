const { default: Wallet } = require("./sdagwallet/main/index");
const conf = require("./conf");
const thousand = require("./lib/amount");
(async function () {
    let wallet = new Wallet();
    wallet.configHub(conf.hub);
    wallet.loginWithMnemonic(conf.role.fond.mnemonic).then(() => {
        console.log(wallet.mainAddress);
        wallet.send({amount:1,to:conf.role.scott.address,text:"hello"}).then(()=>{
            process.exit();
        }).catch((err)=>console.log(err))
    }).catch((err) => console.log(err));
})();
