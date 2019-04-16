# The Fucking Monkeys 狗屁猿钱包

> Wow,他妈的猴子！

我一点都不讨厌猴子,相反我非常喜欢它们,它们越肏蛋,我是越喜欢.我有很多IOT的小制作,都是以monkey命名的.

### 这个项目的由来

前段时间看了一本关于经济学的书,说是某个团队做研究,用猴子实验经济学,结果学会如何***使用货币***的猴子们,竟然也学会了***嫖娼***.难怪女人变坏就有钱,男人有钱就变坏,骨子里的三观不正,在人类早期给找到了,虽然猴子并非属于进化论人类的童年.

所以这个项目,你能想到,就是给猴子用的啊.

这个钱包里,没有代币,只有香蕉token.一个香蕉token可以从饲养员那里换一个香蕉.所以,你可以认为这是一个稳定币.

为了让猴子们感觉亲切,我特意找了一张图片,用来做logo还是蛮合适的.

![](https://avatars1.githubusercontent.com/u/49477623?s=200&v=4)

### 需求分析

有些猴子太肏蛋了,让饲养员很头(xi)疼(huan).因此,饲养员需要论功奖罚.具体办法就是,制定KPI,多劳多得,少劳少得,不劳不得.

猴子如何获得食物呢?猴子属于灵长类,智商非常高,简直就是动物界的心机婊.猴子只需要手握钱包,碰一下饲养员的钱包,叮咚,一声巨响,饲养员收到一枚香蕉token就得给猴猴一根香蕉.

这是第一阶段

由于猴子非常多,动物园需要削减成本,所以园长决定开除饲养员.因此,第二阶段,就是用物联网做一台香蕉贩卖机,替代饲养员.

这一阶段,需要运用5G,物联网,进场交互等,来实现猴子通过本钱包以自助方式购买香蕉.

这是第二阶段

而第三阶段,应该是AI来起作用了,就是刷脸支付.

猴猴来到AI人工智能香蕉贩卖机前,刷一次脸,获得一根香蕉.

而这一切,都是上链的.

### 设计理念

- 猴子并不需要助记词
  - 打开钱包时,不需要提示创建钱包或导入钱包.因为猴子不会.
- 不用备份助记词或私钥
  - 猴子不会
- 碰撞即支付
  - 收款的猴子,手握钱包朝上.
  - 付款的猴子,手握钱包朝下.
  - 付款的猴子,用钱包扣向收款钱包的猴子,完成支付.
  - 扣一下发送1个香蕉,扣2下发送2个香蕉,以此类推
- 无需历史记录
  - 猴子根本不看历史记录的
- !@!@#$!#$!#%$%...
  - 我也不知道该怎么继续吹这个牛逼...


### 关于SDAG

SDAG是性能领先的区块链基础设施.你可以用SDAG搭建公链联盟链私有链都没问题,我甚至用SDAG搭建了一个还原链(每天定时重启,重新创世,前一天链上内容全部消失...).

所以,对于猴子钱包,我还是选择了SDAG.本钱包使用了SDAG的jssdk https://github.com/smart-dag/sdagwallet.js 和vue.js开发.

### 安装

```
sudo apt install make
sudo gpasswd -a $(whoami) docker
sudo docker pull registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev:latest
git clone https://github.com/the-fucking-monkeys/wallet.git
cd wallet
npm install
```

### 体验

启动SDAG区块链
```
sudo docker run --rm -d --name monkey -p 6615:6615 -p 8080:8080 registry.cn-beijing.aliyuncs.com/sdag/sdag_testnet_dev
```

启动猴子钱包

```
npm run serve
```

访问
```
http://localhost:8081
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```