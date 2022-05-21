const scriptName = "FN";
var allsee = new Array(1000).join(String.fromCharCode(847));
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  try {
      var Flist = DataBase.getDataBase('욕감지리스트').split('\n');
  }catch(e) {
      var Flist = [''];
  }
  try {
      var Adminlist = DataBase.getDataBase('Adminlist').split('\n');
  }catch(e) {
      var Adminlist = [''];
  }
  var message = msg.split(' ');
  if (message[0] == ';금지단어등록') {
      if (Adminlist.includes(sender)) {
        let cutting = msg.replace(';금지단어등록 ', '');
        DataBase.setDataBase('욕감지리스트', DataBase.getDataBase('욕감지리스트')+'\n'+cutting);
        replier.reply('금지단어 리스트에 '+cutting+'을(를) 추가했습니다.');
    } else {
        replier.reply('관리자 권한을 봇 제작자에게 추가해달라고 요청하십시오.');
    }
  }
  if (msg.includes(Flist)) {
      rudrh = DataBase.getDataBase(sender+'의 경고 횟수');
      DataBase.setDataBase(sender+'의 경고 횟수', rudrh+1);
      rudrh = DataBase.getDataBase(sender+'의 경고 횟수');
      replier.reply('[ 알림 ]'+allsee+'\n'+sender+'이가 규칙에 어긋나는 행동을 하였습니다.\n경고 횟수 : '+rudrh);
  }
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}