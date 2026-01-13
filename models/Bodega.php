<?php

require_once __DIR__ . '/../config/database.php';

class Bodega {
    public static function getAll(){
        $conn = Database::getConnection();
        $query = "SELECT id, nombre FROM bodegas ORDER BY nombre";
        $result = pg_query($conn, $query);

        $bodegas = [];
        while ($row = pg_fetch_assoc($result)) {
            $bodegas[] = $row;
        }
        return $bodegas;
    }
}



?>