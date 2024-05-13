FROM node:16 as builder

WORKDIR /home/node/app 
# THIS IS STILL JUST A TEMPLATE FROM OLD PROJECT

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

RUN npm run build

FROM node:16 as runner

RUN groupmod -g 1003 node && usermod -u 1002 -g 1003 node
USER node
WORKDIR /home/node/app

COPY package.json ./

RUN npm install --only=production

COPY --from=builder /home/node/app/dist ./dist

# Start
CMD [ "npm", "run", "prod" ]