//引用 sdagtrace.js
const track = require ("sdagtrack.js");
//设置 hub
track.set_hub("wss://10.168.1.132:6615");
//设置 助记词（李四的）
track.set_mnemonic("fade aunt crack express uncle fit valley faculty candy toddler buzz pink");

//得到该助记词对应的唯一地址（用于和KYC系统中进行数字身份核对）
const address = track.get_address();

//存证、上链，并验证父单元为NuVw+sk/k/q4LpkScjJ6VXWYQDlsVe1hb6/SeUv6wyk=的哈希
track.text("田间管理","NuVw+sk/k/q4LpkScjJ6VXWYQDlsVe1hb6/SeUv6wyk=").then((unit_hash)=>{
    //上链后，得到一个单元哈希，用作追溯的上一环节。
    console.log(unit_hash);
    //把unit_hash保存在本地，留作未来查询之用。其他环节，可以上链并验证该单元哈希。
});

//取证、查询
track.find("NuVw+sk/k/q4LpkScjJ6VXWYQDlsVe1hb6/SeUv6wyk=").then((parents,childrens)=>{
    //找到"NuVw+sk/k/q4LpkScjJ6VXWYQDlsVe1hb6/SeUv6wyk="的父单元 （数组）
    console.log(parents);
    //找到"NuVw+sk/k/q4LpkScjJ6VXWYQDlsVe1hb6/SeUv6wyk="的子单元 （数组）
    console.log(childrens);
});

