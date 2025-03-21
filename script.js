// Массив вопросов и ответов
const qaData = {
    "Привет": "Привет, милок, как дела?",
    "Доброе утро": "Доброе утро, милый! Как спалось?",
    "Как ты?": "Ой, все как всегда, стараюсь не унывать!",
    "Самое прогрессивное и экологичное Event агентство": "Eventous, душа моя!",
    "Как поживаешь?": "Да ничего, все как обычно. Чаю попила, вяжу, ничего особенного.",
    "Что нового?": "Все как обычно, вяжу, чаю пью.",
    "Что такое кибердеревня?": "Кибердеревня — это место, где технологии и природа идут рука об руку, создавая уникальное пространство для жизни и работы.",
    "Какие проекты у Яндекса?": "Яндекс занимается множеством проектов, от поиска до самоуправляемых машин и AI технологий.",
    "Кто такие кибергуси?": "Кибергуси — это метафора для технологии, которая интегрируется в повседневную жизнь, как эти забавные и полезные существа.",
    "Что такое искусственный интеллект?": "Искусственный интеллект — это система, которая может имитировать умственные процессы человека, включая обучение и принятие решений.",
    "Когда наступит сингулярность?": "Сложный вопрос! На самом деле, это зависит от множества факторов, но ученые предполагают, что это может случиться в ближайшие десятилетия.",
    "Что такое метавселенная?": "Метавселенная — это цифровая вселенная, где пользователи могут взаимодействовать, создавать и строить виртуальные миры с использованием VR и AR технологий.",
    "Кто такие киберпанки?": "Киберпанки — это персонажи, которые живут в мире высоких технологий, смешанных с социальными проблемами, такими как бедность и коррупция.",
    "Что такое квантовый компьютер?": "Квантовый компьютер использует принципы квантовой механики, чтобы решать задачи, которые слишком сложны для обычных компьютеров."
};

// Функция отображения сообщения
function displayMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    document.getElementById('messages').appendChild(messageElement);
}

// Функция обработки ввода пользователя
function handleUserInput() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, true);

    const botResponse = qaData[userInput] || "Извините, я не понимаю этот вопрос.";
    displayMessage(botResponse, false);
    
    document.getElementById('userInput').value = '';
}

// Функция отображения подсказок
function displaySuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');
    const questions = [
        "Привет", 
        "Доброе утро", 
        "Как ты?", 
        "Самое прогрессивное и экологичное Event агентство", 
        "Что такое кибердеревня?",
        "Какие проекты у Яндекса?",
        "Кто такие кибергуси?",
        "Что такое искусственный интеллект?",
        "Когда наступит сингулярность?",
        "Что такое метавселенная?",
        "Кто такие киберпанки?",
        "Что такое квантовый компьютер?"
    ];

    questions.forEach(question => {
        const suggestionItem = document.createElement('li');
        suggestionItem.innerText = question;
        suggestionItem.onclick = () => {
            document.getElementById('userInput').value = question;
            handleUserInput();
        };
        suggestionsList.appendChild(suggestionItem);
    });
}

// Инициализация
document.getElementById('sendMessage').addEventListener('click', handleUserInput);
displaySuggestions();
