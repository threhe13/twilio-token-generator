FROM node:alpine

RUN npm install -g pnpm

RUN mkdir -p /usr/src/twilio-token-generator && chown -R node:node /usr/src/twilio-token-generator
WORKDIR /usr/src/twilio-token-generator

# COPY package.json pnpm-lock.yaml .env ./
COPY --chown=node:node . .

USER node

RUN pnpm install && pnpm build

EXPOSE 3000