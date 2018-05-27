## Utopian Roles

A minimalistic backend for Utopian Admin Panel.

## Install

- Clone the repository
- Install all dependencies using `npm install`
- Create a `.env` file and put `MONGO_HOST=<your mongo host here>`
- Run using `npm start`

##### DB Name - userSchema

#### Schema - {name: String, roles: [String]}

## Features

You have to put user using mongo shell and add documents to userSchema collection of utopian-io DB.

It has route to get roles of a user.

Go to route -
```
localhost:3000/roles/:name
```

## Contributor
ms10398

## License

MIT
