window.addEventListener('load', () => {
    const cursor = document.querySelector('.blinking-cursor');
    setInterval(() => {
        cursor.classList.toggle('hidden');
    }, 500);

    const translations = {
        en: {
            intro: "Heya!! I'm Bess, I am a Python programmer! Also, I'm planning to learn C++.",
            info: "I'm interested in cybersecurity and OSINT!",
            visitText: "You can visit my Telegram blog here",
            buttonText: "my blog"
        },
        ru: {
            intro: "Привет!! Я Бессоница, я программист на Пайтон! Также планирую изучить С++.",
            info: "Я увлекаюсь кибербезопасностью и OSINT!",
            visitText: "Вы можете посетить мой блог здесь",
            buttonText: "мой блог"
        }
    };

    
    function switchLanguage(lang) {
        document.getElementById('intro').textContent = translations[lang].intro;
        document.getElementById('info').textContent = translations[lang].info;
        document.getElementById('visit-text').textContent = translations[lang].visitText;
        document.getElementById('telegram-button-text').textContent = translations[lang].buttonText;

        if (lang === 'ru') {
            consoleElement.classList.add('ru-font');
        } else {
            consoleElement.classList.remove('ru-font');
        }
    }


    document.getElementById('en-btn').addEventListener('click', () => {
        switchLanguage('en');
    });

    document.getElementById('ru-btn').addEventListener('click', () => {
        switchLanguage('ru');
    });
});
