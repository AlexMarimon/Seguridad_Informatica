//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#000080"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicitacion, Buen Trabajo"; messageTime="Se agoto el tiempo"; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0kxNQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. ¿Cómo se denominan los intrusos que obtienen acceso mediante la modificación del software o la explotación de las vulnerabilidades del software?","2. ¿Cuáles son los tipos de amenaza que surgen cuando un pirata tiene acceso a la red?","3. ¿Cuáles son algunos de delitos informáticos más frecuentes en la red?","4. ¿De los siguientes cuál es un tipo de ataque informático en la red?","5.¿Un puerto puede estar?"];
var answers1=["MVBpcmF0YXMgSW5mb3Jt4XRpY29z","MEludHJ1c29z","MEhhY2tlcnM","MExhZHJvbmVzIGQgZWluZm9ybWFjafNu"];
var answers2=["MVJvYm8gZGUgaW5mb3JtYWNp824sIFJvYm8gZGUgbGEgSWRlbnRpZGFkLCBQZXJkaWRhIHkgbWFuaXB1bGFjafNuIGRlIGRhdG9zIGUgSW50ZXJydXBjafNuIGRlbCBzZXJ2aWM","MFJvYm8gZGUgaW5mb3JtYWNp824geSAgUm9ibyBkZSBsYSBJZGVudGlkYWQ","MFJvYm8gZGUgaW5mb3JtYWNp824sIFBlcmRpZGEgeSBtYW5pcHVsYWNp824gZGUgZGF0b3MgZSBJbnRlcnJ1cGNp824gZGVsIHNlcnZpY2lv","MFRvZGFzIGxhcyBhbnRlcmlvcmVz"];
var answers3=["MVRvZGFzIGxhcyBhbnRlcmlvcmVz","MFZpcnVz","MFN1cGxhbnRhY2nzbiBkZSBpZGVudGlkYWQ","MFVzbyBpbmRlYmlkbyBkZSBsYSBtZW5zYWplcu1hIGluc3RhbnThbmVh"];
var answers4=["MUF0YXF1ZXMgZGUgcmVwbGF5","MEF0YXF1ZXMgRmFpcg","MEF0YXF1ZXMgRE9T","MENvb2tpZXM"];
var answers5=["MUJMT1FVRUFETyBPIFNJR0lMT1NP","MERFU0NPTkVDVEFETw","MENBTkNFTEFETw","MERJU0NPTlRJTlVP"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["","","","",""];
var ima=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="SI15_resources/media/";
colorText="#2B2B2B";colorButton="#D7B422";colorBack="#FFFFFF";colorSele="#6B4871";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
