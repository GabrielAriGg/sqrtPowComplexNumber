
var tipoNumero;
var operacion;
var fondo;


document.getElementById("potencia").addEventListener("click",potencia);
document.getElementById("raiz").addEventListener("click",raiz);
document.getElementById("calcular").addEventListener("click",calcular); /*para que pueda acceder a la variable cambiada a en el elemento deve estar por una funcion*/  
document.getElementById("rectangular").addEventListener("click",rectangular);
document.getElementById("polar").addEventListener("click",polar);
document.getElementById("exponencial").addEventListener("click",exponencial);
document.getElementById("reset").addEventListener("click",reset);

function reset(e){
    document.getElementById("calcular").style.background = "yellowgreen";
    abajo.textContent="";
    final.textContent="";
    e.preventDefault();
}

function rectangular(e){
    document.getElementById("rectangular").style.background = "red";
    document.getElementById("polar").style.background = "yellowgreen";
    document.getElementById("exponencial").style.background = "yellowgreen";
    tipoNumero=1;
    e.preventDefault();
}

function polar(e){
    document.getElementById("rectangular").style.background = "yellowgreen";
    document.getElementById("polar").style.background = "red";
    document.getElementById("exponencial").style.background = "yellowgreen";
    tipoNumero=2;
    e.preventDefault();
}

function exponencial(e){
    document.getElementById("rectangular").style.background = "yellowgreen";
    document.getElementById("polar").style.background = "yellowgreen";
    document.getElementById("exponencial").style.background = "red";
    tipoNumero=3;
    e.preventDefault();
}

function potencia(e){
    document.getElementById("potencia").style.background = "red";
    document.getElementById("raiz").style.background = "yellowgreen";
    operacion="*";
e.preventDefault();
}

function raiz(e){
    document.getElementById("potencia").style.background = "yellowgreen";
    document.getElementById("raiz").style.background = "red";
   operacion="r";
   e.preventDefault();
}

function init(){
    var final =document.getElementById('final');
}

function calcular(){
    document.getElementById("calcular").style.background = "red";
    
    var k;
 switch (operacion) {

    case "r": if (tipoNumero==1) {                                          //RAICES--------------------------------------------
        var numeror = document.getElementById('numerr').value;
        var numeroi = document.getElementById('numeri').value;
        var numeroe = document.getElementById('grado').value;
        numeroee=parseFloat(numeroe);
        numerorr=parseFloat(numeror);
        numeroii=parseFloat(numeroi);
        
        numerodd=Math.atan((numeroii/numerorr));// con if if vamos a determinar el angulo correctamente
        if (numeroii>0 && numerorr<0) {
            numerodd=(Math.PI)-numerodd;
        }
        if (numeroii<0 && numerorr<0) {
            numerodd=(Math.PI)+numerodd;
        }
        if (numeroii<0 && numerorr>0) {
            numerodd=(2*(Math.PI))-numerodd;
        }
        numerocc=Math.sqrt((Math.pow(numeroii,2))+(Math.pow(numerorr,2)));
        raizh=Math.pow(numerocc,(1/numeroee));
              
        // document.getElementById('resultado5').value=raizh;

    } else {
        
    
              var numeroc = document.getElementById('modulo').value;
              var numerod = document.getElementById('angulo').value;
              var numeroe = document.getElementById('grado').value;
              numerocc=parseFloat(numeroc);
              numerodd=parseFloat(numerod);
              numeroee=parseFloat(numeroe);
              raizh=Math.pow(numerocc,(1/numeroee));
              
            //   document.getElementById('resultado5').value=raizh;
    }
            
for (var k = 0; k < numeroee; k++) {
    angulo=((numerodd)+(2*(Math.PI)*k))/numeroee;
    // angulocadena=angulo;
    // angulocadena=parse
    var raizh2=raizh.toFixed(3);
    var angulo2=angulo.toFixed(3)
      final.textContent = final.textContent + raizh2 + " < " + angulo2 + " rad" +" | ";

      real=(raizh)*Math.cos(angulo);
      img =(raizh)*Math.sin(angulo);
      var real2=real.toFixed(3);
      var img2=img.toFixed(3)
      if (img2>0) {
        img3=" + "+img2;
      } else {
        img3=img2;
      }
      
      abajo.textContent = abajo.textContent + real2 + " " + img3 +"i"+ " ▭ "; 
      
}
        
        break;
        case "*":if (tipoNumero==1) {                                                //POTENCIA-------------------------------------
            var numeror = document.getElementById('numerr').value;
            var numeroi = document.getElementById('numeri').value;
            var numeroe = document.getElementById('grado').value;
            numeroee=parseFloat(numeroe);
            numerorr=parseFloat(numeror);
            numeroii=parseFloat(numeroi);

            numerodd=Math.atan((numeroii/numerorr));// con if if vamos a determinar el angulo correctamente
            if (numeroii>0 && numerorr<0) {
                numerodd=(Math.PI)-numerodd;
            }
            if (numeroii<0 && numerorr<0) {
                numerodd=(Math.PI)+numerodd;
            }
            if (numeroii<0 && numerorr>0) {
                numerodd=(2*(Math.PI))-numerodd;
            }
            numerocc=Math.sqrt((Math.pow(numeroii,2))+(Math.pow(numerorr,2)));
            // raizh=Math.pow(numerocc,(1/numeroee));
                  
            // document.getElementById('resultado5').value=raizh;
    
        } else {
            
        
                  var numeroc = document.getElementById('modulo').value;
                  var numerod = document.getElementById('angulo').value;
                  var numeroe = document.getElementById('grado').value;
                  numerocc=parseFloat(numeroc);
                  numerodd=parseFloat(numerod);
                  numeroee=parseFloat(numeroe);
                //   raizh=Math.pow(numerocc,(1/numeroee));
                  
                //   document.getElementById('resultado5').value=raizh;
        }

              potenciaNumero=Math.pow(numerocc,numeroee);
              anguloNumero=numeroee*numerodd;
              var vuelta=2*Math.PI;
              determinacion=anguloNumero/vuelta;
              var determinacion2=parseInt(determinacion);

              for (let index = 0; index <=determinacion2; index++) {
                if (anguloNumero>vuelta) {
                    anguloNumero=anguloNumero-vuelta;
                }
                
              }
              var anguloNumero2 = anguloNumero.toFixed(3);
              final.textContent = final.textContent + potenciaNumero + " < " + anguloNumero2 +" rad"+"\n";
        
              real=(potenciaNumero)*Math.cos(anguloNumero);
              img =(potenciaNumero)*Math.sin(anguloNumero);
              var real2=real.toFixed(3);
              var img2=img.toFixed(3)
              if (img2>0) {
                img3=" + "+img2;
              } else {
                img3=img2;
              }
              abajo.textContent = abajo.textContent + real2 + " " + img3 +"i"+"   |   "; 
            
        
           

            break;
  

    default:
        break;
} 
}







