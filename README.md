# powmemes.com

Ranking The World's Memes Using Bitcoin Hashpower

## Installation

While hosted all at powmemes.com this system is composed of several open source components.

All of the components shall be available to run using a single docker-compose.yml file

```
docker-compose up typescript-server
docker-compose up typescript-webapp
```

or start all the services at once

```
docker-compose up
```

### Typescript Server

The typescript server relies on postgres for storing Memes and related meme boost transaction data. It also optionally employs rabbitmq messaging server for real time communication between system components, enabling features such as built-in websockets streams.  

### Typescript SDK

Bot the Server and Webapp and CLI shall rely on typings and core classes and functions exported from the typescript sdk,
which shall use webpack for compatibility across front end and back end.

### Typescript Webapp

The front end web site is built with React, Nextjs, and Typescript.

