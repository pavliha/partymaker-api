#!/bin/bash
git reset --hard origin/master
git pull origin master
pm2 restart server
