import telebot
import random

bot = telebot.TeleBot('1238952572:AAHkavAWkh6DmRyQelfAeBuwYvyIk6sZphs')
#Делаем кнопки для пользовательского ввода
keyboard0 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard1 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard2 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard3 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard4 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard5 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
keyboard6 = telebot.types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True, one_time_keyboard=True)
#Создать кнопку

apply_0_1 = telebot.types.KeyboardButton('✅ Да!')
apply_0_2 = telebot.types.KeyboardButton('❌ Позже')
back_1 = telebot.types.KeyboardButton('Вернуться к типам вопросов')
back_2 = telebot.types.KeyboardButton('Вернуться к вопросам')
#Типы вопросов
apply_1_1 = telebot.types.KeyboardButton('Общие вопросы')
apply_1_2 = telebot.types.KeyboardButton('Сертификация')
apply_1_3 = telebot.types.KeyboardButton('Географические вопросы')
apply_1_4 = telebot.types.KeyboardButton('Вопросы цены и времени')
#Общие вопросы
apply_2_1 = telebot.types.KeyboardButton('Орган по сертификации проконсультирует нас, как выполнить ваши стандарты?')
apply_2_2 = telebot.types.KeyboardButton('FSC – это иностранная система?')
apply_2_3 = telebot.types.KeyboardButton('Можно получить сертификат, если мы все делаем строго по законодательству?')
apply_2_4 = telebot.types.KeyboardButton('Как выяснить, есть ли сертификаты FSC у моих поставщиков?')
apply_2_5 = telebot.types.KeyboardButton('Как выбрать орган по сертификации?')
apply_2_6 = telebot.types.KeyboardButton('Можно ли продавать продукцию за границу без сертификата FSC?')
apply_2_7 = telebot.types.KeyboardButton('Если у нас нет сертификата, можем ли мы ставить логотип FSC на свою продукцию?')
#Георафические вопросы
apply_3_1 = telebot.types.KeyboardButton('Что делать, если в моем городе нет органов по сертификации ?')
apply_3_2 = telebot.types.KeyboardButton('Где и как нам пройти обучение?')
apply_3_3 = telebot.types.KeyboardButton('Подскажите, есть ли у вас региональные специалисты?')
#Вопросы цены и времени
apply_4_1 = telebot.types.KeyboardButton('Сколько стоит сертификация?')
apply_4_2 = telebot.types.KeyboardButton('Сколько стоят услуги органа по сертификации?')
apply_4_3 = telebot.types.KeyboardButton('Сколько времени занимает получение сертификата?')
#Сертификация
apply_5_1 = telebot.types.KeyboardButton('Кто выдает сертификаты?')
apply_5_2 = telebot.types.KeyboardButton('С чего нам начать?')
apply_5_3 = telebot.types.KeyboardButton('В чем суть сертификации лесоуправления?')
apply_5_4 = telebot.types.KeyboardButton('В чем суть сертификации цепочки поставок?')

#Создать строки
keyboard0.add(apply_0_1)
keyboard0.add(apply_0_2)

keyboard1.row(apply_1_1,apply_1_2).row(apply_1_3,apply_1_4)

keyboard2.add(apply_2_1)
keyboard2.add(apply_2_2)
keyboard2.add(apply_2_3)
keyboard2.add(apply_2_4)
keyboard2.add(apply_2_5)
keyboard2.add(apply_2_6)
keyboard2.add(apply_2_7)
keyboard2.add(back_1)

keyboard3.add(apply_3_1)
keyboard3.add(apply_3_2)
keyboard3.add(apply_3_3)
keyboard3.add(back_1)

keyboard4.add(apply_4_1)
keyboard4.add(apply_4_2)
keyboard4.add(apply_4_3)
keyboard4.add(back_1)

keyboard5.add(apply_5_1)
keyboard5.add(apply_5_2)
keyboard5.add(apply_5_3)
keyboard5.add(apply_5_4)
keyboard5.add(back_1)

