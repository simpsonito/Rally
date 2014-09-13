/**
 * Created by Adib Abud Jaso on 12/09/14.
 * http://adib.awardspace.com
 */
/*
 var pregunta1 = {texto:"PREGUNTA",
 opciones:[
 {opcion:"OPCION1", correcta:false},
 {opcion:"OPCION2", correcta:true},
 {opcion:"OPCION3", correcta:false}
 ]
 };
 */
var pregunta1 = {texto:"La canasta básica comprende una lista de nutrientes indispensables que debemos de consumir como mínimo, y con la cual se puede establecer un nivel económico",
    opciones:[
        {opcion:"Verdadero", correcta:true},
        {opcion:"Falso", correcta:false}
    ]
};
var pregunta2 = {texto:"Las políticas sociales están encaminadas",
    opciones:[
        {opcion:"Verdadero", correcta:true},
        {opcion:"Falso", correcta:false}
    ]
};
var pregunta3 = {texto:"El salario mínimo contractual lo define cada empresas",
    opciones:[
        {opcion:"Verdadero", correcta:false},
        {opcion:"Falso", correcta:true}
    ]
};
var pregunta4 = {texto:"Las necesidades básicas se presentan de forma independiente y aislada",
    opciones:[
        {opcion:"Verdadero", correcta:false},
        {opcion:"Falso", correcta:true}
    ]
};
var pregunta5 = {texto:"La recreación se considera una necesidad básica sólo en los países desarrollados",
    opciones:[
        {opcion:"Verdadero", correcta:false},
        {opcion:"Falso", correcta:true}
    ]
};
var conjuntoPreguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5];
var buenas = 0;
var pActual = 0;
var intento = 0;
var maxIntento = 1;

conjuntoPreguntas = shuffle(conjuntoPreguntas);//Comentar sí no se quiere que se revuelvan las preguntas
window.addEventListener("load",alCargar,false);
function alCargar(){
    //console.log("cargó");
    document.getElementById("botonContinuar").onclick = function(){
        generarPregunta(pActual);
    }
}
function generarPregunta(numero){
    var actual = conjuntoPreguntas[numero];
    //console.log(numero, actual);
    var contenido = "<div class='preguntaTexto'>" + actual.texto + "</div><div class='opciones'>";

    for(var i=0; i<actual.opciones.length; i++){
        contenido = contenido.concat("<a class='opcion pure-button' id='op"+i+"' data-correcto='" + actual.opciones[i].correcta + "'><img class='palomita' style='display:none' src='images/palomita.png' /><img class='tache' style='display:none' src='images/tache.png' />"+actual.opciones[i].opcion+"</a>");
    }
    contenido = contenido.concat("</div>");
    document.getElementById("setPregunta").innerHTML = contenido;
    setClicBotones();
    pActual++;
    document.getElementById("botonContinuar").style.display = "none";
}


function setClicBotones(){
    var oList = document.getElementById("setPregunta").getElementsByTagName("a");
    for(var i=0; i<oList.length; i++){
        var objeto = oList[i];
        //mensajear(objeto.className);
        if (objeto.className.indexOf("opcion") == 0){
            hacerOpcion(objeto);
        }
    }
}
function desactivarBotones(){
    var oList = document.getElementById("setPregunta").getElementsByTagName("a");
    for(var i=0; i<oList.length; i++){
        var objeto = oList[i];
        //mensajear(objeto.className);
        if (objeto.className.indexOf("opcion") == 0){
            deshacerOpcion(objeto);
        }
    }
    intento = 0;
    if(pActual < conjuntoPreguntas.length){
        document.getElementById("botonContinuar").style.display = "";
        document.getElementById("botonContinuar").value = "Siguiente";
    } else {//Si ya no hay más preguntas.
        //console.log("Terminó");
        retroalimentar("Obtuviste <b>"+buenas+"</b> de <b>"+conjuntoPreguntas.length+"</b>.");
        document.getElementById("botonContinuar").style.display = "";
        document.getElementById("botonContinuar").value = "Otra vez";
        document.getElementById("botonContinuar").onclick = reiniciar;
    }
}
function reiniciar(){
    //alert("reiniciando...");
    exportRoot.bien.gotoAndStop(0);
    exportRoot.mal.gotoAndStop(0);
    buenas = 0;
    pActual = 0;
    intento = 0;
    document.getElementById("setPregunta").innerHTML = "";
    document.getElementById("botonContinuar").onclick = function(){
        generarPregunta(pActual);
    }
    document.getElementById("botonContinuar").value = "Iniciar";
    retroalimentar("");
}

function hacerOpcion(boton){
    boton.onclick = function(e){
        //mensajear(this.id +" - " + this.id.substr(this.id.length - 1) + " - " + this.getAttribute("data-correcto"));
        if(this.getAttribute("data-correcto") == "true"){
            //mensajear("sí");
            this.getElementsByClassName('palomita').item(0).style.display = "";
            buenas++;
            exportRoot.bien.play();
            desactivarBotones();
        } else {
            this.getElementsByClassName('tache').item(0).style.display = "";
            intento++;
            deshacerOpcion(this);
            if(intento >= maxIntento){
                desactivarBotones();
                exportRoot.mal.play();
            }
        }
    }
    boton.className = 'opcion pure-button';
}
function deshacerOpcion(boton){
    boton.onclick = null;
    //console.log("clase antes: "+boton.class);
    boton.className = 'opcion pure-button pure-button-disabled';
    //console.log("clase boton: "+boton.class);
}


function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function retroalimentar(cadena){
    document.getElementById("retroalimentacion").innerHTML = cadena;
}


function mensajear(cadena){
    /*
     var actualCadena = document.getElementById("mensajes").innerHTML;
     var nuevaCadena = cadena + "<br />" + actualCadena;
     document.getElementById("mensajes").innerHTML = nuevaCadena;
     */
}