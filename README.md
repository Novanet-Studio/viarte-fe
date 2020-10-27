# viarte-fe

El frontend de Viarte fue realizado con [gatsby](https://gatsby.com), un framework para generación de sitios estáticos, facilita la creación de los sitios web.

> **NOTA:** Este proyecto utiliza variables de entorno, en las cuales estan:
>
> - **API_URL** para acceder a los endpoints
> - **GATSBY_GOOGLE_MAPS_KEY** Key para acceder a los servicios de google maps

## Instalación

Para instalar el proyecto y correrlo en el entorno local, puedes seguir los siguientes pasos:

**Clonar repositorio**

`$ git clone https://github.com/Novanet-Studio/viarte-fe`

**Instalar los paquetes**

Si tienes yarn instalado puedes hacer lo siguiente:
`$ yarn install`

Si prefieres usar npm:
`$ npm install`

## Iniciar el proyecto

Luego de haber instalado los paquetes, se puede inicializar el proyecto. Gatsby provee varios scripts que realizan ciertas acciones:

- `build`: Realiza la compilacion del proyecto para subir el codigo a producción
- `develop`: Ejecuta el proyecto en modo desarrollo
- `format`: Le da formato a los archivos del proyecto
- `start`: Inicia el proyecto en modo desarrollo
- `serve`: Sirve el proyecto compilado para testear
- `clean`: Elimina el caché de la aplicación
- `test`: Ejecuta los test

Para ejecutar cualquiera de estos comandos se puede utilizar tanto `npm` como `yarn`

Teniendo lo anterior en cuenta, podemos ejecutar el proyecto de la siguiente manera:

usando yarn:

`yarn develop`

usando npm:

`npm run develop`

---

## Licencia

Este proyecto esta bajo la licencia MIT - [Leer licencia](https://github.com/Novanet-Studio/viarte-fe/blob/master/LICENSE)

---

Este proyecto fué realizado por el equipo [NovanetStudio](https://www.novanet.studio/site/)
