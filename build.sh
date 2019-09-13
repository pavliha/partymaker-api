#!/bin/bash
git reset --hard origin/master
git pull origin master
/home/dev/.npm-global/bin/pm2 restart server
