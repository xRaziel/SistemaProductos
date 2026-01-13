<?php
require_once __DIR__ . '/../models/Bodega.php';
require_once __DIR__ . '/../models/Sucursal.php';
require_once __DIR__ . '/../models/Moneda.php';
require_once __DIR__ . '/../models/Material.php';
require_once __DIR__ . '/../models/Producto.php';

class ProductoController {

    public static function getBodegas() {
        $bodegas = Bodega::getAll();
        echo json_encode($bodegas);
    }
    
    public static function getSucursales($bodega_id) {
        $sucursales = Sucursal::getByBodega($bodega_id);
        echo json_encode($sucursales);
    }
    
    public static function getMonedas() {
        $monedas = Moneda::getAll();
        echo json_encode($monedas);
    }
    
    public static function getMateriales() {
        $materiales = Material::getAll();
        echo json_encode($materiales);
    }

    public static function guardarProducto() {
        $datos = [
            'codigo' => $_POST['codigo'],
            'nombre' => $_POST['nombre'],
            'bodega_id' => $_POST['bodega_id'],
            'sucursal_id' => $_POST['sucursal_id'],
            'moneda_id' => $_POST['moneda_id'],
            'precio' => $_POST['precio'],
            'descripcion' => $_POST['descripcion'],
            'materiales' => json_decode($_POST['materiales'], true)
        ];
        
        $resultado = Producto::crear($datos);
        echo json_encode($resultado);
    }

}

?>