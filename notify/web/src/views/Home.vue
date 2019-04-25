<template>
  <div class="home">
    <div class="parentDiv tableCell">
      <div class="id1">
        <div class="childDiv">
          <div class="box">
            <h1>Notify</h1>
            <div class="balance">
              <countTo
                :start-val="startVal"
                :end-val="endVal"
                :duration="3000"
                :decimals="4"
                :suffix="symbol"
              ></countTo>
            </div>
            <p>
              拷贝下面地址,
              <a :href="'http://faucet.sdag.io:60004/'+address" target="_blank">
                <span class="link">猛击此处打开水龙头</span>
              </a>,体验秒级到账.
            </p>
            <el-input :value="address">
              <el-button slot="append" @click="copy_address" icon="el-icon-document"></el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background: #f56c6c;
}
.el-notification.right {
  right: 16px;
  width: 400px;
}
.balancebak {
  background-color: hsla(0, 0%, 0%, 0.1);
  text-shadow: 0 0 10px rgba(246, 65, 108, 0.7);
}
.box {
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 0.5rem 0.1rem rgba(150, 150, 150, 0.1);
}
.balance {
  border-radius: 5px;
  color: rgb(246, 65, 108);
  font-size: 4rem;
}
.tableCell {
  display: table;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.tableCell .id1 {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.tableCell .childDiv {
  display: inline-block;
  width: 80%;
  background: white;
  border-radius: 5px;
}
.link {
  font-weight: 900;
  font-size: 18px;
  color: blue;
}
</style>

<script>
// @ is an alias to /src
import countTo from "vue-count-to";
import HelloWorld from "@/components/HelloWorld.vue";
import { setTimeout } from "timers";
const { default: Wallet } = require("sdagwallet.js");
let wallet = new Wallet();

export default {
  name: "home",
  components: { countTo },
  data() {
    return {
      startVal: 0,
      endVal: 0,
      mnemonic: "",
      address: "",
      balance: 0,
      symbol: " SDG"
    };
  },
  methods: {
    copy_address() {
      let self = this;
      this.$copyText(this.address).then(
        function(e) {
          self.$message({
            message: "Copied",
            type: "success"
          });
          console.log(e);
        },
        function(e) {
          self.$message.error("Can not copy");
          console.log(e);
        }
      );
    },
    notify(address, amout, text, closetime) {
      //closetime 多少毫秒后关闭
      let title, msg, type, duration;
      if (!closetime) {
        //没设置,则永不关闭
        duration = 0;
      } else {
        //设置关闭的毫秒数
        duration = closetime;
      }

      if (amout < 0) {
        //转出
        type = "warning";
        title = "转出通知";
        msg = `<p>转出 <b>${Math.abs(amout)}</b> ${
          this.symbol
        } </p><p>对方账户</p><p> ${address} </p><p>转账信息</p><p> ${text}</p>`;
      } else {
        //到账
        type = "success";
        title = `到账通知`;
        msg = `<p>到账 <b>${amout}</b> ${
          this.symbol
        } </p><p>付款方</p> <p>${address}<p/> <p>转账信息</p><p> ${text}</p>`;
      }
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: msg,
        type: type,
        duration: duration //0为自动关闭
      });
    },
    //必须登录有调用
    getBalance() {
      wallet.getBalance().then(balance => {
        let newbalance = balance / 1000000;
        let lastbalance = this.balance;
        this.startVal = lastbalance;
        this.endVal = newbalance;
        this.balance = newbalance;
      });
    },
    onmsg(msg) {
      console.log(msg);
      let type, from, to, address, unit, time, amout, text;

      from = msg.from;
      unit = msg.unit;
      time = msg.time;
      text = msg.text;

      //判断from是不是自己
      if (from == this.address) {
        console.log("out");
        //如果是自己,则是转账通知.(钱减少了,发给别人)
        type = "out";
      } else {
        console.log("in");
        //到账通知.(钱增加了,别人发给自己)
        type = "in";
        let tomsg = msg.to_msg;
        tomsg.forEach(element => {
          let to = element[0];
          if (to == this.address) {
            //如果地址是自己
            console.log("to", to);
            amout = element[1];
          }
        });
      }
      amout = amout / 1000000;
      console.log({
        type: type,
        unit: unit,
        from: from,
        time: time,
        to_msg: msg.to_msg,
        amout: amout,
        text: text
      });

      if (type == "in") {
        //in
        address = from;
      } else {
        //out
        address = to;
        amout = amout * -1;
      }
      this.notify(address, amout, text, 0);
      this.getBalance();
    },
    //到账通知
    loopEvt() {
      let notify = this.notify;
      wallet.onAssetMessage(msg => this.onmsg(msg));
    },
    login() {
      //this.mnemonic =
      "chimney season perfect salad fine crush angle network actual behind usage what";
      let mnemonic = localStorage.getItem("mnemonic");
      console.log(mnemonic);
      if (!mnemonic) {
        mnemonic = wallet.generateMnemonic().toString();
        localStorage.setItem("mnemonic", mnemonic);
      }
      this.mnemonic = mnemonic;
      wallet.configHub("wss://explorer.sdag.io:20003");
      wallet.loginWithMnemonic(this.mnemonic).then(() => {
        this.address = wallet.getAddress().toString();
        console.log("address", this.address);
        this.loopEvt();
        this.getBalance();
      });
    },
    test() {
      //旧的格式
      var msg = {
        from: "UFCSFGWXWTWYSZMTJPJPSU7LDN4VNDIO",
        text: "hello",
        time: 1555386650,
        to_msg: [["T6OX2YF27MF4CQEXZHTVDLXJDN7XK64K", 3000000]],
        unit: "V9+mfUqBccIMy9TXc31G7Agx044p+DhPpcIgxAGSQko="
      };

      //新的格式
      // var newmsg = {
      //   symbol: "+", //-
      //   from: "UFCSFGWXWTWYSZMTJPJPSU7LDN4VNDIO",
      //   to: "T6OX2YF27MF4CQEXZHTVDLXJDN7XK64K",
      //   amount: 3000,
      //   text: "hello",
      //   time: 1555386650,
      //   unit: "V9+mfUqBccIMy9TXc31G7Agx044p+DhPpcIgxAGSQko="
      // };

      this.onmsg(msg);
    }
  },

  created() {
    this.login();
  }
};
</script>
