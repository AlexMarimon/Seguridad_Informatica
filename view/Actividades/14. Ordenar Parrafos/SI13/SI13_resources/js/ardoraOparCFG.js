//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, buen trabajo"; messageTime=""; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U0kxMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="SI13_resources/media/";
var indexG=0;
var words1G=["QXNlZ3VyYSBsYSBpbnRlZ3JpZGFkIHkgcHJpdmFjaWRhZA","ZGUgbGEgaW5mb3JtYWNp824gZGUgdW4","c2lzdGVtYSBpbmZvcm3hdGljbyB5IHN1cyB1c3Vhcmlvcw"];
var words2G=["TWVkaWRhcyBkZSBzZWd1cmlkYWQ","cXVlIGV2aXRhbiBkYfFvcyB5IHByb2JsZW1hcw","cXVlIHB1ZWRlbiBvY2FzaW9uYXIgaW50cnVzb3M"];
var words3G=["Q3JlYSBiYXJyZXJhcyBkZSBzZWd1cmlkYWQgcXVlIG5vIHNvbiBt4XMgcXVlIHTpY25pY2FzLCBhcGxpY2FjaW9uZXMgeSBkaXNwb3NpdGl2b3MgZGUgc2VndXJpZGFkLA","Y29tbyBjb3J0YSBqdWVnb3MsIGFudGl2aXJ1cywgYW50aSBlc3DtYXMs","ZW5jcmlwdGFjafNuIGRlIGxhIGluZm9ybWFjafNuIHkgdXNvIGRlIGNvbnRyYXNl8WFz","cHJvdGVnaWVuZG8gaW5mb3JtYWNp824geSBlcXVpcG9zIGRlIGxvcyB1c3Vhcmlvcw"];
var c1=[34,23,34];
var c2=[20,28,29];
var c3=[97,42,51,49];
