//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#DFDFDF"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, buen trabajo"; messageTime=""; messageError="Incorrecto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>Una auditoría de seguridad informática o <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> de seguridad de sistemas de información es el estudio que comprende el <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> y <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> de sistemas para identificar y posteriormente corregir las diversas vulnerabilidades que pudieran presentarse en una revisión exhaustiva de las <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> de trabajo, <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> de comunicaciones o servidores. </p><p>  </p><p> Una vez obtenidos los resultados, se detallan, archivan y reportan a los responsables, quienes deberán establecer medidas <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> de refuerzo, siguiendo siempre un proceso secuencial que permita a los administradores mejorar la <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> de sus sistemas aprendiendo de los errores cometidos con anterioridad. </p><p>  </p><p> Los objetivos de una auditoría de seguridad informática son: </p><p>  </p><p>     <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> la seguridad de los entornos y sistemas. </p><p>     <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> el cumplimiento de la normativa y legislación vigentes. </p><p>     <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> un informe independiente.</p>'];
var answers=["análisis","Revisar","gestión","estaciones","redes","Verificar","preventivas","Elaborar","seguridad","auditoría"];
var a=["Mg","OA","Mw","NA","NQ","OQ","Ng","MTA","Nw","MQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="U0kxMA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#2B2B2B";colorButton="#FF9900";colorBack="#FFFFFF";colorSele="#8C8C73";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
