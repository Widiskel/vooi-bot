const a3_0x1e8d08=a3_0x1851;function a3_0x1851(_0x5f21ee,_0x28e88f){const _0x556f7d=a3_0x556f();return a3_0x1851=function(_0x185165,_0x114451){_0x185165=_0x185165-0x103;let _0x4e9afd=_0x556f7d[_0x185165];return _0x4e9afd;},a3_0x1851(_0x5f21ee,_0x28e88f);}(function(_0x4fd058,_0x1ad9fb){const _0x2f50d6=a3_0x1851,_0x804b26=_0x4fd058();while(!![]){try{const _0x50ef78=-parseInt(_0x2f50d6(0x154))/0x1+-parseInt(_0x2f50d6(0x109))/0x2*(parseInt(_0x2f50d6(0x120))/0x3)+parseInt(_0x2f50d6(0x14c))/0x4+-parseInt(_0x2f50d6(0x121))/0x5+-parseInt(_0x2f50d6(0x112))/0x6+-parseInt(_0x2f50d6(0x14a))/0x7+parseInt(_0x2f50d6(0x149))/0x8;if(_0x50ef78===_0x1ad9fb)break;else _0x804b26['push'](_0x804b26['shift']());}catch(_0xcdacba){_0x804b26['push'](_0x804b26['shift']());}}}(a3_0x556f,0x8c4b9));import a3_0x393c44 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';function a3_0x556f(){const _0x313186=['messages','text','save','\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:','warn','accounts','931116NRVUkb','Enter\x20your\x20Telegram\x20Password?','sessionCreation','readQueryFile','\x20|\x20Sleep\x20','indexOf','info','Please\x20Enter\x20Telegram\x20Query\x20:\x20','start','accounts/','android','You\x20dont\x20have\x20any\x20Query\x20Account.','https://app.tg.vooi.io/','init','3TwQbfB','5194200vcCXFm','Invalid\x20input,\x20Please\x20try\x20again','sessions-','Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x20\x0aYour\x20Session\x20List:\x0a','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','Session\x20','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','includes','url','Old\x20Query\x20:\x20','proxy','accountName','\x20-\x20Created','serverAddress','message','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','/query.txt','peer','filter','resolvePeer','getEntity','\x20-\x20Webview\x20Connected','storeSession','createDir','client','<empty>','disconnect','agent','error','query-','getSession','session','TELEGRAM_APP_ID','exit','log','saveQueryFile','getTelegramQuery','accountType','VooiAppBot','29671376hyopLM','7845523GdtmUD','Query\x20','140788wvScJk','TELEGRAM_APP_HASH','queryModificaiton','onBoarding','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','stringify','bot','\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20','97062izjHPF','\x20|\x20FloodWait\x20','Invalid\x20Input','length','invoke','delay','resetAccounts','1515186VWbVxc','useSession','Your\x20Account\x20List\x20:\x0a\x20\x0a'];a3_0x556f=function(){return _0x313186;};return a3_0x556f();}import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x5c3035 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[a3_0x1e8d08(0x138)];constructor(){const _0xf6b880=a3_0x1e8d08;this['accountName']=_0xf6b880(0x111),this[_0xf6b880(0x12a)]=_0xf6b880(0x11e),this[_0xf6b880(0x152)]=_0xf6b880(0x148);}async[a3_0x1e8d08(0x11f)](){const _0x4efc5d=a3_0x1e8d08;try{await this[_0x4efc5d(0x14f)]();}catch(_0x215c81){console[_0x4efc5d(0x144)](_0x215c81),a3_0x5c3035[_0x4efc5d(0x13e)](''+JSON[_0x4efc5d(0x151)](_0x215c81));throw _0x215c81;}}async[a3_0x1e8d08(0x14f)](){const _0xbd41d1=a3_0x1e8d08;try{let _0x483960=_0xbd41d1(0x124);const _0x1e9c76=Helper['getSession'](_0xbd41d1(0x111));if(_0x1e9c76['length']==0x0)_0x483960+=_0xbd41d1(0x13b);else for(const _0x462d2c of _0x1e9c76){_0x483960+='-\x20'+_0x462d2c+'\x0a';}_0x483960+=_0xbd41d1(0x125),_0x483960+=_0xbd41d1(0x10f);const _0x1510d7=await a3_0x393c44[_0xbd41d1(0x10d)](_0x483960);if(_0x1510d7==0x1)await this['accountType']();else{if(_0x1510d7==0x2)Helper[_0xbd41d1(0x108)](),await Helper[_0xbd41d1(0x107)](0xbb8),await this[_0xbd41d1(0x14f)]();else{if(_0x1510d7==0x3)Helper[_0xbd41d1(0x140)](this[_0xbd41d1(0x12d)])?.['length']==0x0&&(console[_0xbd41d1(0x118)]('You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first'),await this[_0xbd41d1(0x14f)]());else _0x1510d7==0x4?await this[_0xbd41d1(0x14e)]():(console[_0xbd41d1(0x13e)](_0xbd41d1(0x122)),await this[_0xbd41d1(0x14f)]());}}}catch(_0x133437){throw _0x133437;}}async[a3_0x1e8d08(0x14e)](){const _0x442ab0=a3_0x1e8d08;try{const _0xbd7a08=Helper['getSession'](_0x442ab0(0x111)),_0x4be653=_0xbd7a08[_0x442ab0(0x134)](_0x4d80b3=>_0x4d80b3[_0x442ab0(0x129)]('query'));let _0x12829e=_0x442ab0(0x150);for(const _0x23027e of _0x4be653){_0x12829e+=_0xbd7a08['indexOf'](_0x23027e)+0x1+'.\x20'+_0x23027e+'\x0a';}_0x4be653[_0x442ab0(0x105)]==0x0?(console[_0x442ab0(0x144)](_0x442ab0(0x11d)),await this[_0x442ab0(0x14f)]()):_0x12829e+='\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:';const _0x39004a=await a3_0x393c44[_0x442ab0(0x10d)](_0x12829e);if(_0x4be653[_0x39004a-0x1]!=undefined){const _0x30f1eb=_0x4be653[_0x39004a-0x1];this[_0x442ab0(0x12d)]=_0x442ab0(0x11b)+_0x30f1eb;const _0x1f453b=_0x442ab0(0x12b)+Helper[_0x442ab0(0x115)](this[_0x442ab0(0x12d)]+_0x442ab0(0x132))+_0x442ab0(0x131),_0x580306=await a3_0x393c44[_0x442ab0(0x10d)](_0x1f453b);await Helper[_0x442ab0(0x145)](this[_0x442ab0(0x12d)],_0x580306),await Helper['delay'](0xbb8),await this[_0x442ab0(0x14f)]();}else console['error']('Invalid\x20input,\x20Please\x20try\x20again'),await this[_0x442ab0(0x14e)]();}catch(_0x252c28){throw _0x252c28;}}async[a3_0x1e8d08(0x114)](){const _0x3fb4ad=a3_0x1e8d08;try{if(Config[_0x3fb4ad(0x142)]==undefined||Config[_0x3fb4ad(0x14d)]==undefined)throw new Error('Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first');const _0x3c03bb=Helper[_0x3fb4ad(0x140)](_0x3fb4ad(0x111));let _0x1c5f66=_0x3fb4ad(0x10b);for(const _0x4b5e96 of _0x3c03bb){_0x1c5f66+=_0x3c03bb['indexOf'](_0x4b5e96)+0x1+'.\x20'+_0x4b5e96+'\x0a';}_0x3c03bb[_0x3fb4ad(0x105)]==0x0?_0x1c5f66+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:':_0x1c5f66+=_0x3fb4ad(0x126);const _0x42bcd5=await a3_0x393c44[_0x3fb4ad(0x10d)](_0x1c5f66);this[_0x3fb4ad(0x12d)]=Helper['createDir'](_0x3fb4ad(0x123)+_0x42bcd5),await this[_0x3fb4ad(0x10a)](this[_0x3fb4ad(0x12d)]),await this[_0x3fb4ad(0x13c)](),a3_0x5c3035[_0x3fb4ad(0x118)](_0x3fb4ad(0x127)+this['accountName']+_0x3fb4ad(0x12e)),console[_0x3fb4ad(0x144)]('Session\x20'+_0x42bcd5+_0x3fb4ad(0x128)),this['storeSession'][_0x3fb4ad(0x10e)](),await Helper[_0x3fb4ad(0x107)](0xbb8),process[_0x3fb4ad(0x143)]();}catch(_0x2c91c2){throw _0x2c91c2;}}async['queryCreation'](){const _0xa11aca=a3_0x1e8d08;try{const _0x3b8369=Helper[_0xa11aca(0x140)](_0xa11aca(0x111));let _0x2ca83f='Your\x20Account\x20List\x20:\x0a\x20\x0a';for(const _0xb4b9d2 of _0x3b8369){_0x2ca83f+=_0x3b8369[_0xa11aca(0x117)](_0xb4b9d2)+0x1+'.\x20'+_0xb4b9d2+'\x0a';}_0x3b8369[_0xa11aca(0x105)]==0x0?_0x2ca83f+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:':_0x2ca83f+='\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:';const _0x4293c1=await a3_0x393c44['text'](_0x2ca83f);this[_0xa11aca(0x12d)]=Helper[_0xa11aca(0x139)](_0xa11aca(0x13f)+_0x4293c1);let _0x5b9609=_0xa11aca(0x119);const _0xc43dea=await a3_0x393c44[_0xa11aca(0x10d)](_0x5b9609);await Helper[_0xa11aca(0x145)](this[_0xa11aca(0x12d)],_0xc43dea),a3_0x5c3035[_0xa11aca(0x118)](_0xa11aca(0x14b)+this['accountName']+'\x20-\x20Created'),console[_0xa11aca(0x144)](_0xa11aca(0x14b)+_0x4293c1+_0xa11aca(0x128)),await Helper['delay'](0xbb8),process['exit']();}catch(_0x27ee3c){throw _0x27ee3c;}}async[a3_0x1e8d08(0x147)](){const _0x348ddc=a3_0x1e8d08;try{const _0x2c8aca=Helper['getSession'](_0x348ddc(0x111));let _0x8580e0=_0x348ddc(0x10b);if(_0x2c8aca[_0x348ddc(0x105)]>0x0)for(const _0x5a9df5 of _0x2c8aca){_0x8580e0+=_0x2c8aca[_0x348ddc(0x117)](_0x5a9df5)+0x1+'.\x20'+_0x5a9df5+'\x0a';}else _0x8580e0+='<empty>\x0a';_0x8580e0+=_0x348ddc(0x153);const _0x4ad49a=await a3_0x393c44[_0x348ddc(0x10d)](_0x8580e0);if(_0x4ad49a==0x1)await this['sessionCreation']();else _0x4ad49a==0x2?await this['queryCreation']():(console['log'](_0x348ddc(0x104)),await this['accountType']());}catch(_0x26db9a){throw _0x26db9a;}}async['useSession'](_0x1ffbc1,_0xb141ed){const _0x4c8706=a3_0x1e8d08;try{this[_0x4c8706(0x12c)]=_0xb141ed;const _0xb7c13={'connectionRetries':0x5};this[_0x4c8706(0x12c)]&&(_0xb7c13[_0x4c8706(0x13d)]=new HttpsProxyAgent(this[_0x4c8706(0x12c)])),this[_0x4c8706(0x138)]=new StoreSession(_0x1ffbc1),this['client']=new TelegramClient(this[_0x4c8706(0x138)],Config[_0x4c8706(0x142)],Config[_0x4c8706(0x14d)],_0xb7c13),this[_0x4c8706(0x138)][_0x4c8706(0x10e)](),await this[_0x4c8706(0x13a)][_0x4c8706(0x11a)]({'phoneNumber':async()=>await a3_0x393c44['text']('Enter\x20your\x20Telegram\x20Phone\x20Number\x20?'),'password':async()=>await a3_0x393c44['text'](_0x4c8706(0x113)),'phoneCode':async()=>await a3_0x393c44[_0x4c8706(0x10d)]('Enter\x20your\x20Telegram\x20Verification\x20Code\x20?'),'onError':_0x4d3616=>{const _0x1f9749=_0x4c8706;console[_0x1f9749(0x144)](_0x4d3616[_0x1f9749(0x130)]);}});}catch(_0x3703bd){throw _0x3703bd;}}async[a3_0x1e8d08(0x135)](){const _0x5ef368=a3_0x1e8d08;try{a3_0x5c3035[_0x5ef368(0x118)](_0x5ef368(0x127)+this[_0x5ef368(0x141)]+'\x20-\x20Resolving\x20Peer');while(this[_0x5ef368(0x133)]==undefined){try{this[_0x5ef368(0x133)]=await this[_0x5ef368(0x13a)][_0x5ef368(0x136)](this['bot']);break;}catch(_0x104363){if(_0x104363 instanceof FloodWaitError){const _0xe693=_0x104363['seconds'];a3_0x5c3035[_0x5ef368(0x110)](this[_0x5ef368(0x13a)]['session'][_0x5ef368(0x12f)]+_0x5ef368(0x103)+_0x104363),a3_0x5c3035[_0x5ef368(0x118)](this[_0x5ef368(0x13a)]['session']['serverAddress']+_0x5ef368(0x116)+_0xe693+'s'),await Helper[_0x5ef368(0x107)]((_0xe693+0x3)*0x3e8);}else throw _0x104363;}}}catch(_0x4cb95c){throw _0x4cb95c;}}async[a3_0x1e8d08(0x13c)](){const _0x2f6745=a3_0x1e8d08;await this[_0x2f6745(0x13a)][_0x2f6745(0x13c)](),await this[_0x2f6745(0x13a)]['destroy'](),this[_0x2f6745(0x133)]=undefined,this[_0x2f6745(0x12d)]=undefined;}async['initWebView'](){const _0x30168f=a3_0x1e8d08;try{const _0x540fb2=await this[_0x30168f(0x13a)][_0x30168f(0x106)](new Api[(_0x30168f(0x10c))]['RequestWebView']({'peer':this[_0x30168f(0x133)],'bot':this[_0x30168f(0x133)],'fromBotMenu':!![],'url':this[_0x30168f(0x12a)],'platform':_0x30168f(0x11c)}));a3_0x5c3035[_0x30168f(0x118)](_0x30168f(0x127)+this[_0x30168f(0x141)]+_0x30168f(0x137));const _0x40a0db=_0x540fb2['url'];return Helper[_0x30168f(0x146)](_0x40a0db,0x3);}catch(_0xa3a0cb){throw _0xa3a0cb;}}}