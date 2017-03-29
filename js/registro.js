//cargar pagina
window.onload=function(){
  document.getElementById("formulario").onsubmit=function(e){
		e.preventDefault();
	}

  //Objeto Registrada
  function registrada(nombre,apellido,correo,psw) {
    this.name = nombre;
    this.lastname = apellido;
    this.email = correo;
    this.psw = psw;
  }

  var arrUsuario = [];
  var envia = document.getElementById('enviar');

  //boton para EnviarForm
  envia.addEventListener('click',function(){
    // alert("Registrate");
    var name = document.getElementById("nombre");
    var lastname = document.getElementById("apellido");
    var email = document.getElementById("correo");
    var psw = document.getElementById("psw");

    if (name.value == "" || lastname.value == "" || email.value == "" || psw.value == ""){
      var msje = document.getElementById("msj");
			msje.innerText = "Todos los campos son obligatorios!";
      //alert("Estos Datos son obligatorios \n Nombre \n apellido \n correo \n password");
    }
    else{
      var registro = new registrada(name.value,lastname.value,email.value,psw.value);
      localStorage.setItem("newRegistro",JSON.stringify(registro));
      document.getElementById("formulario").reset();
      window.location="perfil.html";
    }
  });

  var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");

  //Letras
  var soloLetras = function(e){
    var codeTecla = e.keyCode;
    if ((codeTecla >= 97 && codeTecla <= 122) || (codeTecla >=65 && codeTecla <= 90) || codeTecla == 39 || codeTecla == 32) {
      this.nextElementSibling.nextElementSibling.innerText = "";
			return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras";
      return false;
    }
  }

  //validacion de email
  var email = document.getElementById('correo');
  email.addEventListener('input', function() {
    expr = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!expr.test(email.value)){
      this.nextElementSibling.nextElementSibling.innerText = "Error: La dirección de correo es incorrecta.";
      return false;
    } else {
      this.nextElementSibling.nextElementSibling.innerText = "";
      return true;
    }
  });

  // //validacion de psw
  // var pswr = document.getElementById('psw');
  // pswr.addEventListener('input',function(){
  //   if (pswr.value.length < 6 ){
  //     this.nextElementSibling.nextElementSibling.innerText = "Ingrese una contraseña de min: 6 carácteres y max: 20 caracteres");
  //     return false;
  //   } else {
  //     this.nextElementSibling.nextElementSibling.innerText = "";
  //     return true;
  //   }
  // });


  //validando datosIngresados
  var inputs = document.getElementsByClassName("input-registro");
  var validaInputs = function(){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio"
    } else{
      this.nextElementSibling.nextElementSibling.innerText="";
    }
  }

  for(var i = 0; i < inputs.length; i++){
    inputs[i].onblur = validaInputs;
  }

  //asignando funciones
  nombre.onkeypress = soloLetras;
  apellido.onkeypress = soloLetras;
}
