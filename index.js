window.onload= inicio;
let sumaCorrecta,a,b;

function inicio(){
    preguntar();
    document.querySelector("button").onclick=comprobar;
    document.querySelector(".tres").onkeydown=teclado;
    }

    function teclado(e){
        let tecla=e.key;
        if(tecla=="Enter"){
            comprobar();

        }

    }

    //para que no tome el valor como texto le escribimos delante el Number

    function comprobar(){
        let c=Number(document.querySelector(".tres").value);
        if(c==sumaCorrecta){
            document.querySelector(".resultados").insertAdjacentHTML("beforeend",`<div class="verde">Es correcto</div>`);
        }
        else{
            document.querySelector(".resultados").insertAdjacentHTML("beforeend",`<div class="rojo">El resultado de ${a} + ${b} es ${sumaCorrecta}</div>`);
            
        }

        preguntar();

        //al poner nuevamente preguntar se vuelve a ejecutar y vuelve a dar sumas para resolver
    }



//Mathfloor es para que no de numeros decimales
function preguntar(){
    a=Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);
    sumaCorrecta=a+b;

    document.querySelector(".uno").value=a;
    document.querySelector(".dos").value=b;
    document.querySelector(".tres").value="";
    document.querySelector(".tres").focus();



    //aca llamamos al input de html como necesitamos un valor dentro de la caja ponemos.value y lo igualamos al nombre de la variable

}