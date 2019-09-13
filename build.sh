#!/bin/zsh
git reset --hard origin/master
git pull origin master
yarn install
/home/dev/.npm-global/bin/pm2 restart server
