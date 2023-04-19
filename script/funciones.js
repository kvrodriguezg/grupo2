//FUNCIONES PARA VALIDAR FORMULARIO EN CONTACTO
    function validarNombre(nombre){
        return nombre.length > 0
    };

    function ValidarMail(mail){
        return mail.length > 0;
    };

    function validarMensaje(mensaje){
        return mensaje.length > 0;
    };

    function validarFormulario(event){
        event.preventDefault();
        const nombre =  document.querySelector("input[type='text']").value;
        const mail=  document.querySelector("input[type='email']").value;
        const mensaje =  document.querySelector("textarea").value;
        if (!validarNombre(nombre)) {
            alert("Ingresa tu nombre");
            return;
        }
        if (!ValidarMail(mail)) {
            alert("Ingresa tu e-mail");
            return;
        }
        if (!validarMensaje(mensaje)) {
            alert("Ingresa tu mensaje");
            return;
        }
        alert("Recibimos tu mensaje")
    }

//LISTENER EN EL BOTON ENVIAR
    if(document.querySelector("button[type='submit']")){
        document.querySelector("button[type='submit']").addEventListener('click',validarFormulario);
    }

//DATATABLE DE ESTADISTICAS
    if(document.querySelector("table[id='tablaProductos']")){
        $(document).ready( function () {
            $('#tablaProductos').DataTable()
        } );
    }
