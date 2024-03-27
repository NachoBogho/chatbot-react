import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = ""; // Introduce tu API Key de OpenAI ente las " " para que funcione el chatbot 

const systemMessage = { 
  "role": "system", "content": "" //dentro de las " " introduci el texto que le da el contexto al bot, para que pueda responder de manera adecuada
}

function App() {
  
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender:  "ChatGPT",
      direction: "incoming"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);


const handleSend = async (message) => { // Función que maneja el envío de mensajes por el usuario

  const newMessage = { // Crea un nuevo mensaje saliente con el contenido y el remitente proporcionados
    message,
    direction: 'outgoing',
    sender: "user"
  };

  
  const newMessages = [...messages, newMessage]; // Nuevo arreglo de mensajes que incluye el nuevo mensaje enviado

  setMessages(newMessages); // Actualiza el estado de los mensajes con el nuevo arreglo de mensajes
  
  setIsTyping(true); // Establece el estado de 'isTyping' en verdadero para mostrar que el usuario está escribiendo
  
  await processMessage(newMessages); // Procesa el mensaje usando la función 'processMessage' y espera a que se complete
};


async function processMessage(chatMessages) { // Función asincrónica que procesa los mensajes enviados

  let apiMessages = chatMessages.map((messageObject) => { // Mapea los mensajes del chat a un formato que se pueda enviar a la API
    let role = "";
    if (messageObject.sender === "ChatGPT") {
      role = "assistant";
    } else {
      role = "user";
    }
    return { role: role, content: messageObject.message}
  });

  
  const apiRequestBody = { // Construye el cuerpo de la solicitud API que incluye el mensaje del sistema y los mensajes del chat
    "model": "gpt-3.5-turbo",
    "messages": [systemMessage, ...apiMessages]
  }

  
  await fetch("https://api.openai.com/v1/chat/completions", // Realiza una solicitud POST a la API de OpenAI para obtener una respuesta
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {

    setMessages([...chatMessages, { // Maneja la respuesta de la API y actualiza el estado de los mensajes con la respuesta del bot
      message: data.choices[0].message.content,
      sender: "ChatGPT"
    }]);
   
    setIsTyping(false);  // Establece el estado de 'isTyping' en falso para indicar que el bot ha dejado de escribir
  });
}

  return (
    <div className="App">
      <div style={{ position:"relative", height: "800px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App