===============================================
SISTEMA DE REGISTRO DE PRODUCTOS
===============================================

REQUISITOS DEL SISTEMA:
-----------------------
- PHP versión: 7.4 o superior (Recomendado: PHP 8.0+)
- PostgreSQL versión: 12 o superior (Recomendado: PostgreSQL 14+)
- Servidor web: Apache o Nginx
- Extensión PHP: php-pgsql (para conexión con PostgreSQL)

INSTRUCCIONES DE INSTALACIÓN:
------------------------------

1. CONFIGURAR LA BASE DE DATOS:
   
   a) Crear la base de datos en PostgreSQL:
      - Abrir psql o pgAdmin
      - Ejecutar: CREATE DATABASE sistema_productos;
   
   b) Ejecutar el script sql:
      - Navegar a la carpeta sql/
      - Ejecutar el archivo schema.sql en la base de datos creada
      - Comando en terminal: psql -U postgres -d sistema_productos -f sql/schema.sql

2. CONFIGURAR LA CONEXIÓN A LA BASE DE DATOS:
   
   a) Abrir el archivo config/database.php
   b) Modificar las siguientes constantes según tu configuración:
      
      define('DB_HOST', 'localhost');      // Host de PostgreSQL
      define('DB_NAME', 'sistema_productos'); // Nombre de la base de datos
      define('DB_USER', 'postgres');       // Usuario de PostgreSQL
      define('DB_PASS', 'tu_password');    // Contraseña de PostgreSQL

3. CONFIGURAR EL SERVIDOR WEB:
   
   Opción A - Usando servidor integrado de PHP (Para desarrollo):
   ---------------------------------------------------------------
   a) Abrir terminal en la carpeta del proyecto
   b) Ejecutar: php -S localhost:8000
   c) Abrir navegador en: http://localhost:8000

   Opción B - Usando XAMPP/WAMP/LAMP:
   -----------------------------------
   a) Copiar la carpeta SistemaProductos a la carpeta htdocs (o www)
   b) Asegurarse de que Apache esté corriendo
   c) Abrir navegador en: http://localhost/SistemaProductos


4. VERIFICAR LA INSTALACIÓN:
   
   a) Acceder a la aplicación desde el navegador
   b) Verificar que los campos select (Bodega, Moneda, Materiales) se carguen con datos
   c) Probar el cambio de bodega para ver si las sucursales se cargan dinámicamente

NOTAS IMPORTANTES:
------------------
1. Asegúrese de que la extensión php-pgsql esté habilitada en php.ini
2. Verificar que PostgreSQL esté corriendo antes de acceder a la aplicación
3. Los datos de ejemplo (bodegas, sucursales, monedas, materiales) se insertan automáticamente al ejecutar el script SQL


CONTACTO:
---------
Para cualquier duda o problema, contactar a fvarasadaros@gmail.com