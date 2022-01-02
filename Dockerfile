FROM buildkite/puppeteer:latest

RUN apt update

WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 5000