keyboard6.add(back_1)
keyboard6.add(back_2)

global i

@bot.message_handler(commands = ['start'])
def start_text(message):
    bot.send_photo(message.chat.id, photo='https://ih1.redbubble.net/image.231015622.5015/pp,840x830-pad,1000x1000,f8f8f8.jpg')
    bot.send_message(message.chat.id, 'Привет, случайный пользователь!\nЯ - телеграм бот компании SFC\nХотите задать нам вопрос?',reply_markup=keyboard0)
@bot.message_handler(content_types = ['text'])
def start_text(message):
    global i
    if (message.text == '✅ Да!'):
        bot.send_message(message.chat.id,'Отлично, выберите тип вопроса, который вы хотите задать',reply_markup=keyboard1)
    elif (message.text == '❌ Позже'):
        bot.send_message(message.chat.id, 'Тогда в другой раз ☺')
    #
    elif (message.text == 'Общие вопросы'):
        bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard2)
    elif (message.text == 'Сертификация'):
        bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard5)
    elif (message.text == 'Географические вопросы'):
        bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard3)
    elif (message.text == 'Вопросы цены и времени'):
        bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard4)
    #Возврат      
    elif (message.text == 'Вернуться к типам вопросов'):
        bot.send_message(message.chat.id,'Возвращаемя к выбору типа вопроса ✅',reply_markup=keyboard1)
    elif (message.text == 'Вернуться к вопросам'):
        if (i == 2):
            bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard2)
        elif (i==5):
            bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard5)
        elif (i==3):
            bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard3)
        else:
            bot.send_message(message.chat.id,'Какой вопрос вы хотите задать?',reply_markup=keyboard4)
    #Общие вопросы (2)
    elif (message.text == 'Орган по сертификации проконсультирует нас, как выполнить ваши стандарты?'):
        i = 2
        bot.send_message(message.chat.id,'Нет, орган по сертификации не может консультировать своего клиента. Консультацией и подготовкой компаний к сертификации занимаются консультанты. Перечень зарегистрированных FSC России консультантов размещен здесь.',reply_markup=keyboard6)
    elif (message.text == 'FSC – это иностранная система?'):
        i = 2
        bot.send_message(message.chat.id,'Лесной попечительский совет (Forest Stewardship Council®, FSC) — это международная некоммерческая неправительственная организация. У нее нет никакой ведущей страны или региона. FSC управляется членами, представляющими самые различные страны и регионы. Среди членов FSC есть также немало российских граждан и организаций.',reply_markup=keyboard6)
    elif (message.text == 'Можно получить сертификат, если мы все делаем строго по законодательству?'):
        i = 2
        bot.send_message(message.chat.id,'Нет, этого недостаточно. Нужно выполнить все требования Национального стандарта FSC. Сертификация FSC - это не только соответствие деятельности компании национальному законодательству, но и дополнительная социальная и экологическая ответственность, которая включает в себя: соблюдение прав местного населения и коренных народов, оценку социальных последствий своей деятельности, сохранение биоразнообразия и наиболее ценных в экологическом отношении лесов от рубок, и др. Помимо этого, стандарт включает и другие требования, например экономическую устойчивость, неистощительность лесопользования, сокращение отходов при лесозаготовках, мониторинг, и другие требования.',reply_markup=keyboard6)
    elif (message.text == 'Как выяснить, есть ли сертификаты FSC у моих поставщиков?'):
        i = 2
        bot.send_message(message.chat.id,'Проверить наличие сертификата FSC у интересующей вас организации можно двумя способами: a) В международной базе данных http://info.fsc.org, указав наименование компании или номер сертификата.b) Перечень Российских держателей сертификатов есть в формате pdf на сайте https://ru.fsc.org/ru-ru/chto_my_delaem/facts_and_figures.',reply_markup=keyboard6)
    elif (message.text == 'Как выбрать орган по сертификации?'):
        i = 2
        bot.send_message(message.chat.id,'Зайдите на наш сайт https://ru.fsc.org/ru-ru/cert/so и выберите орган по сертификации из предложенного списка аккредитованных компаний. Поскольку в России работает около 20 органов по сертификации, то имеет смысл провести тендер среди них.',reply_markup=keyboard6)
    elif (message.text == 'Можно ли продавать продукцию за границу без сертификата FSC?'):
        i = 2
        bot.send_message(message.chat.id,'Да, можете - схема FSC является добровольной. Но большинство покупателей запрашивают подтверждение соответствия международным схемам лесной сертификации. Возможно, Вам придется искать другого покупателя либо другие рынки сбыта.',reply_markup=keyboard6)
    elif (message.text == 'Если у нас нет сертификата, можем ли мы ставить логотип FSC на свою продукцию?'):
        i = 2
        bot.send_message(message.chat.id,'Нет, для того чтобы наносить логотип FSC на свою продукцию, вам необходимо сертифицироваться по стандарту цепочки поставок COC. Это необходимо также для того, чтобы публично продвигать свою организацию как ответственную с помощью FSC.',reply_markup=keyboard6)
    #Георафические вопросы (3)
    elif (message.text == 'Что делать, если в моем городе нет органов по сертификации ?'):
        i = 3
        bot.send_message(message.chat.id,'Органы по сертификации работают по всей России и не привязаны к конкретному городу. В перечне консультантов на сайте FSC России есть указание на регионы их деятельности, но они также не привязаны к конкретному населенному пункту.',reply_markup=keyboard6)
    elif (message.text == 'Где и как нам пройти обучение?'):
        i = 3
        bot.send_message(message.chat.id,'FSC России предлагает сертифицируемым компаниям, держателям сертификатов, заинтересованным сторонам различные программы обучения. Подробную информацию можно найти здесь https://ru.fsc.org/ru-ru/cert/study.',reply_markup=keyboard6)
    elif (message.text == 'Подскажите, есть ли у вас региональные специалисты?'):
        i = 3
        bot.send_message(message.chat.id,'Региональных специалистов у нас нет, пишите или звоните в офис в Москве. Контакты размещены здесь https://ru.fsc.org/ru-ru/o_nas/kontakty. Есть также представитель в Красноярске, к нему можно обращаться, если Вы проживаете в СФО или ДВФО.',reply_markup=keyboard6)
    #Вопросы цены и времени (4)
    elif (message.text == 'Сколько стоит сертификация?'):
        i = 4
        bot.send_message(message.chat.id,'Стоимость и сроки зависят от множества факторов и всегда индивидуальны. Стоимость складывается из нескольких составляющих:\n• затраты на приведение деятельности компании в соответствие со стандартами;\n• стоимость услуг органа по сертификации;\n• стоимость услуг консультантов (опционально).',reply_markup=keyboard6)
    elif (message.text == 'Сколько стоят услуги органа по сертификации?'):
        i = 4
        bot.send_message(message.chat.id,'Стоимость услуг ОС также зависит от множества факторов. Для сертификации лесоуправления это:\n• Структура и размер компании;\n• Методы управления и ведения хозяйственной деятельности;\n• Площадь сертифицируемой территории;\n• Количество лесных участков;\n• География расположения участков;\n• Транспортная доступность полевых объектов;\n• Расположение ключевых заинтересованных сторон;\n• Степень подготовленности клиента к выполнению требований FSC и др.\nДля сертификации цепочки поставок (без контролируемой древесины) это:\n• Cхема сертификации (групповая, мульти-сайт, индивидуальная);\n• Область действия сертификата (продукция, площадки, объекты и др.);\n• Годовой оборот компании;\n• География и количество объектов для оценки (офисы, склады, производственные базы);\n• Наличие или отсутствие подрядчиков, которые требуют полевой оценки и др.\nДля сертификации цепочки поставок (с контролируемой древесиной). Все факторы, перечисленные выше для цепочки поставок, и дополнительно:\n• География и количество поставщиков контролируемой древесины;\n• Расположение ключевых заинтересованных сторон;\n• Степень подготовленности клиента и его поставщиков к выполнению требований FSC и др.\nСтоимость услуг органов по сертификации во многих случаях рассчитывается индивидуально. Нередко предоставляются скидки, в частности, при сертификации по нескольким схемам одновременно, или если сертифицируются два или более предприятий от одного собственника, или если сертифицируются одновременно лесоуправление и цепочка поставок.',reply_markup=keyboard6)
    elif (message.text == 'Сколько времени занимает получение сертификата?'):
        i = 4
        bot.send_message(message.chat.id,'Сроки зависят от множества факторов и всегда индивидуальны. По экспертным оценкам, срок получения сертификата лесоуправления (FM) составляет в среднем от 6 до 12 месяцев, в случае сертификата цепочки поставок (CoC) этот срок значительно меньше от 1 до 3 месяцев. Для получения сертификата цепочки поставок с контролируемой древесиной это время может составить в среднем от 3 до 6 месяцев.',reply_markup=keyboard6)
    #Сертификация (5)
    elif (message.text == 'Кто выдает сертификаты?'):
        i = 5
        bot.send_message(message.chat.id,'Выдают сертификаты специальные независимые органы по сертификации, которые аккредитованы международной организацией по аккредитации ASI (Assurance Services International). Для получения сертификата компании нужно заключить договор с органом по сертификации и пройти аудит на соответствие требованиям стандартов FSC. Данные органы подвергаются регулярному контролю со стороны ASI. Выбор органа по сертификации является важным и ответственным шагом, следует учитывать не только ценовую политику, но и деловую репутацию.',reply_markup=keyboard6)
    elif (message.text == 'С чего нам начать?'):
        i = 5
        bot.send_message(message.chat.id,'Для начала Вам необходимо определить вид сертификации и вид сертификата, которые необходимы вашей компании. Далее, вам нужно изучить необходимый стандарт (ссылка на сайт, где выложены стандарты) и привести систему управления на вашем предприятии в соответствие с ними. Далее свяжитесь с одним или с несколькими FSC аккредитованными органами по сертификации (ОС), работающими в России (контактные данные здесь). Чтобы оценить время, которое потребуется вам на подготовку к сертификации, и ее стоимость, ОС понадобятся некоторые основные сведения о вашей деятельности.',reply_markup=keyboard6)
    elif (message.text == 'В чем суть сертификации лесоуправления?'):
        i = 5
        bot.send_message(message.chat.id,'Сертификация лесоуправления - это вид сертификации для владеющих или управляющих лесами организаций, которые хотят, чтобы их лесоуправление соответствовало требованиям принципов и критериев FSC. Эти принципы адаптируются к конкретной стране в виде национальных стандартов. В России действует Национальный стандарт FSC. Соответственно, сертификат лесоуправления FSC в России может получить только та организация, чье лесоуправление соответствует требованиям Национального стандарта FSC.',reply_markup=keyboard6)
    elif (message.text == 'В чем суть сертификации цепочки поставок?'):
        i = 5
        bot.send_message(message.chat.id,'Сертификация цепочки поставок требуется производителям, переработчикам и продавцам FSC сертифицированной продукции. Сертификат цепочки поставок подтверждает, что продукция произведена именно из сырья, происходящего из лесов, где лесоуправление сертифицировано. Чтобы это требование соблюдалось, каждый участник цепочки поставок должен иметь такой сертификат. Только в этом случае конечный производитель сможет поставить логотип FSC на свою продукцию.',reply_markup=keyboard6)
    #
    else:
        bot.send_message(message.chat.id, 'Я не знаю что ответить :(')
        
        
bot.polling(none_stop=True, timeout=50000)
