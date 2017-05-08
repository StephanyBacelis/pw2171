<?php
  //isset ->Si existe y trae un valor
  if(isset($_POST["txtUsuario"])&&isset($_POST["txtClave"])){
    //Arreglo de post o arreglo de get

    //Obtener del arreglo post
    $usuario=$_POST["txtUsuario"];
    $clave = $_POST["txtClave"];

    print($usuario);
    print($clave);
  }else{
    print("<a href='acceso.html'>Valida tus datos</a>");
  }

?>
