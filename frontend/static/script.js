const text = document.getElementById('text')
const butt = document.getElementById('send')

let messages = ""

function send() {
    if (text.value == "") {
        messages += "<p class='msg'>" + "Ты хочешь отправить ничего?)" +"</p>"
        document.getElementById('chat').innerHTML = messages
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "/help") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Как авторизироваться?" + "<br>" + "Как зарегистрироваться?" + "<br>" + "Как просмотреть посты?" + "<br>" + "Как удалить пост?" + "<br>" + "Как изменить пост?" + "<br>" + "Как создать пост ?" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Привет") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Привет, напишите чем я могу вам помочь!" +"</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как авторизироваться?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Перейдите по иконке Login или по ссылке http://127.0.0.1:5555/login" +"</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как зарегистрироваться?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Перейдите по иконке Registred или по ссылке http://127.0.0.1:5000/reg" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как просмотреть посты?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Перейдите по иконке PostBlog или по ссылке http://127.0.0.1:5000/" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как удалить пост?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Перейдите по иконке PostBlog и нажмите на на иконку 'Delete', и введите данные" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как изменить пост?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Перейдите по иконке PostBlog и нажмите на на иконку 'Edit', и введите данные" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Как создать пост ?") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "авторизируйтесь в личном кабинете, затем перейдите по иконке 'New Post', и введите информацию для поста" + "</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
    else if (text.value == "Спасибо вам за помощь") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Рад был помочь, хорошего дня!" +"</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
        else if (text.value == "Спасибо вам за помощь") {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Рад был помочь, хорошего дня!" +"</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
     else {
        messages += "<p class='my msg'>" + text.value +"</p>"
        messages += "<p class='msg'>" + "Я вас не понимаю!" +"</p>"
        document.getElementById('chat').innerHTML = messages
        text.value = ""
        document.getElementById('chat').lastChild.scrollIntoView();
        return
    }
};

butt.onclick = send;
