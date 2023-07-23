# Practical Task for BE Node.js Engineer by FRT team
The task is quite simple, you need to build a simple service which will fetch concert tickets from a website and return them to user through a HTTP call

<p>
    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/>
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="nodejs" width="50" height="50"/>
    </a>
</p>


Installation
------------
Install [NODE JS] to be able to start a project

To install all packages
```
$ npm install
```

Starting
------------
To start a project
```
$ npm start
```
To start a testing
```
$ npm run wdio
```
To build a project
```
$ npm run build
```
To start a project in dev mode
```
$ npm run dev
```

Working
------------
API supports a single HTTP endpoint which accepts the ID of the event and returns list of tickets that are available for that event
```
http://localhost:5000/api/tickets/${ID}
```
Also app can be queries through GraphQL endpoint to fetch available tickets for specific event ID.
```
http://localhost:5000/graphql
```

