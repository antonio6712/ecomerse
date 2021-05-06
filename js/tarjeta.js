function pago(){
    var respuesta = confirm ("Pago realizado con exito");
    if(respuesta == true){
        return true;
    }else{
        return false;
    }
}