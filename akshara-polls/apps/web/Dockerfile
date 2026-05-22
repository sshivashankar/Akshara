FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm i -g pnpm && pnpm i
COPY . .
RUN pnpm build
CMD ["pnpm","start"]
