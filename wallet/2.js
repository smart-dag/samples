const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();

//钱包使用刚才docker启动的hub地址
wallet.configHub("ws://10.168.3.131:3003");

// 钱包使用助记词登录
wallet.loginWithMnemonic("high mention quality unfair sudden shop coach ankle kind broken ski teach").then(()=>{
    var address = wallet.getAddress();
    console.log(address);
    wallet.getBalance().then((balance)=>{
        console.log(balance);
    });

});
