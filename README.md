# Cola Front

## Setup

### Install the required dependencies as usual

``` bash
$ yarn
```

### Sanity json file
Ensure `./sanity.json` is updated from [Github](https://github.com/ColabraHQ/colabra-cms)

### Add configuration
Create a .env file in the project's root with the following keys

``` env
GTM_ID= /* Google Tag Manager ID */
BASE_URL= /* http://localhost:3000 || http://colabra.ai */
```


## Running Project
### To launch the development server

``` bash
$ yarn dev
```

### Building project (Static site generation)

```
$ yarn generate
```

then

```
$ yarn start
```
