#!/bin/zsh
git reset --hard origin/master
git pull origin master
yarn install
pm2 restart server
