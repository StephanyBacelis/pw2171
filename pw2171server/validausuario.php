<?php
  include('utilerias.php');

  function validaUsuario($usuario,$clave){
    //computadora, usuario, contraseña
    $conexion=mysql_connect("localhost", "root", "");

    mysql_select_db("pw2171");

    $usuario=GetSQLValueString($usuario, "text");
    $clave=GetSQLValueString(md5($clave), "text");

    /*$consulta="select usuario, clave
    from usuarios where usuario='".$usuario."'
    and clave='".md5($clave)."' limit 1";*/
    $consulta=sprintf("select usuario, clave
      from usuarios where usuario=%s and clave=%s
      limit 1", $usuario, $clave);

    //--'1=1 <- true y puedes acceder a la bd.
    $resultado = mysql_query($consulta);

    if(mysql_num_rows($resultado)>0){
      print("Bienvenido ".$usuario);
    }else{
      print("Bye.");
    }

  }
  //isset ->Si existe y trae un valor
  if(isset($_POST["txtUsuario"])&&isset($_POST["txtClave"])){
    //Arreglo de post o arreglo de get

    //Obtener del arreglo post
    $usuario=$_POST["txtUsuario"];
    $clave = $_POST["txtClave"];

    validaUsuario($usuario,$clave);

  }else{
    print("<a href='acceso.html'>Valida tus datos</a>");
  }

?>
