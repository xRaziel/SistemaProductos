-- Base de datos para Sistema de Registro de Productos

CREATE TABLE bodegas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE sucursales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    bodega_id INTEGER NOT NULL,
    FOREIGN KEY (bodega_id) REFERENCES bodegas(id)
);

CREATE TABLE monedas (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(10) NOT NULL,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE materiales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(15) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    bodega_id INTEGER NOT NULL,
    sucursal_id INTEGER NOT NULL,
    moneda_id INTEGER NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bodega_id) REFERENCES bodegas(id),
    FOREIGN KEY (sucursal_id) REFERENCES sucursales(id),
    FOREIGN KEY (moneda_id) REFERENCES monedas(id)
);

CREATE TABLE producto_materiales (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    material_id INTEGER NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE,
    FOREIGN KEY (material_id) REFERENCES materiales(id)
);


-- DATA DUMMY --


INSERT INTO bodegas (nombre) VALUES 
    ('Bodega Central'),
    ('Bodega Norte'),
    ('Bodega Sur');


INSERT INTO sucursales (nombre, bodega_id) VALUES 
    ('Sucursal Centro 1', 1),
    ('Sucursal Centro 2', 1),
    ('Sucursal Norte 1', 2),
    ('Sucursal Norte 2', 2),
    ('Sucursal Sur 1', 3),
    ('Sucursal Sur 2', 3);


INSERT INTO monedas (codigo, nombre) VALUES 
    ('USD', 'Dólar Estadounidense'),
    ('EUR', 'Euro'),
    ('CLP', 'Peso Chileno'),
    ('PEN', 'Sol Peruano');


INSERT INTO materiales (nombre) VALUES 
    ('Plástico'),
    ('Metal'),
    ('Madera'),
    ('Vidrio'),
    ('Tela'),
    ('Cuero');