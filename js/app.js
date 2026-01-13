



const App = {

    init(){
        this.cargarApp();
        this.configurarEventListeners();
    },

    cargarApp(){
         
        DomHelper.limpiarSelect('bodega', '');
        DomHelper.limpiarSelect('sucursal', '');
        DomHelper.limpiarSelect('moneda', '');
        document.getElementById('materiales-container').innerHTML = '';

        CatalogService.cargarBodegas();
        CatalogService.cargarMonedas();
        CatalogService.cargarMateriales();
    },

    configurarEventListeners(){
        document.getElementById('bodega').addEventListener('change', this.manejarCambioBodega);
        document.getElementById('formProducto').addEventListener('submit', this.manejarSubmitFormulario);
    },

    manejarCambioBodega(event){
        const bodegaId = event.target.value;
        
        if(bodegaId){
            CatalogService.cargarSucursales(bodegaId);
        } else {
            CatalogService.limpiarSucursales();
        }
    },

    manejarSubmitFormulario(event){
        event.preventDefault();
        ProductService.validarYGuardar();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});