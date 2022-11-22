/* 
Fig. 11.19: BusquedasFavoritasTwitter.js 
Almacenamiento y recuperación de pares clave/valor mediante el uso de local Storage y sessionStorage de HTML5
*/

var etiquetas; 

function cargarBusquedas() 
{
    console.log(window.sessionStorage.getItem( "aquiPreviamente" ) );
   if ( !window.sessionStorage.getItem( "aquiPreviamente" ) )
   {
      sessionStorage.setItem( "aquiPreviamente", "true" );
      document.getElementById( "mensajeBienvenida" ).innerHTML = "Bienvenido a la App de Búsquedas favoritas de Twitter";
   } 

   var longitud = localStorage.length;
   etiquetas = []; 

   for (var i = 0; i < longitud; ++i) 
   {
      etiquetas[i] = localStorage.key(i);
   } 

   etiquetas.sort(); 

   var marcado = "<ul>";
   var url = "http://search.twitter.com/search?q=";

   for (var etiqueta in etiquetas) 
   {
      var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
      marcado += "<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] + 
         "</a></span>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " + 
            "value = 'Editar' onclick = 'editarEtiqueta(id)'>" +
         "<input id = '" + etiquetas[etiqueta] + "' type = 'button' " + 
            "value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
   } 

   marcado += "</ul>";
   document.getElementById("busquedas").innerHTML = marcado;
} 

function borrarTodasLasBusquedas() 
{
   localStorage.clear();
   cargarBusquedas(); 
} 

function guardarBusqueda() 
{
   var consulta = document.getElementById("consulta");
   var etiqueta = document.getElementById("etiqueta");
   localStorage.setItem(etiqueta.value, consulta.value); 
   etiqueta.value = ""; 
   consulta.value = "";
   cargarBusquedas();
} 

function eliminarEtiqueta( etiqueta ) 
{
   localStorage.removeItem( etiqueta );
   cargarBusquedas(); 
} 

function editarEtiqueta( etiqueta )
{
   document.getElementById("consulta").value = localStorage[ etiqueta ];
   document.getElementById("etiqueta").value = etiqueta;   
   cargarBusquedas();
}

function iniciar()
{
   var botonGuardar = document.getElementById( "botonGuardar" );
   botonGuardar.addEventListener( "click", guardarBusqueda, false );
   var botonBorrar = document.getElementById( "botonBorrar" );
   botonBorrar.addEventListener( "click", borrarTodasLasBusquedas, false );
   cargarBusquedas(); // load the previously saved searches
} // end function start

window.addEventListener( "load", iniciar, false );