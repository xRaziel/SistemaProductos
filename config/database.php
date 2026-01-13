<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'postgres');
define('DB_PASS', 'password');
define('DB_NAME', 'sistema_productos');

class Database {
    private static $connection = null;

    public static function getConnection() {
        if (self::$connection === null){
            try {
                $connString = "host=" . DB_HOST . " dbname=" . DB_NAME . " user=" . DB_USER . " password=" . DB_PASS;
                self::$connection = pg_connect($connString);
                if (!self::$connection) {
                    throw new Exception("Error al conectar con la base de datos");
                }

            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['success' => false, 'message' => $e->getMessage()]);
                exit();
            }
        }
        return self::$connection;
    }

    public static function closeConnection() {
        if (self::$connection !== null) {
            pg_close(self::$connection);
            self::$connection = null;
        }
    }

    public static function escape($value) {
        $conn = self::getConnection();
        return pg_escape_string($conn, $value);
    }
    

}

?>