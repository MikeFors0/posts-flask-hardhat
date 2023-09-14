#! /usr/bin/sh

set -eu

clear;
echo "-------------------"
echo "Clean artifacts..."
echo "-------------------"
npx hardhat clean


sleep 2;
gnome-terminal -e "bash -c \"npx hardhat node; exec bash\""

echo "-------------------"
echo "Compile ..."
echo "-------------------"
sleep 3;
npx hardhat compile

echo "-------------------"
echo "Deploy contract ..."
echo "-------------------"
sleep 3;
npx hardhat run --network localhost scripts/deploy.js

echo "-------------------"
echo "Сеть запущенна и готова к работе"
echo "-------------------"


echo "Start frontend server"
gnome-terminal -e "bash -c \"python3 ../frontend/main.py; exec bash\""
sleep 2;
xdg-open http://127.0.0.1:5555