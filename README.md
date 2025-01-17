# App Cambio

App Cambio es una aplicación desarrollada en **React** que permite realizar conversiones entre monedas utilizando la API de [VatComply](https://www.vatcomply.com/documentation). La interfaz sigue un diseño proporcionado en Figma, el cual se adapta a dispositivos móviles y de escritorio.

## Tecnologías Usadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas. Utiliza un modelo basado en componentes que permite crear interfaces modulares y reutilizables, facilitando el desarrollo y mantenimiento de aplicaciones.
- **Axios**: Cliente HTTP para hacer solicitudes a la API de manera eficiente. Axios permite interactuar con APIs RESTful y obtener datos de manera asíncrona, con soporte para manejar errores y respuestas de manera optimizada.

- **TailwindCSS**: Framework de CSS de utilidad-first para el diseño y estilo de la aplicación. Tailwind permite aplicar estilos mediante clases predefinidas, lo que facilita la personalización rápida del diseño y mejora la eficiencia del desarrollo sin necesidad de escribir reglas CSS complicadas.

- **Zustand**: Biblioteca ligera para manejo de estado en aplicaciones React. Con Zustan, se puede gestionar el estado global de la aplicación de manera sencilla y eficiente, evitando el uso excesivo de Context API o bibliotecas más complejas como Redux.

- **React Icons**: Una biblioteca de íconos fáciles de usar en aplicaciones React. Permite incluir fácilmente íconos personalizables en la UI, mejorando la accesibilidad y el diseño visual.

- **PostCSS y Autoprefixer**: Herramientas para procesar el CSS. PostCSS permite modificar y transformar el código CSS, y Autoprefixer agrega los prefijos necesarios para garantizar la compatibilidad con diferentes navegadores.

Este conjunto de tecnologías permite una experiencia de desarrollo ágil y un rendimiento óptimo en la aplicación.

## Descripción del Desafío

La aplicación **App Cambio** es una calculadora de conversión entre monedas. Al cargar la página por primera vez, el monto predeterminado es 1.00, y la moneda de origen es USD (Dólar de EE. UU.) con destino EUR (Euro). Los usuarios pueden ingresar una cantidad en el campo de texto, y automáticamente la aplicación calculará el monto a recibir en la moneda de destino. Tambien cuenta con 2 selectores que permiten al usuario seleccionar las monedas a convertir. La aplicación también permite intercambiar las monedas de origen y destino.
Adicionalmente en el pie de pagina pueden encontrarse links dinamicos, que dependen de las monedas seleccionadas, que redirigen al sitio [XE](https://www.xe.com/currency/) donde puede encontrar mas informacion sobre la moneda elegida.

### Precondiciones del dominio:

- Al cargar la página, se asume un monto inicial de 1.00 con las monedas de origen como **USD** y destino como **EUR**.
- Cuando se modifica el campo de entrada, la conversión se realiza automáticamente.
- El monto a ingresar no puede ser negativo.
- Los usuarios pueden intercambiar las monedas de origen y destino.

## Instalación

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/WalRoldan/app-cambio.git
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd app-cambio
   ```

3. **Instalar las dependencias**:

   Asegúrate de tener `Node.js` y `npm` instalados en tu máquina. Luego, instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

4. **Ejecutar la aplicación**:

   Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

   ```bash
   npm start
   ```

   Esto abrirá la aplicación en `http://localhost:3000`.

## Cómo Funciona

La aplicación realiza conversiones de monedas usando una API externa en tiempo real. Los usuarios ingresan un valor en el campo de entrada y la aplicación muestra automáticamente la cantidad convertida a la moneda seleccionada.

### Funcionalidades Clave

- **Conversión automática**: Al modificar el valor del input, el monto a recibir se calcula instantáneamente.
- **Interfaz interactiva**: Los usuarios pueden intercambiar las monedas de origen y destino para cambiar la dirección de la conversión.
- **Diseño responsivo**: La aplicación se adapta tanto a dispositivos móviles como de escritorio, siguiendo el diseño proporcionado en Figma.

## Estructura del Código

- **`src/`**: Contiene todos los archivos de código fuente de la aplicación, incluidos los componentes de React, los hooks y los estilos.
- **`src/components/`**: Contiene los componentes reutilizables que componen la interfaz de usuario.Implementé Feature-Based Architecture porque agrupar los recursos por funcionalidad mejora la modularidad y facilita el trabajo en equipo. Este enfoque asegura que cada funcionalidad se pueda desarrollar y mantener de forma aislada, lo que es ideal para aplicaciones con múltiples características.
- **`src/services/`**: Módulo para la integración con la API de conversión de monedas.
- **`src/store/`**: Este directorio contiene el estado global de la aplicación gestionado con [Zustand](https://github.com/pmndrs/zustand). En este archivo se definen los _stores_ utilizados para gestionar y compartir datos entre componentes.

## Justificación de la Arquitectura

- **Componentes reutilizables**: Los componentes se crean de manera modular para facilitar la reutilización y mantenimiento.
- **Manejo de estado en React**: Utilizamos el estado de React para gestionar los datos de la conversión de monedas y el comportamiento de la UI.
- **API externa para conversión**: La API de VatComply permite realizar conversiones precisas entre monedas.

## Despliegue

Puedes acceder a la versión en vivo de la aplicación a través de Vercel en el siguiente enlace:

[App Cambio](https://app-cambio-beta.vercel.app/)

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
