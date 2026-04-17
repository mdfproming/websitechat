/**
 * chat.js — логика отправки сообщений
 */

// Функция отправки сообщения
function sendMessage() {
    let input = document.getElementById("messageInput");
    let messagesDiv = document.getElementById("messages");
    let msg = input.value;

    // Проверяем, что поле не пустое
    if (msg.trim() !== "") {
        // Создаем новый элемент сообщения
        let div = document.createElement("div");
        div.style.marginBottom = "10px";
        div.style.padding = "5px";
        div.style.borderBottom = "1px solid #eee";
        div.textContent = "Вы: " + msg;
        
        // Добавляем сообщение в контейнер
        messagesDiv.appendChild(div);
        
        // Автоматическая прокрутка вниз
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        
        // Очищаем поле ввода
        input.value = "";
    }
}

// Позволяем отправлять сообщение по нажатию клавиши Enter
document.getElementById("messageInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

console.log("Chat logic loaded successfully.");