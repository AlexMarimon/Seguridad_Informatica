//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=2;
var score=0; scoreMax=7; scoreInc=7; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#59ACAC"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente, actividad terminada"; messageTime="Se acabo el tiempo."; messageError="Error"; messageErrorG="Error"; messageAttempts="Se acabaron tus intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0k3"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["VXNvIGRlIENvbnRyYXNl8WFz", "UHJldmllbmUgZWwgYWNjZXNvIGEgcmVjdXJzb3MgcG9yIHBhcnRlIGRlIHBlcnNvbmFzIG5vIGF1dG9yaXphZGFz"],["TGlzdGFzIGRlIENvbnRyb2wgZGUgQWNjZXNv", "UHJldmllbmUgZWwgYWNjZXNvIGEgbG9zIGZpY2hlcm9zIHBvciBwYXJ0ZSBkZSBwZXJzb25hcyBubyBhdXRvcml6YWRhcy4"],["RW5jcmlwdGFjafNu", "RXZpdGEgcXVlIHBlcnNvbmFzIHNpbiBhdXRvcml6YWNp824gcHVlZGFuIGludGVycHJldGFyIGxhIGluZm9ybWFjafNuLg"],["VXNvIGRlIFNvZnR3YXJlIGRlIFNlZ3VyaWRhZCBJbmZvcm1hdGljYQ", "UHJldmllbmUgZGUgdmlydXMgaW5mb3JtYXRpY29zIHkgZGUgZW50cmFkYXMgaW5kZXNlYWRhcyBhbCBzaXN0ZW1hIGluZm9ybeF0aWNvLg"],["RmlybWFzIHkgY2VydGlmaWNhZG9zIGRpZ2lsdGFsZXM", "UGVybW5pdGUgY29tcHJvYmFyIGxhIHByb2NlZGVuY2lhLCBhdXRlbnRpY2lkYWQgZSBpbnRlZ3JpZGFkIGRlIGxvcyBtZW5zYWplcw"],["U2lzdGVtYXMgZGUgRmljaGVyb3MgY29uIFRvbGVyYW5jaWEgYSBGYWxsb3M", "UHJldmllbmUgZmFsbG9zIGRlIGludGVncmlkYWQgZW4gY2FzbyBkZSBhcGFnb25lcyBkZSBzaW5jcm9uaXphY2nzbiBvIGNvbXVuaWNhY2nzbg"],["Q3VvdGFzIGRlIERpc2Nv", "UHJldmllbmUgcXVlIGNpZXJ0b3MgdXN1YXJpb3MgaGFnYW4gdW4gdXNvIGluZGViaWRvIGRlIGxhIGNhcGFjaWRhZCBkZSBkaXNjby4"]];
var c=[[18,66],[27,71],[12,70],[40,79],[32,76],[44,82],[15,77]];
var con1=["Uso de Contraseñas","Listas de Control de Acceso","Encriptación","Uso de Software de Seguridad Informatica","Firmas y certificados digiltales","Sistemas de Ficheros con Tolerancia a Fallos","Cuotas de Disco"];
var con2=["Previene el acceso a recursos por parte de personas no autorizadas","Previene el acceso a los ficheros por parte de personas no autorizadas.","Evita que personas sin autorización puedan interpretar la información.","Previene de virus informaticos y de entradas indeseadas al sistema informático.","Permnite comprobar la procedencia, autenticidad e integridad de los mensajes","Previene fallos de integridad en caso de apagones de sincronización o comunicación","Previene que ciertos usuarios hagan un uso indebido de la capacidad de disco."];
var sel1=""; join1=[]; join2=[];
colorText="#2B2B2B";colorButton="#FF9900";colorBack="#FFFFFF";colorSele="#8C8C73";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
