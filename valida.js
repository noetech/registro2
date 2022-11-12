
function validar(){
    var nombre, correo, contraseña;
    nombre = document.getElementById("name").value;
    correo = document.getElementById("email").value;
    contraseña = document.getElementById("pass").value;
  
    expresion = /\w+@\w+\.[a-z]/;
    if(nombre === "" || correo === "" || contraseña === ""){
        alert("Complete los campos correctamente.");
        return false;
    }
    else if(nombre.lenght>30){
        alert("El nombre es muy largo.");
        return false;
    }
    else if(correo.lenght>30){
        alert("El correo es muy largo.");
        return false;
    }
    else if(contraseña.lenght>30 || contraseña<7){
        alert("La contraseña debe tener entre 8 y 29 caracteres.");
        return false;
    }
    else if (expresion.test(correo)!=true){
        alert("El correo no es válido.");
        return false;
    }
  }
  function singinClick() {
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var email = document.getElementById("email").value;
      var contraseña = document.getElementById("contraseña").value;
      var contraseña1 = document.getElementById("contraseñaR").value;
      if (nombre == "" || apellido == "" || telefono == "" || email == "" || contraseña == "" || contraseña1 == "") {
          alert("Debe completar Todos los campos");
      } else if (contraseña !== contraseña1) {
          alert("Las contraseñas no coinciden.!!");
          document.getElementById("enviar").disabled = true;
          setTimeout(activateSend, 1000);
      } else {
          alert("Cuenta Creada Correctamente, presione Registrarse para continuar...");
      }
  }
