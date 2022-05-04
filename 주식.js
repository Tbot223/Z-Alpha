const scriptName = "주식";
const randomN = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
const Ad = ['3.141592653589793238462643383279502884197169399375105820974944...', 'Ⅹ×Ⅴ=?', '주가는 5분 마다 자동으로 갱신됩니다!', '몰?루'];
var allsee = new Array(1000).join(String.fromCharCode(847));
const ECFDo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const TREo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'X', 'Y', 'Z'];
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
    } else if(Zb == 0) {
      replier.reply('주가 강제 변동은 자동으로 주가가 변동된후 1회만 실행할수있습니다.');
    }
  }
  if (msg == ';도움말'||msg == ';help'||msg == ';?') {
    replier.reply('[ ¿도움말? ]\n'+allsee+'<명령어 리스트>\n;주가\n;주가재설정\n;주가강제변동\n;?x?\n;code\n;주가랜덤설정\n;안녕\n\n<패치노트>\n1.";안녕"명령어가 추가되었습니다.');
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
    let Num = randomNum[Math.floor((Math.random() * 10))];
    let Num2 = randomNum[Math.floor((Math.random() * 10))];
    let En = EN[Math.floor((Math.random() * 26))];
    let En2 = EN[Math.floor((Math.random() * 26))];
    str(Num, Num2);
    replier.reply(Num + Num2 + En + En2);
  }
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}