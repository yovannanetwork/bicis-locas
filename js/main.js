document.getElementById("name").setAttribute("required", "");
document.getElementById("lastname").setAttribute("required", "");
document.getElementById("input-email").setAttribute("required", "");
document.getElementById("input-password").setAttribute("required", "");
document.getElementById("input-password").setAttribute("minlength", "6");


// section nombre
function validacion1() {
    var nombre = document.getElementById("name").value;
    
    var nameArray = nombre.split("");
    var primeraLetra = nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;
    
    for ( var i = 1; i<nameArray.length; i++){
        if(espacio){
        mayuscula += nameArray[i].toUpperCase();
        espacio = false;
        }else
		mayuscula += nameArray[i];
		if(nameArray[i] == "")
		espacio = true;		
		}
		document.getElementById("name").value = mayuscula;
}

function validacion2(_evt){
	var letra = window.event.keyCode;
	if((letra>=65 && letra<=90) || letra==8 || letra==32){	
	}else{
		_evt.preventDefault();
	}
}

// section apellido
function validacionApellido(_evt){
    var apellido = document.getElementById("lastname").value;
    
    var nameArray= apellido.split("");
    var primeraLetra= nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
		mayuscula += nameArray[i];
		if(nameArray[i] ==" ")
		espacio = true;
					
			}
		document.getElementById("lastname").value= mayuscula;
}

function validacionLastname(_evt){
	var letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){	
	}else{
		_evt.preventDefault();
	}
}

// section Email

function validateForm(){
	var email= document.getElementById("input-email").value;
	var expresion= /([a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g;
	
	if(!expresion.test(email)){
		alert ("Campo Email no válido");
		return false;
    }
}

// section contraseña
function validatePass(_evt){
    var pass = document.getElementById("input-password").value;
    
 	if( pass==="123456" || pass==="098754" || pass==="password"){
      alert("campo Contraseña no válida");
      return false;
  	}
}

// section selector de opciones
function validateSelect(_evt){
	var type = document.querySelector("select").value;
	var salida = document.getElementById("salida");
	
	if(type == "0"){
		salida.innerHTML = "No seleccionaste ninguna opción";
	}else{
		salida.innerHTML = "";
	}
}



