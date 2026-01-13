<?php
require_once __DIR__ . '/../config/database.php';

class Sucursal {

    public static function getAll(){
        $conn = Database::getConnection();
        $query = "SELECT id, nombre FROM sucursales WHERE bodega_id = $bodega_id ORDER BY nombre";
        $result = pg_query($conn, $query);

        $sucursales = [];
        while ($row = pg_fetch_assoc($result)) {
            $sucursales[] = $row;
        }
        return $sucursales;
    }

    public static function getByBodega($bodega_id) {
        $conn = Database::getConnection();
        $bodega_id = Database::escape($bodega_id);
        $query = "SELECT id, nombre FROM sucursales WHERE bodega_id = $bodega_id ORDER BY nombre";
        $result = pg_query($conn, $query);
        
        $sucursales = [];
        while ($row = pg_fetch_assoc($result)) {
            $sucursales[] = $row;
        }
        
        return $sucursales;
    }
}


?>