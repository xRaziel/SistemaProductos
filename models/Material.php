<?php
require_once __DIR__ . '/../config/database.php';

class Material {
    public static function getAll(){
        $conn = Database::getConnection();
        $query = "SELECT id, nombre FROM materiales ORDER BY nombre";
        $result = pg_query($conn, $query);

        $materiales = [];
        while ($row = pg_fetch_assoc($result)) {
            $materiales[] = $row;
        }
        return $materiales;
    }
}

?>