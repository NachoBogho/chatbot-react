## Chatbot con OpenAI 🤖

Este repositorio contiene un chatbot implementado en React que utiliza la API de OpenAI para generar respuestas conversacionales. 
Podes darle un contexto y es facil de integrar a tu aplicacion web.

### Configuración

1. **Clona el Repositorio:** Clona este repositorio en tu máquina local utilizando el siguiente comando:
   ```bash 
   git clone https://github.com/NachoBogho/chatbot-react.git


2. **Instala las dependencias:** Navega hasta el directorio del repositorio clonado y ejecuta el siguiente comando para instalar las dependencias necesarias:
   ```bash 
   git install

3. Obtén una API Key de OpenAI: Necesitas una API Key de OpenAI para interactuar con su API. Si aún no tienes una, regístrate en OpenAI y sigue las instrucciones para obtener tu clave de API.

4. Configura la API Key: Abre el archivo App.js en el directorio /src y busca la constante API_KEY. Introduce tu clave de API entre las comillas "".

5. Una vez que hayas configurado correctamente la API Key, puedes ejecutar el proyecto utilizando el siguiente comando:
   ```powershell
    npm start

Esto iniciará la aplicación en tu navegador web predeterminado. Ahora puedes interactuar con el chatbot.

### Funcionalidades

- **Enviar Mensajes:** Escribe un mensaje en el campo de entrada y presiona Enter para enviarlo.
- **Respuestas del Chatbot:** El chatbot utilizará la API de OpenAI para generar respuestas basadas en el contenido del mensaje.
- **Indicador de Escritura:** Si el chatbot está generando una respuesta, verás un indicador de escritura.
- **Mensajes del Sistema:** Puedes configurar mensajes del sistema para dar contexto al chatbot modificando la constante `systemMessage` en el archivo `App.js`.


### Personalización

Si deseas personalizar el aspecto del chatbot, puedes modificar los estilos en el archivo CSS o importar tus propios estilos.


### Notas

- Este proyecto utiliza la biblioteca `@chatscope/chat-ui-kit-react` para la interfaz de usuario del chatbot.
- Asegúrate de revisar y cumplir con los términos de uso de la API de OpenAI antes de utilizar este código en un entorno de producción.

¡Disfruta interactuando con el chatbot! Si tienes alguna pregunta o problema, no dudes en abrir un issue en este repositorio.






