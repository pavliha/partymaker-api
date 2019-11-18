#!/bin/zsh

echo 'Fetching new changes'
git reset --hard origin/master
git pull origin master

echo 'Install dependencies'
yarn install

echo 'Copy new nginx config'
sudo cp ./config.nginx /etc/nginx/sites-available/api.partymaker.zp.ua

echo 'Restart nginx service'
sudo service nginx restart

echo 'Restart pm2'
/home/dev/.npm-global/bin/pm2 restart server.js
