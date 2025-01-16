# AstroLinker Live
(necesito un nombre mejor)

Este proyecto está basado en el template **astro-sanity-template** y la guía oficial de [Sanity + Astro](https://www.sanity.io/guides/sanity-astro-blog). El objetivo es integrar Astro con Sanity para crear un blog dinámico con previsualización en vivo (live preview).

## Requisitos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:

- Node.js (última versión LTS recomendada)
- npm (administrador de paquetes de Node.js)
- Cuenta en [Sanity.io](https://www.sanity.io)

## Instalación

1. **Clona el repositorio**:
   ```sh
   git clone https://github.com/eduardonwa/astrolinker.git
   cd astrolinker
   ```

2. **Instala las dependencias**:
    ```sh
    npm install
    ```

3. **Configura Sanity**:
    ```sh
    npx sanity@latest init --env
    ```

Este comando te pedirá que selecciones o crees un nuevo dataset. Si ya tienes uno, simplemente selecciona el existente; si no, podrás crear uno nuevo. Esto vinculará tu proyecto Astro con tu instancia de Sanity.

4. **Crea un Token con permisos de lectura**:
    Si quieres ver cambios en tiempo real mientras editas el contenido necesitarás crear un token con permisos de lectura. 
    
    [Guía para crear el token de lectura](https://www.sanity.io/guides/sanity-astro-blog#9d8f2fb62231)

    Tu archivo debe tener las siguientes variables:
    ```/.env```
    ```
    PUBLIC_SANITY_PROJECT_ID="<tu-project-id>"
    PUBLIC_SANITY_DATASET="<nombre-dataset>"
    PUBLIC_SANITY_VISUAL_EDITING_ENABLED="true" // cambiar a false en producción
    SANITY_API_READ_TOKEN="<api-token>"
    ```

5. **Ejecuta el servidor de desarrollo**:
    ```sh
    npm run dev
    ```

## Recursos

Este proyecto está basado en dos repositorios:

1. **astro-sanity-template**: Template básico para integrar Astro con Sanity
2. **Sanity + Astro Guide**: Guía completa sobre cómo integrar Sanity y Astro para crear un blog con live preview. 

Guía de instalación y explicación completa: [Sanity + Astro Guide (Live Preview)](https://www.sanity.io/guides/sanity-astro-blog)

<img src="public/works-on-my-machine.png" alt="" width="300" />
