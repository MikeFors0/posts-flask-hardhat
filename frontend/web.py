from web3 import Web3
import json

config = json.load(open('artifacts/contracts/contract.sol/MyContract.json'))
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))
contract = w3.eth.contract(address=config["address"], abi=config["abi"])

# проверка на подключение
if w3.is_connected():
    print("connecteon")
else:
    print("disconnecnt")

# print(contract.all_functions())


# разблакировка аккаунта и ключа
def unlock(acc, key):
    account = w3.toChecksumAddress(acc)
    w3.eth.default_account = account
    w3.geth.personal.unlock_account(acc, key, 10)


# функция просмотра всех постов
def View():
    try:
        res = contract.functions.veiwAllPosts().call()
        return res
    except Exception as e:
        return str(e)


# функция просмотра постов по их id
def ViewID(index):
    try:
        res = contract.functions.viewUserPost(index).call()
        return res
    except Exception as e:
        return str(e)


# функция создания поста
def createNewPost(label, message, key):
    try:
        unlock(w3.eth.accounts[0], key)
        res = contract.functions.createNewPost(label, message).transact()
        return res
    except Exception as e:
        return str(e)


# функция удаления поста
def removePost(index, key):
    try:
        unlock(w3.eth.accounts[0], key)
        res = contract.functions.removePost(index).transact()
        return res
    except Exception as e:
        return str(e)


# функция изменения поста
def changePostData(index, label, message, key):
    try:
        unlock(w3.eth.accounts[0], key)
        res = contract.functions.changePostData(index, label, message).transact()
        return res
    except Exception as e:
        return str(e)


# функция авторизации пользователя
def authorization(acc, key, name):
    try:
        w3.eth.default_account = w3.toChecksumAddress(acc)
        res = contract.functions.authorization(name).call()
        return res
    except Exception as e:
        return str(e)


# функция регистрации пользователя
def registration(acc, key, name):
    try:
        unlock(acc, key)
        res = contract.functions.registration(name).transact()
        return res
    except Exception as e:
        return str(e)