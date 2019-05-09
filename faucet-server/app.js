const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const fileUpload = require('express-fileupload');
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
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: 'secret', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge: conf.sessionlife, // 设置 session 的有效时间，单位毫秒
    },
}));
app.use(fileUpload());
const exphbs = require('express-handlebars');
// 配置模板引擎
app.engine('html', exphbs({
    layoutsDir: 'views',
    defaultLayout: 'layout',
    extname: '.html'
}));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('home', {
        layout: false,
        title: "首页",
        address: ""
    });
});

app.get('/:address', (req, res) => {
    var address = req.params.address;
    res.render('home', {
        layout: false,
        title: "首页",
        address: address
    });
});

app.get('/api/balance', (req, res) => {
    wallet.getBalance().then((balance) => {
        res.send(amount.get_thousand_num(balance / 1000000));
    }).catch((err) => res.send(err));

});

app.get('/api/address', (req, res) => {
    res.send(wallet_address);
});

app.post('/api/balance', (req, res) => {
    const address = req.body.address;
    console.log("address", address);
    if (!req.session.address) {
        wallet.send({ amount: 10, to: address, text: "hello" }).then(() => {
            req.session.address = address;
            res.json({
                type: "success",
                msg: "转账成功！"
            });
        }).catch((err) => res.send("hub error"));
    } else {
        res.json({
            type: "danger",
            msg: "24小时只能领取一次！"
        });
    }
});

//区块链存证
app.get('/demo/upload', (req, res) => {
    res.render('upload', {
        layout: false,
        title: "存证"
    });
});
app.post('/demo/upload', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    console.dir(sampleFile);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`public/files/${sampleFile.md5}-${sampleFile.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            json_text = {
                file_name: sampleFile.name,
                file_hash: sampleFile.md5,
                file_url: `${conf.host}:${conf.port}/files/${sampleFile.md5}-${sampleFile.name}`
            }
            var text = JSON.stringify(json_text);
            wallet.send({ amount: 0.0001, to: "AR67Y3TISR7P2UYIB3XQKVIQNOQ2XEPD", text: text }).then((result) => {
                console.log(result);
                var unit_id = result.hash;//unit id
                res.render('success', {
                    layout: false,
                    title: "存证",
                    unit_id: unit_id,
                    file_hash: json_text.file_hash,
                    file_name: json_text.file_name,
                    file_url: json_text.file_url
                });
            }).catch((err) => {
                console.log(err);
                res.render('upload', {
                    layout: false,
                    title: "存证",
                    err: "hub错误"
                });
            });
        }
        // res.send(`files/${sampleFile.md5}-${sampleFile.name}`);
    });

});

function login() {
    var mnemonic = wallet.generateMnemonic().toString();
    if (conf.mnemonic != "random") {
        mnemonic = conf.mnemonic;
    }
    wallet.loginWithMnemonic(mnemonic).then(() => {
        status = 1;
        wallet_address = wallet.mainAddress;
    }).catch((err) => res.send(err));
}
login();
app.listen(conf.port, () => console.log(`http://localhost:${conf.port}`));