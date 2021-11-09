# README

The solution consists of a simple API only Rails application, that exposes the venue details at GET api/best_seats.
The venue configuration is stored as a JSON file (1.json) in the test/controllers/data directory for the purpose of this solution

The UI is implemented using React.

This application has been deployed to Heroku:  https://best-available-seats.herokuapp.com/

## Run

```
$ yarn install
```

```
$ bundle install
```

```
# start the rails application.
$ rails s
```

## Test

```
$ rails t
```

To change venue information edit [this files](test/controllers/data/)
