//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, buen trabajo"; messageTime=""; messageError="incorrecto"; messageErrorG="incorrecto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var c=[2,9,8,2,9,1,2,9,11,2,2,8,2,8,11,1,7,5,7,2,9,2,3,8,13,2,3,7,2,7,3,15,2,9,9,8,5,3,3,7,5,8,3,6,1,6,5,7,2,8,3,10,4,2,8,2,11,3,4,3,3,10,2,7,2,3,6,3,9,6,2,7,1,2,6,2,11,3,10,2,2,6,11,2,6,7,2,8,11,2,9,2,3,8];
var wordsGame="U0kxNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["TGE","c2VndXJpZGFk","YWJzb2x1dGE","ZXM","aW1wb3NpYmxl","eQ","bGE","c2VndXJpZGFk","aW5mb3Jt4XRpY2E","ZXM","dW4","Y29uanVudG8","ZGU","dOljbmljYXM","ZW5jYW1pbmFkYXM","YQ","b2J0ZW5lcg","YWx0b3M","bml2ZWxlcw","ZGU","c2VndXJpZGFk","ZW4","bG9z","c2lzdGVtYXM","aW5mb3Jt4XRpY29zLg","RW4","bG9z","ZXF1aXBvcw","ZGU","Y/NtcHV0bw","beFz","ZGVzYWN0dWFsaXphZG9z","dW4","YW50aXZpcnVz","cmVhbG1lbnRl","ZWZlY3Rpdm8","cHVlZGU","c2Vy","bXV5","cGVzYWRvLA","cHVlZGU","aGFjZXJsb3M","beFz","bGVudG9z","eQ","b2N1cGFy","bXVjaG8","ZXNwYWNpbw","ZW4","bWVtb3JpYS4","TG9z","cmVxdWlzaXRvcw","cGFyYQ","bGE","Y3JlYWNp824","ZGU","Y29udHJhc2XxYXM","c29u","Y2FkYQ","dmV6","beFz","Y29tcGxlam9zLA","bGE","bWF5b3LtYQ","ZGU","bG9z","c2l0aW9z","d2Vi","cmVxdWllcmVu","aW5pY2lv","ZGU","c2VzafNuLA","eQ","ZWw","Y2FtYmlv","ZGU","Y29udHJhc2XxYXM","Y29u","ZnJlY3VlbmNpYQ","c2U","aGE","dnVlbHRv","b2JsaWdhdG9yaW8","ZW4","bXVjaG9z","bHVnYXJlcw","ZGU","dHJhYmFqbyw","cmVjb3JkYXJsYXM","ZW4","b2Nhc2lvbmVz","ZXM","bXV5","ZGlm7WNpbC4"];
colorText="#2B2B2B";colorButton="#D7B422";colorBack="#FFFFFF";colorSele="#6B4871";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
