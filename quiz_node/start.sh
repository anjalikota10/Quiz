#!/bin/bash

# Kill any process already using port 3000
fuser -k 3000/tcp

# Load NVM and use Node v20.19.4
export NVM_DIR="/root/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20.19.4

echo "[START] $(date '+%Y-%m-%d %H:%M:%S') - Starting Quiz Node Backend..."

cd /var/www/html/Quiz/quiz_node 
node app.js

