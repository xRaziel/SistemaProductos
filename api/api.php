<?php 

header('Content-Type: application/json');
require_once __DIR__ . '/../controllers/ProductoController.php';
require_once __DIR__ . '/../config/database.php';

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $action = isset($_GET['action']) ? $_GET['action'] : '';

    switch($action){
        case 'getBodegas':
            ProductoController::getBodegas();
            break;
        case 'getSucursales':
            $bodega_id = isset($_GET['bodega_id']) ? intval($_GET['bodega_id']) : 0;
            ProductoController::getSucursales($bodega_id);
            break;
        case 'getMonedas':
            ProductoController::getMonedas();
            break;
        case 'getMateriales':
            ProductoController::getMateriales();
            break;
        default:
            echo json_encode(['error' => 'Acción no válida']);
    }

} elseif($_SERVER['REQUEST_METHOD'] === 'POST'){
    $action = isset($_POST['action']) ? $_POST['action'] : '';


    //EN CASO DE IMPLEMENTAR MÁS ACCIONES POST, AGREGAR MÁS CONDICIONALES AQUÍ CON SWITCH. PARA ESTE CASO, SÓLO HAY UNA.
    if($action === 'guardarProducto'){
        ProductoController::guardarProducto();
    } else {
        echo json_encode(['error' => 'Acción no válida']);
    }
}

Database::closeConnection();
?>