import telebot
import config
import datetime

from telebot import types

bot = telebot.TeleBot(config.TOKEN)

dateAndTime = datetime.datetime.today().strftime("%Y.%m.%d %H:%M:%S")

@bot.message_handler(commands=['start'])
def welcome_user(message):
    sticker = open("img/AnimatedSticker.tgs", "rb")
    bot.send_sticker(message.chat.id, sticker)

    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)

    keyboard_button_1 = types.KeyboardButton("😁 Узнать информацию о команде")
    keyboard_button_2 = types.KeyboardButton("📆 Узнать текущую дату и время")
    keyboard_button_3 = types.KeyboardButton("📨 Показать контакты команды")

    markup.add(keyboard_button_1, keyboard_button_2, keyboard_button_3)

    bot.send_message(message.chat.id, "Добро пожаловать, <b>{0.first_name}</b>!\n"
                                      "Это - тестовый бот, созданный командой группы 191-361"
                                      " для дальнейшей модификации в FAQ бота организации FSC".format(message.from_user, bot.get_me()), parse_mode="html", reply_markup=markup)


@bot.message_handler(content_types=["text"])
def answer_on_message(message):
    if message.chat.type == "private":
        if message.text == "😁 Узнать информацию о команде":
            bot.send_message(message.chat.id, "Команда Московского Политехнического Университета, группа 191-361\n"
                                              "Проект: Информационный помощник на сайте организации FSC\n"
                                              "Кол-во участников: 8\n"
                                              "Город обучения: Москва\n")

        elif message.text == "📆 Узнать текущую дату и время":
            bot.send_message(message.chat.id, f"Сегодняшние дата и время: {dateAndTime}")

        elif message.text == "📨 Показать контакты автора":
            bot.send_message(message.chat.id, "GitHub - https://github.com/mmarvakh/PAPolytech/tree/mainSite\n"
                                              "Почта - mmarvakh@gmail.com\n"
                                              "Сайт команды - https://marvakh.ru/")

        else:
            markup_inline = types.InlineKeyboardMarkup(row_width=2)

            inline_keyboard_button_1 = types.InlineKeyboardButton("Почему?", callback_data="why")
            inline_keyboard_button_2 = types.InlineKeyboardButton("Когда сможешь?", callback_data="when")

            markup_inline.add(inline_keyboard_button_1, inline_keyboard_button_2)

            bot.send_message(message.chat.id, "К сожалению, я пока не умею обрабатывать "
                                              "произвольные входящие сообщения 😞", reply_markup=markup_inline)
