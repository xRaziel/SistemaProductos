

const Validator = {

    validarCodigo(codigo){
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
        if (!codigo || codigo.trim() === '') {
            return { valid: false, message: "El código del producto no puede estar en blanco."};
        }
        
        if (codigo.length < 5 || 
            codigo.length > 15) {
            return { valid: false, message: "El código debe tener entre 5 y 15 caracteres." };
        }

        if (!regex.test(codigo)) {
            return { valid: false, message: "El código del producto debe contener letras y números. " };
        }
        
        return { valid: true };
    },

    validarNombre(nombre) {
        if (!nombre || nombre.trim() === '') {
            return { valid: false, message: "El nombre del producto no puede estar en blanco."};
        }
        
        if (nombre.length < 2 || 
            nombre.length > 50) {
            return { valid: false, message: "El nombre del producto debe tener entre 2 y 50 caracteres." };
        }
        
        return { valid: true };
    },

    validarPrecio(precio) {
        const regex = /^\d+(\.\d{1,2})?$/;
        if (!precio || precio.trim() === '') {
            return { valid: false, message: "El precio del producto no puede estar en blanco." };
        }

        if (!regex.test(precio) || parseFloat(precio) <= 0) {
            return { valid: false, message: "El precio del producto debe ser un número positivo con hasta dos decimales" };
        }
        
        return { valid: true };
    },

    validarMateriales() {
        const checkboxes = document.querySelectorAll('input[name="materiales[]"]:checked');
        
        if (checkboxes.length < 2) {
            return { valid: false, message: "Debe seleccionar al menos dos materiales para el producto." };
        }
        
        return { valid: true };
    },

    validarSelect(valor, nombreCampo) {
        if (!valor || valor === '') {
            return { valid: false, message: `Debe seleccionar una opción para ${nombreCampo}.` };
        }
        
        return { valid: true };
    },

    validarDescripcion(descripcion) {
        if (!descripcion || descripcion.trim() === '') {
            return { valid: false, message: "La descripción del producto no puede estar en blanco." };
        }

        if (descripcion.length < 10 || 
            descripcion.length > 1000) {
            return { valid: false, message: "La descripción del producto debe tener entre 10 y 1000 caracteres." };
        }

        return { valid: true };
    },

    validarFormulario(datos) {
        // Validar código
        let resultado = this.validarCodigo(datos.codigo);
        if (!resultado.valid) return resultado;
        
        // Validar nombre
        resultado = this.validarNombre(datos.nombre);
        if (!resultado.valid) return resultado;
        
        // Validar bodega
        resultado = this.validarSelect(datos.bodega, 'bodega');
        if (!resultado.valid) return resultado;
        
        // Validar sucursal
        resultado = this.validarSelect(datos.sucursal, 'sucursal');
        if (!resultado.valid) return resultado;
        
        // Validar moneda
        resultado = this.validarSelect(datos.moneda, 'moneda');
        if (!resultado.valid) return resultado;
        
        // Validar precio
        resultado = this.validarPrecio(datos.precio);
        if (!resultado.valid) return resultado;
        
        // Validar materiales
        resultado = this.validarMateriales();
        if (!resultado.valid) return resultado;
        
        // Validar descripción
        resultado = this.validarDescripcion(datos.descripcion);
        if (!resultado.valid) return resultado;
        
        return { valid: true };
    }
        

}