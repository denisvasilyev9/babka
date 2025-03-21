from flask import Flask, render_template, request

app = Flask(__name__)

# Моделируем ответ бабушки
def get_babka_response(user_message):
    responses = {
        "Привет": "Привет, милок, как дела?",
        "Как ты?": "Ой, все как всегда, стараюсь не унывать!",
        "Что нового?": "Все как обычно, вяжу, чаю пью.",
        "Пока": "До свидания, милок, приходи еще!"
    }
    return responses.get(user_message, "Я не совсем поняла, что ты сказал. Повтори!")

@app.route("/", methods=["GET", "POST"])
def index():
    babka_message = "Привет, милок! Напиши мне что-нибудь!"
    user_message = None
    if request.method == "POST":
        user_message = request.form["message"]
        babka_message = get_babka_response(user_message)
    
    return render_template("index.html", babka_message=babka_message, user_message=user_message)

if __name__ == "__main__":
    app.run(debug=True)
