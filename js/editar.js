window.onload=function(){
  var guarda = document.getElementById('guardar');

  guarda.addEventListener('click',function(){
    alert("Perfil guardado");
    window.location="perfil.html";
  });
}
