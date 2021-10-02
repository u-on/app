/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

[mitm]
hostname = vip1.kuwo.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

[MITM]
hostname = vip1.kuwo.cn

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';
const url3='/v2/api/user/info';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "1";
	obj.data["vipLuxuryExpire"] = "1654068149000";
	obj.data["time"] = "1654068149000";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1654068149000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1654068149000";
	obj.data["vip3Expire"] = "1654068149000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

if (url.indexOf(url3) != -1) {
	obj.data["vipType"] = "2";
	obj.data["vipExpires"] = "1654068149";
	body = JSON.stringify(obj);
}


$done({body});