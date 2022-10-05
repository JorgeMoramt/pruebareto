function traerInformacion(){
$.ajax({
url:"https://g7f980d6d783b96-library.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/library/library",
type:"GET",
datatype:"JSON",
success:function(respuesta){
//Acá se puede validar la respuesta.
    console.log(respuesta);
}
});}
