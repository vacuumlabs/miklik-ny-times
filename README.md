# NY Times most popular articles

This apps show most viewed popular articles from NY Times.

### First time installation

Install all dependencies

```
yarn install
```

### Development

To start application in development mode:

```
yarn start
```

Running tests:

```
yarn test 
# or alternatively for CI/coverage
CI=true yarn test --coverage
```

### Building

Update NY times API key as needed in `index.html`

```
yarn build
```

And deploy the directory `build/` to your favourite web server.

## Possible improvements

- Injection of API key (build / server time)
- Routing as application will grow
- Polyfills (e.g. fetch)
- I18n