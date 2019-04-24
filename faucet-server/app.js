const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const conf = require("./config.js");
var fs = require('fs');
var cors = require('cors');
var amount = require('./amount.js');
var status = 0;
var wallet_address = "none";
const { default: Wallet } = require("sdagwallet.js");
let wallet = new Wallet();
wallet.configHub(conf.hub);

const app = express();
var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.get('/', (req, res) => res.sendfile("./home.html"));
app.get('/api/balance', (req, res) => {
    wallet.getBalance().then((balance) => {
        res.send(amount.get_thousand_num(balance / 1000000));
    }).catch((err) => res.send(err));

});
app.get('/api/address', (req, res) => {
    res.send(wallet_address);
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: 'secret', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 设置 session 的有效时间，单位毫秒
    },
}));

app.post('/api/balance', (req, res) => {
    const address = req.body.address;
    console.log("address", address);
    if (!req.session.address) {
        wallet.send({ amount: 10, to: address, text: "hello" }).then(() => {
            req.session.address = address;
            res.json({
                type:"success",
                msg:"转账成功！"
            });
        }).catch((err) => res.send("hub error"));
    } else {
        res.json({
            type:"danger",
            msg:"24小时只能领取一次！"
        });
    }
});

function login() {
    wallet.loginWithMnemonic(conf.mnemonic).then(() => {
        status = 1;
        wallet_address = wallet.mainAddress;

    }).catch((err) => res.send(err));
}
login();
app.listen(conf.port, () => console.log(`http://localhost:${conf.port}`));