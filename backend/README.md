# Запуск приватной сети Ethereum

## установите зависимости 

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
npm install -g n
n lts
```
---

## Cтруктура сети для навигации
```
├── testnet
│   ├── config.json
│   ├── contract
│   │   ├── compile.py
│   │   ├── contract.sol
│   │   ├── deploy.py
│   │   └── miner.py
│   └── test
│       ├── bnode
│       ├── bnode.log
│       ├── bnode.py
│       ├── boot.key
│       ├── geth
│       ├── keystore
│       ├── node1
│       ├── node1.py
│       ├── node2
│       ├── node2.py
│       ├── start.sh <--
│       └── test.json

```

---
## Запуск сети:

### Linux:
Для запуска сети на Linux перейдите в каталог **/flask_post/testnet/test** <br> 
Запустите файл start.sh командой
```
./start.sh
```
