# Vhost

Middleware for Dylan which enables virtual domain hosting.

## Install

`npm install @dylan/vhost`

## Usage

``` js
const dylan = require('dylan');
const www = dylan().createServer();
const admin = dylan().createServer();
const vhost = require('@dylan/vhost');
app.use(vhost({
  'www.foo.com': www,
  'admin.foo.com': admin
}));
```
