# Запуск приватной сети Ethereum

## установите зависимости 

```
sudo apt update
sudo apt install nodejs
sudo npm install -g n
sudo n lts
<!-- В папке backend -->
sudo npm i 
```
---

## Cтруктура сети для навигации
```
├── artifacts
├── build-info
│   ├── 00Tree.html
│   └── bc3a4e7a5721f2021f5f7e8e5a02c017.json
└── contracts
│    ├── 00Tree.html
│    └── contract.sol
│       ├── 00Tree.html
│       ├── MyContract.dbg.json
│       └── MyContract.json
├── cache
├── contracts
│   └── contract.sol
├── hardhat.config.js
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── scripts
└── start.sh


```

## Cтруктура фронт-части для навигации
```
├── main.py
├── __pycache__
│   └── web.cpython-310.pyc
├── static
│   ├── script.js
│   └── style.css
├── templates
│   ├── base.html
│   ├── create.html
│   ├── delete.html
│   ├── edit.html
│   ├── help.html
│   ├── index.html
│   ├── lk.html
│   ├── login.html
│   ├── post.html
│   └── reg.html
└── web.py


```


-------------------------------------------------------------------------------------

# Запуск и установка Frontend interface




## установите зависимости 

```
sudo apt-get install pip
sudo pip install flask
sudo pip install web3
```
---

## Cтруктура сети для навигации
```
├── FLASK-POST
│   ├── devnetPOW
│   ├── static
│   │   ├── script.js
│   │   └── style.css
│   ├── templates
│   │     ├── base.html
│   │     ├── create.html
│   │     ├── delete.html
│   │     ├── edit.html
│   │     ├── help.html
│   │     ├── index.html
│   │     ├── lk.html
│   │     ├── login.html
│   │     ├── post.html
│   │     └── reg.html
│   ├── config.json
│   ├── main.py
│   ├── README.md
│   ├── networkStart.sh
│   ├── start.bat
│   └── web.py


```

---
## Запуск web-приложения:

### Linux:
Для запуска web-приложения на Linux должен быть pip(менеджер пакетов) и библиотеки flask и web3, как установить библиотеки указано выше. 


-----------------------------------------------------------


## Запуск сети:

### Linux:
Для запуска сети на Linux перейдите в каталог **/flask_post/** <br> 
Запустите файл networkStart.sh командой
```
bash networkStart.sh
```
Открыть браузер и перейти на ссылку http://127.0.0.1:5555
----

## То что у вас должно быть
1. Вы должны пользоваться браузером "FireFox"
2. У вас должно быть установленно расширение в браузере "FireFox" - 'metamsk' ; 
3. ссылка для скачивания расширения https://addons.mozilla.org/ru/firefox/addon/ether-metamask/
4. Пройдите авторизацию на метамаске создав кошелек
5. Запомните секретную фразу и введите ее после для подтверждения
6. дальше вы должны создать локальный кошелек(сеть)
Данные для создания локальной сети:
Имя сети: Blockchain;
Новый URL-адрес RPC: http://127.0.0.1:8547;
ID-цепочки: 999;
Символ валюты: ETH;

Для запуска metamsk в 'footer' нажмите кнопку 'ETH metamsk connect'

----



## Использования web-приложения

# Главная страница ("/")
Отоброжает все посты

# Страница Авторизациии('/login')
авторизирует пользователя

# Страница регистрации('/reg')
регистрирует новых пользователей

# Страница помощи('/help')
пользоватль может узнать нужную ему информацию по web-приложению

# Страница личного кабинета('/lk')
пользователь может посмотреть его персональные данные

# Страница просмотр поста отдельно('/post')
пользователь может перейти на страницу с потом и полностью его просмотреть

# Страница удаления поста('/delete')
пользователь может удалить пост

# Страница изменения поста('/edit')
пользователь может изменить пост

# Страница создания поста('/create')
пользователь может создать пост

# Выход пользователя из учетнной записи('/logout')
Выход пользователя из учетнной записи

