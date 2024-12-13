FROM node:18

RUN npm install -g pnpm

RUN mkdir -p /usr/src/twilio-token-generator && chown -R node:node /usr/src/twilio-token-generator
WORKDIR /usr/src/twilio-token-generator

USER node

# COPY package.json pnpm-lock.yaml .env ./
COPY --chown=node:node . .

# RUN pnpm install && pnpm build
RUN pnpm install && pnpm run build

EXPOSE 3000
