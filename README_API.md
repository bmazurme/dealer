### API
#### SignUp
##### METHOD - POST

http://localhost:3000/api/signup
```
{
    "firstName": "firstName",
    "secondName": "secondName",
    "login": "login",
    "avatar":"http://localhost.com",
    "email": "s@s.com",
    "phone": "01234567890",
    "password":"password"
}
```
```
{
    "_id": "637906fc2cbb6d3888854837",
    "firstName": "firstName",
    "secondName": "secondName",
    "login": "login",
    "email": "s@s.com",
    "phone": "01234567890",
    "avatar": "http://localhost.com"
}
```


#### SignIn
##### METHOD - POST

http://localhost:3000/api/signin

```
{
    "email": "s@s.com",
    "password":"password"
}
```
```
{
    "token": "token"
}
```

#### SignOut

#### Get current user
##### METHOD - GET
http://localhost:3000/api/users/me

```
{
    "_id": "637906fc2cbb6d3888854837",
    "firstName": "firstName",
    "secondName": "secondName",
    "login": "login",
    "email": "s@s.com",
    "phone": "01234567890",
    "avatar": "http://localhost.com",
    "status": "Active",
    "roles": [],
    "__v": 0
}
```
