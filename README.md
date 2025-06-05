Descripción

Este proyecto es una aplicación frontend desarrollada como parte de una prueba técnica para un puesto de Desarrollador Frontend.
La aplicación consume la API pública de Rick and Morty (utilizando GraphQL) para mostrar un listado de personajes, con funcionalidades como búsqueda por nombre, visualización de detalles individuales, y gestión de personajes favoritos con persistencia y límite de cinco elementos.
El objetivo principal es evaluar habilidades en React, TypeScript, manejo de solicitudes HTTP, estado global con Zustand, y control de versiones con Git, además de aplicar buenas prácticas en diseño responsivo y usabilidad.

## Tecnologías usadas

- **React**: Librería principal para construir la interfaz de usuario.
- **Next.js**: Framework para React que permite renderizado del lado servidor y rutas dinámicas.
- **TypeScript**: Superset de JavaScript para tipado estático y mayor robustez en el código.
- **GraphQL (urql)**: Para consumir la API de Rick and Morty de forma eficiente y declarativa.
- **Zustand**: Librería ligera para manejo de estado global (favoritos).
- **Tailwind CSS**: Framework CSS para estilos utilitarios y diseño responsivo.
- **Material UI**: Componentes de interfaz de usuario para una mejor experiencia en la barra de búsqueda.

## Instalación y ejecución

- Clonar el repositorio:
  ```bash
  git clone https://github.com/Brandonbb5/rickymortyapi.git

Instalar las dependencias:

npm install

Ejecutar en modo desarrollo:
npm run dev

Probar en el navegador:
http://localhost:3000


## Funcionalidades

- **Barra de Búsqueda**: Permite buscar personajes por nombre mediante una barra de búsqueda.
- **Listado de Personajes**: Muestra una lista de personajes con tarjetas que incluyen Nombre, Género, Estado e Imagen.
- **Detalles de Personaje**: Página dedicada con información detallada, incluyendo Origen, Ubicación, Episodios en los que aparece y un botón para marcar como favorito.
- **Favoritos**:
  - Se pueden agregar hasta 5 personajes favoritos.
  - El orden de los favoritos se mantiene persistente.
  - Al agregar un nuevo favorito cuando ya hay 5, se elimina el último de la lista para mantener el límite.
- **Diseño responsivo**: La interfaz se adapta a diferentes tamaños de pantalla para una mejor experiencia en dispositivos móviles y desktop.
- **Manejo de errores y estados de carga**: Se muestran mensajes e indicadores adecuados durante la carga y en caso de errores en las solicitudes a la API.

## Consideraciones Técnicas

- **Elección de Next.js:** Se optó por Next.js debido a sus capacidades de renderizado del lado del servidor (SSR) y generación de sitios estáticos, lo que mejora el rendimiento y el SEO de la aplicación. Además, su sistema de rutas basado en archivos facilita la organización del proyecto y permite una navegación intuitiva.

- **Manejo del estado mediante URL:** Se decidió manejar ciertos estados de la aplicación, como la pestaña activa en la vista de detalles, a través de parámetros en la URL (`searchParams`). Esto permite a los usuarios compartir enlaces directos a vistas específicas y mejora la experiencia de usuario al mantener la navegación sincronizada con el estado de la aplicación.

- **Persistencia y manejo de favoritos:** El estado de los personajes favoritos se manejó con Zustand, una librería ligera para manejo de estado global, con persistencia en localStorage para mantener los favoritos y su orden incluso después de recargar la página.

- **Manejo de errores y carga:** Se implementó un manejo claro de los estados de carga y error en las solicitudes a la API, mostrando mensajes adecuados y evitando estados inconsistentes en la UI.


# Futuras mejoras

- Mejorar mensajes para usuarios (Agregar mensajes al agregar favoritos tipo Alert).
- Continuar optimizando el diseño visual para UX más atractiva.
- Autocompletar busqueda (searchBar)
- Agregar tests para funciones de Zustand, componente de paginación y manejo de estados
