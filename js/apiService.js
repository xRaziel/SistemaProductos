
const api = 'api/api.php';

const ApiService = {

    
    
    getBodegas() {
        let url = `${api}?action=getBodegas`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error en petición GET:', error);
                throw error;
            });
    },

    getSucursales(bodegaId) {
        let url = `${api}?action=getSucursales&bodega_id=${encodeURIComponent(bodegaId)}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error en petición GET:', error);
                throw error;
            });
    },

    getMonedas(){
        let url = `${api}?action=getMonedas`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error en petición GET:', error);
                throw error;
            });
    },

    getMateriales(){
        let url = `${api}?action=getMateriales`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error en petición GET:', error);
                throw error;
            });
    }
}