# Kadath

Kadath is an interactive role-playing game based on the Lovecraft universe.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If we're using an online database, we will need to replace the environment database configuration settings with our database URL.

Create a `.env` file in the root directory of your project. 
Add environment-specific variables on new lines :
```
DATABASE_URL=<dialect>://<username>:<password>@<host>:<port>/<database>
```

If we're using `passport` and `GoogleStrategy` we will need to configure API keys. 
Create a `config/dev.js` file in the root directory of your project. Add keys variables, for example :
```
module.exports = {
    googleClientID: 'yourGoogleID',
    googleClientSecret : 'yourGoogleSecret'
    cookieKey: 'acookiekey'
};
``` 
To find your ID and secret, visit this page :[Google Cloud Platform](https://console.cloud.google.com/projectselector/home/dashboard)
### Installing

soon

You can install the `sequelize-cli` package in your local by using -g (--global) instead of the -D (equivalent to using --save-dev).
If not, you'll need to prefix every call to the `sequelize` command with `./node_modules/.bin`.

## Deployment

soon

## Built With

soon

## Authors

* **Sarah Touati** - *Initial work* - [Finistelle](https://github.com/Finistelle)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
