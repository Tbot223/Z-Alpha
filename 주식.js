const scriptName = "주식";
const randomN = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
const Ad = ['3.141592653589793238462643383279502884197169399375105820974944...', 'Ⅹ×Ⅴ=?', '주가는 5분 마다 자동으로 갱신됩니다!', '몰?루'];
var allsee = new Array(1000).join(String.fromCharCode(847));
const ECFDo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const TREo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
setZ = setTimeout(function() {
  Y = 10;
  FCab = 0;
  Timeii = 300;
  Time_randomii = 3600;
  ZrandomTime = 0;
  Zb = 0;
}, 10);
time_out = setInterval(function() {
  Ro = randomN[Math.floor((Math.random() * 9))];
  FCab = Ro;
  let Zo = Ro + Y;
  Y = Zo;
  Zb = 0;
  Timeii = 300;
}, 300000);
time_out_ii = setInterval(function() {
  Timeii = Timeii-1;
}, 1000);
Time_random = setInterval(function() {
  ZrandomTime = 0;
  Time_randomii = 3600;
}, 6000000);
Time_random_out = setInterval(function() {
  Time_randomii = Time_randomii-1;
}, 1000);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg == ';주가') {
    N = 0;
    if (Y > N) {
      let Kk = Ad[Math.floor((Math.random() * 4))];
      replier.reply('[ 현재 주가 ]\n' + "'" + Y + "$' 입니다.\n변동폭 : " + FCab + '$\n다음 갱신까지 ' + Timeii + '초\n[ AD ] '+Kk);
    } else if(N > Y) {
      let To = 10;
      Y = To;
      replier.reply('주가가 "0" 이하로 떨어져 주가를 재설정합니다.');
    }
  }
  if (msg == ';주가재설정'){
    let To = 10;
    Y = To;
    FCab = 0;
  }
  if (msg == ';?x?') {
    let Dm = [1,2,3,4,5,6,7,8,9,10];
    let Fm = Dm[Math.floor((Math.random() * 10))];
    let Fk = Dm[Math.floor((Math.random() * 10))];
    let Do = Fm*Fk;
    replier.reply(Fm+'x'+Fk+'='+Do);
  }
  if (msg == ';주가강제변동') {
    if (Zb == 0) {
    let Ro = randomN[Math.floor((Math.random() * 9))];
    FCab = Ro;
    let Zo = Ro + Y;
    Y = Zo;
    Zb = 1;
    replier.reply('주가가 강제 변동 되었습니다.');
    } else if (Zb == 1) {
      replier.reply('주가 강제 변동은 자동으로 주가가 변동된후 1회만 실행할수있습니다.');
    }
  }
  if (msg == ';도움말'||msg == ';help'||msg == ';?') {
    replier.reply('[ ¿도움말? ]\n'+allsee+'\n<명령어 리스트>\n;가입\n;주가\n;내정보\n;구매\n;주가강제변동\n;주가랜덤설정\n;주가재설정\n;code\n;안녕\n;EN+Num\n;?x?\n\n<패치노트>\n1.";가입",";구매",";내정보"명령어가 추가되었습니다.\n2.명령어 순서가 "추가된 날짜 -> 중요도" 순서로 변경되었습니다.');
  }
  if (msg == ';code') {
    replier.reply('https://bit.ly/3ON1onn');
  }
  if (msg == ';주가랜덤설정') {
    if (ZrandomTime > 0) {
      replier.reply('주가랜덤 설정은 1시간에 1번만 변경 가능합니다. - 남은시간 '+Time_randomii+'초');
    } else if (ZrandomTime < 1) {
    let GHo = ECFDo[Math.floor((Math.random() * 10))];
    let HGo = ECFDo[Math.floor((Math.random() * 10))];
    let THo = TREo[Math.floor((Math.random() * 13))]
    let ECo = GHo+HGo;
    let CEo = ECo*THo;
    Y = CEo;
    replier.reply('주가가 랜덤으로 설정되었습니다.\n설정된 주가는 "' + Y + '$"입니다.');
    ZrandomTime = 1;
    }
  }
  if (msg == ';안녕') {
    replier.reply(sender+'님 안녕하세요!');
  }
  if (msg == ';EN+Num') {
    let Num = String(randomNum[Math.floor((Math.random() * 10))]);
    let Num2 = String(randomNum[Math.floor((Math.random() * 10))]);
    let En = EN[Math.floor((Math.random() * 26))];
    let En2 = EN[Math.floor((Math.random() * 26))];
    replier.reply(Num + Num2 + En + En2);
  }
  try {
    var joinbot = DataBase.getDataBase('Zo가입리스트001').split('\n');
  }catch(e) {
    var joinbot = [''];
  }
  if (msg == ';가입') {
    if (joinbot.includes(sender)) {
      replier.reply('이미 가입하셨습니다.');
      return ;
    } else if (sender.includes('\n')||sender.includes('@')||sender.includes('\'')) {
      replier.reply('일부 특수문자가 포함된 닉네임은 가입이 불가능합니다.');
      return ;
    } else
    DataBase.setDataBase('Zo가입리스트001', DataBase.getDataBase('Zo가입리스트001')+'\n'+sender);
    setting(sender);
    replier.reply('성공적으로 등록되었습니다.');
    return ;
  }
  if (msg == ';내정보') {
    show_important(sender, replier);
  }
  if (msg == ';구매') {
    money = Number(DataBase.getDataBase('Z '+sender+ 'is money'));
    ZZuo = Number(DataBase.getDataBase('Z '+sender+ 'is Z'));
    if (money < Y) {
      replier.reply('돈이 부족합니다. - 현재 잔액 : ' + money);
    } else if (money > Y) {
      DataBase.setDataBase('Z '+sender+ 'is money', money-Y);
      DataBase.setDataBase('Z '+sender+ 'is Z', ZZuo+1);
      money = Number(DataBase.getDataBase('Z '+sender+ 'is money'));
      ZZuo = Number(DataBase.getDataBase('Z '+sender+ 'is Z'));
      replier.reply('성공적으로 구매되었습니다. \n 잔액 : ' + money + '\n보유한 주식 개수 : ' + ZZuo);
    } else if (money == Y) {
      DataBase.setDataBase('Z '+sender+ 'is money', money-Y);
      DataBase.setDataBase('Z '+sender+ 'is Z', ZZuo+1);
      money = Number(DataBase.getDataBase('Z '+sender+ 'is money'));
      ZZuo = Number(DataBase.getDataBase('Z '+sender+ 'is Z'));
      replier.reply('성공적으로 구매되었습니다. \n 잔액 : ' + money + '\n보유한 주식 개수 : ' + ZZuo);
    }
  }
  if (msg == ';판매') {
    money = Number(DataBase.getDataBase('Z '+sender+ 'is money'));
    ZZuo = Number(DataBase.getDataBase('Z '+sender+ 'is Z'));
    if (ZZuo > 0) {
      DataBase.setDataBase('Z '+sender+ 'is money', money+Y);
      DataBase.setDataBase('Z '+sender+ 'is Z', ZZuo-1);
      money = Number(DataBase.getDataBase('Z '+sender+ 'is money'));
      ZZuo = Number(DataBase.getDataBase('Z '+sender+ 'is Z'));
      replier.reply('성공적으로 구매되었습니다. \n 잔액 : ' + money + '\n보유한 주식 개수 : ' + ZZuo);
    } else if (ZZuo == 0) {
      replier.reply('보유한 주식의 개수가 0개입니다.');
    }
  } 
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}

function setting(sender) {
  DataBase.setDataBase('Z '+sender+ 'is money', '20');
  DataBase.setDataBase('Z '+sender+ 'is Z', '1');
}

function show_important(sender, replier) {
  text = '¤돈 : ' +DataBase.getDataBase('Z '+sender+ 'is money')+'$';
  teet = '¤주식 : ' +DataBase.getDataBase('Z '+sender+ 'is Z')+'개';

  replier.reply('[ ' + sender + '님의 정보 ]\n' + text + '$\n' + teet + '개');
}