<?php 
require_once __DIR__ . '/../config/database.php';


class Moneda {
    public static function getAll(){
        $conn = Database::getConnection();
        $query = "SELECT id, codigo, nombre FROM monedas ORDER BY codigo";
        $result = pg_query($conn, $query);

        $monedas = [];
        while ($row = pg_fetch_assoc($result)) {
            $monedas[] = $row;
        }
        return $monedas;
    }
}

?>