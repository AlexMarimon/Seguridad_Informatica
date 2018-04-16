//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#BBBBFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Buen trabajo"; messageTime="Se termino el tiempo"; messageError="incorrecto"; messageErrorG="incorrecto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0],[0,0,1,0],[1,0,0,1],[1,1,1,1]];
var vCell=[["0","3","3","3"],["3","3","3","3"],["3","3","3","3"],["3","3","3","3"]];
var a0Cell=[["QXVkaXRvcmlh","QXVkaXRvcmlh","VGU","QW5h"],["ZGU","ZGU","c3Q","bGlzaXM"],["U2VndXJpZGFk","U2VndXJpZGFk","ZGU","Rm8"],["SW50ZXJuYQ","UGVyaW1ldHJhbA","SW5zdHJ1Y2Npb24","cmVuc2U"]];
var c=[[9,9,2,3],[2,2,2,5],[9,9,2,2],[7,10,11,5]];
var c1=[[0,0,0,0],[0,0,3,0],[9,0,0,2],[7,11,9,8]];
var c2=[[0,0,0,0],[0,0,4,0],[8,0,0,2],[6,10,8,10]];
var c3=[[0,0,0,0],[0,0,5,0],[10,0,0,2],[7,7,8,5]];
var a1Cell=[["QXVkaXRvcmlh","QXVkaXRvcmlh","VGU","QW5h"],["ZGU","ZGU","eHRv","bGlzaXM"],["cHJvdG9jb2xv","U2VndXJpZGFk","ZGU","cG8"],["RXh0ZXJuYQ","RXhwb25lbmNpYWw","UHJvdG9jb2xv","Y2FsaXphZG8"]];
var a2Cell=[["QXVkaXRvcmlh","QXVkaXRvcmlh","VGU","QW5h"],["ZGU","ZGU","amlkbw","bGlzaXM"],["QW5hbGlzaXM","U2VndXJpZGFk","ZGU","dG8"],["T2N1bHRh","UGVyaWZlcmljYQ","UmV2aXNpb24","dG9nZW5ldGljbw"]];
var a3Cell=[["QXVkaXRvcmlh","QXVkaXRvcmlh","VGU","QW5h"],["ZGU","ZGU","eHR1cmE","bGlzaXM"],["UHJvdGVjY2lvbg","U2VndXJpZGFk","ZGU","ZG8"],["UHJpdmFkYQ","TWV0cmljYQ","TWVkaWNpb24","cm1hZG8"]];
var wordsGame="U0kxMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=true;
