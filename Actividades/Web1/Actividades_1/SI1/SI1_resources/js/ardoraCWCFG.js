//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFFFF"; colorButton="#FF8000"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicitación, buen trabajo"; messageTime="Se acabo el tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts="Se acabaron los intento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF00"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0kx"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Uw","RQ","Rw","VQ","Ug","SQ","RA","QQ","RA","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Tg","Og","Og","Og","RA","Og","Qw","Og","Og","Og"],["Og","Og","Og","Og","Og","VA","Og","Og","Og","SQ","Og","Tw","Og","Og","Og"],["Og","Og","Og","Og","Og","RQ","Og","Og","Og","Uw","Og","Tg","Og","Og","Og"],["Og","Og","Og","Og","Og","Rw","Og","Og","Og","UA","Og","VA","Og","Og","Og"],["Og","Og","Og","Og","Og","Ug","Og","Og","Og","Tw","Og","Ug","Og","Og","Og"],["Og","Og","Og","Og","Og","SQ","Og","Og","Og","Tg","Og","Tw","Og","Og","Og"],["Qw","Tw","Tg","Rg","SQ","RA","RQ","Tg","Qw","SQ","QQ","TA","Og","Og","Og"],["Og","Og","Og","Og","Og","QQ","Og","Og","Og","Qg","Og","QQ","Og","Og","Og"],["Og","Og","Og","Og","Og","RA","Og","Og","Og","SQ","Og","Qw","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","TA","Og","Qw","Og","Og","Og"],["Og","Og","Tg","Tw","Ug","RQ","UA","VQ","RA","SQ","Tw","RQ","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","RA","Og","Uw","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","QQ","Og","Tw","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","RA","Og","Og","Og","Og","Og"]];
var x1=[1,6,1,10,12,3];
var y1=[1,1,8,2,2,12];
var x2=[9,6,12,10,12,12];
var y2=[1,10,8,15,14,12];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Protección del hardware, del software y de los datos.","Es la capacidad de garantizar que los datos no serán alterados sin autorización.","Es la capacidad de garantizar que la información, almacenada en el sistema informático o transmitida por la red, solamente va a estar disponible para aquellas personas autorizadas a acceder a dicha información.","Es la capacidad de garantizar que tanto el sistema como los datos van a estar disponibles en todo momento para los usuarios autorizados.","Permite verificar la identidad de quien accede a un recurso y se le permite o no el acceso según dicha identidad.","Permite probar la participación de las partes en una comunicación permitiendo por tanto la auditoría de la información."];
var colNum=15;
var rowNum=15;
colorText="#2B2B2B";colorButton="#D7B422";colorBack="#FFFFFF";colorSele="#6B4871";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
