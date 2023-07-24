FROM node:16.17-alpine
WORKDIR /var/www/html/frontend
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run","dev"]
