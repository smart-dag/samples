# 订阅

目前，可以订阅自己的入账信息。暂不支持出账信息。

### 安装

```
git clone https://github.com/smart-dag/samples.git
cd samples/notify
npm install
```

### 配置文件

conf.js
```
exports.hub = "ws://10.168.3.131:6615"
exports.role = {
    fond: {
        mnemonic: "find exotic area bronze spider nerve produce anchor fortune inform involve impact",
        address: "UFCSFGWXWTWYSZMTJPJPSU7LDN4VNDIO"
    },
    scott: {
        mnemonic: "citizen story click ignore turtle fashion boil cabbage follow torch solid lamp",
        address: "UFAXN7EU6S7EKA5QEUKRXFWGOTXHNQSL"
    },
    alice: {
        mnemonic: "drip ahead sort camera toilet hope decline pill treat traffic dish comic",
        address: "6LPGHYO5YF7IHQWXUNDYZS57BDTPAG2X"
    }
}
```

把ws://10.168.3.131:6615更改为你的hub地址即可。

### 订阅演示

查看 scott 的余额
```
node scott-balance.js
```

查看 alice 的余额
```
node alice-balance.js
```

查看 基金会 的余额
```
node fund-balance.js
```

监控 scott 的入账信息

```
node notify-scott.js
```

从基金会给scott转账

```
node fund-to-scott.js
```

这时，监控 scott 的命令行会有提示

```
node notify-scott.js 
(node:26806) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
UFAXN7EU6S7EKA5QEUKRXFWGOTXHNQSL
balance 1,663,006
{ unit: 'aAqsslbNF/0LSlxvM8+oSKlHwP08CYpb39uOV5bMQu4=',
  text: '',
  time: 1554199536,
  amout: 1000000 }
new balance 1,763,006
```

### 应用场景

新零售行业，顾客购买一个煎饼，使用SDAG钱包给老板支付2个单位的数字资产。一个硬件盒子，会通过语音播放，把金额播放出来。（和支付宝的到帐语音提示一样）

### bug与问题

目前 ```wallet.logout();``` 方法还存在一些bug。

脚本运行后，会返回一个虽然不是错误但是很碍眼的警告信息：

```
(node:26465) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
```

