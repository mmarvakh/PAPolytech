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