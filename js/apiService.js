
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
    },

    guardarProducto(productoData){
        
        const formData = new FormData();
        formData.append('action', 'guardarProducto');

        // Agregar todos los datos al FormData
        Object.keys(productoData).forEach(key => {
            const value = productoData[key];
            // Si es un array u objeto, convertir a JSON
            if (typeof value === 'object' && value !== null) {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, value);
            }
        });

        return fetch(api, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error en petición POST:', error);
            throw error;
        });

    }
}