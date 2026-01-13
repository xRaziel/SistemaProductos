<?php
require_once __DIR__ . '/../config/database.php';

class Producto{
    
    public static function existe($codigo){
        $conn = Database::getConnection();
        $codigo = pg_escape_string($conn, $codigo);
        $query = "SELECT COUNT(*) as count FROM productos WHERE codigo = '$codigo'";
        $result = pg_query($conn, $query);
        $row = pg_fetch_assoc($result);
        return $row['count'] > 0;
        
    }

    public static function crear($datos){
        $conn = Database::getConnection();
        
        $codigo = Database::escape($datos['codigo']);
        $nombre = Database::escape($datos['nombre']);
        $bodega_id = Database::escape($datos['bodega_id']);
        $sucursal_id = Database::escape($datos['sucursal_id']);
        $moneda_id = Database::escape($datos['moneda_id']);
        $precio = Database::escape($datos['precio']);
        $descripcion = Database::escape($datos['descripcion']);
        $materiales = $datos['materiales'];

        //Verificar si el producto ya existe
        if (self::existe($codigo)) {
            return ['success' => false, 'message' => 'El código de producto ya existe.'];
        }

        //Iniciar transaccion
        pg_query($conn, "BEGIN");

        try{
            $query = "INSERT INTO productos (codigo, nombre, bodega_id, sucursal_id, moneda_id, precio, descripcion) 
                      VALUES ('$codigo', '$nombre', $bodega_id, $sucursal_id, $moneda_id, $precio, '$descripcion') 
                      RETURNING id";
            $result = pg_query($conn, $query);

            if (!$result) {
                throw new Exception('Error al insertar el producto.');
            }

            $row = pg_fetch_assoc($result);
            $producto_id = $row['id'];

            //Insertar materiales asociados
            foreach ($materiales as $material_id) {
                $material_id = Database::escape($material_id);
                $query = "INSERT INTO producto_materiales (producto_id, material_id) VALUES ($producto_id, $material_id)";
                $result = pg_query($conn, $query);
                
                if (!$result) {
                    throw new Exception("Error al insertar materiales");
                }
            }

            pg_query($conn, "COMMIT");

            return ['success' => true, 'message' => 'Producto creado exitosamente.'];

        }catch(Exception $e){
            pg_query($conn, "ROLLBACK");
            return ['success' => false, 'message' => 'Error al crear el producto.'];
        }

    }


}


?>