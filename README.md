# Ng4StompDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)
 version 1.0.0 and Angular4 (version 4.0.0) to act as a sample for 
 [@stomp/ng2-stompjs](https://github.com/stomp-js/ng2-stompjs).

## Setup

Install dependencies:

```bash
$ npm install
```
or, if using yarn

```bash
$ yarn
```

Configure details for your Stomp Broker by editing
 `src/app/services/config/config.service.ts`

The configuration should work as is for a RabbitMQ instance
 running on localhost with default settings and Web STOMP 
 plugin activated.
 (see: https://www.rabbitmq.com/web-stomp.html).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Where Next

Check the following files:

- src/app/app.module.ts - Configuration and service provisions for
  StompService using 
  [Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html).
- src/app/components/rawdata/rawdata.component.ts - subscribing / unsubscribing a queue and
  publishing messages.
- src/app/components/status/status.component.ts - monitoring status of Stomp connection.

## Contributors

- [Sam Finnigan](https://github.com/sjmf)
- [Jimi (Dimitris) Charalampidis](https://github.com/JimiC)
- [Deepak Kumar](https://github.com/kum-deepak)

## License

MIT
