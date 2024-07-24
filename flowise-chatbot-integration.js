import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

document.addEventListener('DOMContentLoaded', () => {
    try {
        Chatbot.initFull({
            chatflowid: "dc12f954-caa3-409c-b359-82a93b0df76f",
            apiHost: "http://localhost:3000",
            chatflowConfig: {
                // Add any specific configuration for your chatflow here
            },
            theme: {
                chatWindow: {
                    welcomeMessage: "Hello! How can I assist you today?",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Type your message here...",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    },
                }
            }
        }, document.getElementById('flowise-container'));
    } catch (error) {
        console.error("Error initializing Flowise chatbot:", error);
        document.getElementById('flowise-container').innerHTML = "Apologies, our chatbot is currently unavailable. Please try again later.";
    }
});
