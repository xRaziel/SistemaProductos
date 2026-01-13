

const CatalogService = {

    cargarBodegas() {
        ApiService.getBodegas()
            .then(data => {
                DomHelper.llenarSelect(
                    'bodega', 
                    data, 
                    ''
                );
            })
            .catch(error => {
                console.error('Error al cargar bodegas:', error);
                DomHelper.mostrarMensajeError('Error al cargar las bodegas');
            });
    },

    cargarSucursales(bodegaId) {
        ApiService.getSucursales(bodegaId)
            .then(data => {
                DomHelper.llenarSelect(
                    'sucursal', 
                    data, 
                    ''
                );
            })
            .catch(error => {
                console.error('Error al cargar sucursales:', error);
                DomHelper.mostrarMensajeError('Error al cargar las sucursales');
            });
    },

    limpiarSucursales() {
        DomHelper.limpiarSelect('sucursal', '');
    },

    cargarMonedas() {
        ApiService.getMonedas()
            .then(data => {
                DomHelper.llenarSelect(
                    'moneda', 
                    data, 
                    '',
                    (moneda) => `${moneda.codigo} - ${moneda.nombre}`
                );
            })
            .catch(error => {
                console.error('Error al cargar monedas:', error);
                DomHelper.mostrarMensajeError('Error al cargar las monedas');
            });
    },

    cargarMateriales() {
        ApiService.getMateriales()
            .then(data => {
                const container = document.getElementById('materiales-container');
                container.innerHTML = '';
                
                data.forEach(material => {
                    container.appendChild(DomHelper.crearCheckboxMaterial(material));
                });
            })
            .catch(error => {
                console.error('Error al cargar materiales:', error);
                DomHelper.mostrarMensajeError('Error al cargar los materiales');
            });
    }

};