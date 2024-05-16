SneakStil

## Scripts de arranque


### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando hagas cambios.\
También podrás ver cualquier error de lint en la consola.

### `node server.js`

Ejecuta el servidor montado con node para su conexión con labase de datos
Abre [http://localhost:5000/ "el nombre de la tabla que quieres acceder para ver los datos a los que acceder"](http://localhost:5000) para verla en tu navegador.

## Estructura del proyecto

### node_module
### public
Estas son carpetas con datos que se generan automaticamente al instalar node en el proyecto y al crear el proyecto de React respectivamente.
### src
esta es la carpeta principal del proyecto. Contiene todo lo manualmente realizado del proyecto. 
#### components
Contiene los componentes que se importan, el footer y el header ya que son los que vemos en todas la vistas
#### css
Contiene el archivo css de todo el proyecto sin contar el css de los componentes
#### database
Contiene el archivo sql de la exportacion de la base de datos
#### img
Contiene todas las imagenes utilizadas en el proyecto
#### views
La mas importante del proyecto, en ella se encuentran los archivos de todas las vistas de la pagina.

## Estructura del código
En react la estructura es siempre la misma: 
 -Los Imports: importacion de las bibliotecas o usos de la pagina, como imagenes o funciones.
 -Las Funciones: todas las funciones que se usan en la vista se usan despues de declarar la vista en su const, pueden realizarse en esta parte del codigo o llamarlas desde otro archivo.
 -El return: dentro del return va la estrcutura de la vista que se renderiza, tiene la misma estructura que HTML con la diferencia en la forma de llamar a las clases o el uso de etiquetas de bibliotecas de React como: "<Link>" o "<Button>".
    

![code](https://github.com/alhernandr/sneakstil-react/assets/116368055/23565b22-8a1a-4848-8184-6e16c5e019f5)


    
### Funciones
 
La mayoria de las funciones en este proyecto, como en la foto de ejemplo, son conexiones con el servidor que accede a la base de datos. En otras vistas en las que hay otras funciones son de validacion de datos en general o por el inicio de sesion. Por ejemplo:
    
![Funciones](https://github.com/alhernandr/sneakstil-react/assets/116368055/8d7393ee-aafb-461b-ad1b-36ab68c78036)

    
    
![Funciones2](https://github.com/alhernandr/sneakstil-react/assets/116368055/2a542b61-eab6-4917-a176-21fdb895e2d0)


### Vistas

Las vistas generales de este proyecto son:
 - **home.jsx**: esta es la vista principal de la tienda
- **shop.jsx**: vista de seleccion del producto para su inclusion en la cesta de compra
- **login.jsx**: vista para el inicio de sesion en la página
- **signin.jsx**: vista para el registro en la página
- **basket.jsx**: vista para la administracion de los productos añadidos en la cesta y acceso al pago
- **adminIndex.jsx**: vista de administrador para realizar el cruz llamando al servidor que accede a la base de datos
    
### Archivos importantes
    
- **server.js**: este archivo es el que contiene la conexion a la base de datos y las solicitudes llamadas en las funciones en cada vista necesaria.
- **router.jsx**: en este archivo se encuentran todas las rutas que redirigen las vistas unas a otras.
   ![router](https://github.com/alhernandr/sneakstil-react/assets/116368055/fed981ca-0b45-460c-9d86-9ad8a6148906)


# Instrucciones de Uso
## Requisitos Previos:
- Para arrancar este proyecto necesitara, un editor de codigo(VsCode), XAMPP y Node.js
- Antes de arrancar el programa hacer "npm i" en la terminal para descargar e instalar las dependencias usadas en el proyecto.
    
## Configuración de la Base de Datos:
Descargar e Instalar XAMPP:
Asegúrate de tener XAMPP instalado en tu sistema y, tras abrirlo, iniciar Apache y MySQL.
### Importar la Base de Datos:
Desde el panel de control de XAMPP, click en el botón Admin de MySQL (http://localhost/phpmyadmin)

Haz click en la pestaña "Importar".

Sube el archivo SQL proporcionado (sneakstil.sql) para importar la estructura y los datos.

## Explicación de la base de datos
**Admin** - Administradores registrados
    - id: (PRIMARY KEY) autoincremental
    - nombre: nombre del admin
    - email: email del admin
    - pasword: contraseña

**Productos** - Creados por administradores, formados por zapatillas
     - id: (PRIMARY KEY) autoincremental
    - nombre: nombre del producto
    - marca: marca del producto
    - precio: precio del producto
    - disponibilidad: disponibilidad del producto
    - imagen: imagen del producto
    
**Clientes** - Información de todos los Clientes
    - id: (PRIMARY KEY) autoincremental
    - nombre: nombre del admin
    - email: email del admin
    - pasword: contraseña

# Autoría
Este proyecto fue desarrollado por [**@alhernandr**](https://github.com/alhernandr) y [**@lyonelgj**](https://github.com/lyonelgj)

# Licencia
Proyecto elaborado para fines educativos para la asignatura Desarrollo Web en Entorno Servidor de segundo del CFGS de Desarrollo de Aplicaciones Web en el IES Ana Luisa Benítez.
