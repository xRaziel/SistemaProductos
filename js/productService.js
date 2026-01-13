

const ProductService = {

    validarYGuardar(){
        //Obtener los datos del form
        const datos = DomHelper.obtenerDatosFormulario();

        //Validar datos
        const errores = Validator.validarFormulario(datos);

        if(!errores.valid){
            DomHelper.mostrarMensajeError(errores.message);
            return;
        }

        //Obtener materiales seleccionados del form
        const materiales = DomHelper.obtenerMaterialesSeleccionados();

        const productoData = {
            codigo: datos.codigo,
            nombre: datos.nombre,
            bodega_id: datos.bodega,
            sucursal_id: datos.sucursal,
            moneda_id: datos.moneda,
            precio: datos.precio,
            descripcion: datos.descripcion,
            materiales: materiales
        };

        this.guardar(productoData);
    },

    guardar(productoData){
        ApiService.guardarProducto(productoData)
            .then(response => {
                if(response.success){
                    DomHelper.mostrarMensajeExito('Producto guardado exitosamente.');
                    DomHelper.resetearFormulario();
                } else {
                    DomHelper.mostrarMensajeError('Error al guardar el producto: ' + response.message);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                DomHelper.mostrarMensajeError('Error en la solicitud al servidor.');
            });
    }
};