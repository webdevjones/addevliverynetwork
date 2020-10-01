FROM node

RUN mkdir -p /server/
WORKDIR /server/

COPY ./package.json /server/

RUN npm i

COPY . /server/

# EXPOSE 3000

CMD ["npm", "run", "start"]