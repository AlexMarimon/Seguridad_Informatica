//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#2C9494"; colorText="#000000"; colorSele="#004000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicitaciones, actividad completa"; messageTime=""; messageError="Error"; messageErrorG="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["Rg","Tw","Ug","TQ","QQ","Uw","IA","RA","RQ","IA","Qw","Tw","Tg","Uw","RQ","Rw","VQ","SQ","Ug","IA","TA","Tw","Uw","IA","Tw","Qg","Sg","RQ","VA","SQ","Vg","Tw","Uw","UA","QQ","Ug","QQ","IA","Qw","Tw","Tg","Uw","RQ","Rw","VQ","SQ","Ug","IA","TA","Tw","Uw","IA","Qw","SQ","Tg","Qw","Tw","IA","Tw","Qg","Sg","RQ","VA","SQ","Vg","Tw","Uw","IA","TQ","Tw","Uw","VA","Ug","QQ","RA","Tw","Uw","IA","RQ","Tg","IA","RQ","TA","IA","UA","VQ","Tg","VA","Tw","IA","QQ","Tg","VA","RQ","Ug","SQ","Tw","Ug","IA","Uw","RQ","IA","VQ","VA","SQ","TA","SQ","Wg","QQ","Tg","IA","TA","Tw","Uw","IA","Uw","SQ","Rw","VQ","SQ","RQ","Tg","VA","RQ","Uw","IA","TQ","RQ","Qw","QQ","Tg","SQ","Uw","TQ","Tw","Uw","Og"];
var que=["Permite identificar al emisor de un mensaje, al creador de un documento o al equipo que se conecta a una red o a un servicio","Controla el acceso de los usuarios a zonas restringidas, a distintos equipos y servicios después de haber superado el proceso de autenticación","Verifica el correcto funcionamiento de las políticas o medidas de seguridad tomadas","Ayuda a ocultar la información transmitida por la red o almacenada en los equipos","Programa que nos permite estar protegido contra las amenazas de los virus"];
var yCell=["QVVURU5USUNBQ0lPTg","QVVUT1JJWkFDSU9O","QVVESVRPUklB","RU5DUklQVEFDSU9O","QU5USVZJUlVT"];
var pos=[["5","17","29","9","13","63","18","11","35","39","30","2","41"],["37","45","72","12","3","46","108","74","53","54","22","55"],["91","86","8","64","88","25","19","96","109"],["15","80","56","36","105","34","93","130","129","107","32","87"],["0","92","104","117","31","120","47","103","6"]];
var upos=[["","","","","","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","",""],["","","","","","","","","","","",""],["","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=15;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="U0kz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
