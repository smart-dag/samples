# 示例

首先你要在本地运行SDAG区块链。

如果你没有安装 docker ，可输入如下命令安装。（ubuntu）

```
sudo apt install docker.io
```

启动docker服务：

```
sudo service docker start
```

windows 用户在这里下载：https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe



然后拉取SDAG最新的测试版开发环境

```
docker pull registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev:latest
```


查看下载的镜像id

```
sudo docker images
```

```
REPOSITORY                                               TAG                 IMAGE ID            CREATED             SIZE
registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev   latest              9e23695ab56e        5 hours ago         962MB
```

接下来就是愉快地启动了:

```
docker run --rm -d -p 3003:6615 9e23695ab56e
```

这个时候，SDAG就已经在运行之中了，你可以通过和SDAG的HUB（对外端口3003）交互来进行区块链应用开发。


找到有钱的助记词：

查看运行的容器

```
docker ps -a
```

看到这个运行的名字是ecstatic_diffie ，下面进入容器。

```
docker exec -it ecstatic_diffie /bin/bash
```

输入命令：

```
cat data/sdg/settings.json
```

```
{
    "hub_url": [
        "127.0.0.1:6615"
    ],
    "genesis_unit": "UJ1md9+vMpEQ4QHEVOHo0XOSl50FHuci+sUkH8VpMyA=",
    "mnemonic": "high mention quality unfair sudden shop coach ankle kind broken ski teach"
}
```

找到 mnemonic，即是测试环境中有钱的助记词：

```
high mention quality unfair sudden shop coach ankle kind broken ski teach
```

接下来，使用sdagwallet.js 进行开发。

进入wallet项目目录，安装sdagwallet.js

```
npm install sdagwallet.js --save
```

新建一个文件 1.js

```
import Wallet from 'sdagwallet.js'
 
let wallet = new Wallet();
```

（未完待续）

