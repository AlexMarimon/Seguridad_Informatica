//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicitaciones, Buen Trabajo"; messageTime="Se agotó el tiempo"; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0kxNw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["VklSVVNZVFJPWUFOT1M","QkFDS1VQ","VE9MRVJBTkNJQSBBIEZBTExPUw","UkVEVU5EQU5DSUE","TkVHTElHRU5DSUE","","","","",""];imaW=["","","","","","","","","",""];queW=["Los mecanismos conocidos hasta el momento para la propagación de virus son los archivos ejecutables (con extensión .exe, .com o .bat) y los componentes de Microsoft Office que aceptan macros con el lenguaje Visual Basic para Aplicaciones (principalmente Word y Excel con macros)","Los respaldos consisten en copias efectuadas manual y periódicamente de la información que se desea proteger ¿cual es el objeto de respaldar manualmente si tenemos un sistema redundante?, la ventaja de los respaldos es que por efectuarse según ciertos períodos la información respaldada no es exactam","La tolerancia a fallos es la capacidad de un sistema a responder a un suceso inesperado, como puede ser una falla en el suministro eléctrico o una falla de hardware de forma que no se pierdan datos.","Un RAID (matriz redundante de discos económicos) es un conjunto de unidades de disco que aparecen lógicamente como si fueran uno solo.","Riesgos contra la disponibilidad de la información.","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="SI17_resources/media/"; textBNext="";
colorText="#2B2B2B";colorButton="#D7B422";colorBack="#FFFFFF";colorSele="#6B4871";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
