# API-Users

## Despliegue

Entrar en /server/db, copiar el contenido de database.sql, y ejecutarlo en el xampp, para crear la base de datos.

En /server/src existe el archivo config.js, donde se encuentra la configuración de la base de datos, y el puerto en el que se ejecutará el servidor.

Inicializamos el servidor con estos comandos

```
cd server
npm install
npm run dev
```

Lo siguiente es inicializar el cliente, para ello, ejecutamos el index.html que se encuentra en /client en un navegador con el live server por ejemplo.

Ya con el xampp activo, el servidor y el cliente inicializado, ya podemos empezar a usar la aplicación.