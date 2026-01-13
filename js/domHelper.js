

const DomHelper = {

    crearOption(value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    },
    

    crearCheckboxMaterial(material) {
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `material_${material.id}`;
        checkbox.name = 'materiales[]';
        checkbox.value = material.id;
        
        const label = document.createElement('label');
        label.htmlFor = `material_${material.id}`;
        label.textContent = material.nombre;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        
        return div;
    },
    

    limpiarSelect(selectId, textoDefault) {
        const select = document.getElementById(selectId);
        select.innerHTML = `<option value="">${textoDefault}</option>`;
    },
    

    llenarSelect(selectId, opciones, textoDefault, formatoTexto = null) {
        const select = document.getElementById(selectId);
        select.innerHTML = `<option value="">${textoDefault}</option>`;
        
        opciones.forEach(opcion => {
            const texto = formatoTexto ? formatoTexto(opcion) : opcion.nombre;
            select.appendChild(this.crearOption(opcion.id, texto));
        });
    },
    

    obtenerDatosFormulario() {
        return {
            codigo: document.getElementById('codigo').value,
            nombre: document.getElementById('nombre').value,
            bodega: document.getElementById('bodega').value,
            sucursal: document.getElementById('sucursal').value,
            moneda: document.getElementById('moneda').value,
            precio: document.getElementById('precio').value,
            descripcion: document.getElementById('descripcion').value
        };
    },
    

    obtenerMaterialesSeleccionados() {
        const materiales = [];
        const checkboxes = document.querySelectorAll('input[name="materiales[]"]:checked');
        checkboxes.forEach(checkbox => {
            materiales.push(checkbox.value);
        });
        return materiales;
    },
    

    resetearFormulario() {
        document.getElementById('formProducto').reset();
        this.limpiarSelect('sucursal', 'Seleccione una sucursal');
    },
    

    mostrarMensajeExito(mensaje) {
        alert(mensaje);
    },
    

    mostrarMensajeError(mensaje) {
        alert(mensaje);
    }
}