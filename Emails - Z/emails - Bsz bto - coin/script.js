 // Obtener el modal
        var modal = document.getElementById("myModal");

        // Obtener el enlace que abre el modal
        var link = document.querySelector(".custom-link");

        // Obtener el elemento de cierre
        var span = document.getElementsByClassName("close")[0];

        // Cuando se hace clic en el enlace, mostrar el modal
        link.onclick = function() {
            modal.style.display = "block";
        }

        // Cuando se hace clic en el elemento de cierre, ocultar el modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Cuando el usuario hace clic fuera del modal, ocultarlo
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

document.getElementById('redirectToPage').addEventListener('click', function() {
  window.location.href = 'https://z-web.foroactivo.com/';
});
  
 
