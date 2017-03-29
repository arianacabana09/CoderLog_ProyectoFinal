window.onload=function(){
  var edita = document.getElementById('editar');

  edita.addEventListener('click',function(){
    alert("Puedes editar");
    window.location="editar.html";
  });
}



window.onload=function(){
	var nombre = document.getElementById("nombre-paciente");
	var apellido = document.getElementById("apellido-paciente");
	var correo = document.getElementById("corre-paciente");
	var pass = document.getElementById("psw-paciente");

	var objetoPaciente = JSON.parse(localStorage.getItem("newRegistro"));

	nombre.innerText=objetoPaciente.name;
	apellido.innerText=objetoPaciente.lastname;
	correo.innerText=objetoPaciente.email;
	pass.innerText=objetoPaciente.psw;

	function Usuario(nombreUsuario, apellidoUsuario, correoUsuario, pswUsuario) {
		this.nombre = nombreUsuario;
		this.apellido = apellidoUsuario;
		this.correo = correoUsuario;
		this.psw = pswUsuario;
	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
};
