/*** ADIB ABUD JASO ***/
/*
Nota: para encontrar la ventana de este SCORM en Moodle 2.7 en una consola se puede utilizar:
var MiSCORM = document.getElementById('scorm_object').contentWindow; //donde MiSCORM será la 'window' de este iframe
*/
//Objeto con funciones de comunicación con el API de SCORM
var conectividadSCORM = function(){
    var API = null;
    function findAPI(win){
        while ((win.API == null) && (win.parent != null) && (win.parent != win)){//Busca en la ventana parent el objeto API
            win = win.parent;
        }
        API = win.API;
    }
    function initAPI(){
        var win = window;
        findAPI(win);//Función de arriba
        if ((API == null) && (win.opener != null)){//if we still have not found the API, look at the opener and it's frameset
            findAPI(win.opener);
        }
        console.log(window, API);
    }
    return {
        initAPI: initAPI,
        iniciar: function() {
            var inicio = API.LMSInitialize("");
            console.log(inicio);
        },
        incompletar: function() {
            var estadoIncompleto = API.LMSSetValue("cmi.core.lesson_status", "incomplete");
            //API.LMSGetValue("cmi.core.lesson_mode");//Para obtener si está en “browse”, “normal”, “review”, RO
            console.log(estadoIncompleto);
        },
        completar: function() {
            var estadoCompleto = API.LMSSetValue("cmi.core.lesson_status", "completed");
            console.log(estadoCompleto);
        },
        calificar: function(aciertos, total){
            var score = API.LMSSetValue("cmi.core.score.raw", aciertos);
            var maximo = API.LMSSetValue("cmi.core.score.max", total);
            console.log(aciertos+" de "+total+". - "+score+" - "+maximo);
        },
        salvar: function() {
            var salvacion = API.LMSCommit("");
            console.log(salvacion);
        },
        terminar: function() {
            var terminacion = API.LMSFinish("");
            console.log(terminacion);
        },
        conectarYComenzar: function(){
            try{
                this.initAPI();
                this.iniciar();
                var estado = API.LMSGetValue("cmi.core.lesson_mode");
            } catch(e){
                console.log(e);
            }
            var mensaje = "";
            if(estado == undefined){
                mensaje = "Error en la conexión con API";
            } else if(estado == "normal"){
                var situacion = API.LMSGetValue("cmi.core.lesson_status");
                if(situacion == "complete"){
                    console.log(situacion);
                    this.terminar();
                    mensaje = "Esta actividad ya ha sido completada. Por favor inicia un nuevo intento para poder salvar tu calificación.";
                } else {
                    this.incompletar();
                    this.salvar();
                    mensaje = "Listo";
                }
            } else {
                console.log(estado);
                this.terminar();
                mensaje = "Parece que ya no te quedan más intentos o la actividad ya ha sido completada. Si aún tienes intentos, por favor inicia un intento en modo normal para poder salvar tu calificación";
            }
            return mensaje;
        },
        desconectarConCalificacion: function(aciertos, total){
            this.calificar(aciertos,total);
            this.completar();
            this.salvar();
            this.terminar();
        }
    }
}();