window.onload=function(){
  var inicio = document.getElementById('iniciar');
  var registrar = document.getElementById('registrar');

  inicio.addEventListener('click',function(){
    alert("Ingresa tus datos");
    window.location="login.html";
  });

  registrar.addEventListener('click',function(){
    alert("bienvenida >()");
    window.location="registro.html";
  });
}
