# fluxstay-desktop

QuickStay Desktop API documentation.

use the logging below

<span style="color: yellow">POST</span>

http://46.101.99.101/users/sign_in

the request body

```
{
  "user": {
    "email": "demouser@example.com",
    "password": "password"
  }
}
```

<h2 style="color: green">Successful Response</h2>

```
{
    "status": {
        "code": 200,
        "message": "Signed in successfully"
    },
    "data": {
        "id": 2,
        "email": "demouser@example.com",
        "created_at": "2023-06-20T21:15:23.388Z",
        "updated_at": "2023-06-20T21:35:40.535Z",
        "jti": "7d9fbdee-ae51-401c-82e1-5458ad700037",
        "first_name": "demo",
        "last_name": "user",
        "other_name": null,
        "address": null,
        "phone_number": null,
        "zip_code": null,
        "user_unique_id": "CD7F4839",
        "gender": null,
        "date_of_birth": null,
        "avatar_url": null
    }
}
```

<span style="color: red;">DELETE</span>

http://46.101.99.101/users/sign_out

`You need to get the Authorization token to be able to sign_out user from the system`

[{"key":"Authorization","value":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMGZkOGZjYy1iMTQyLTQ3NDQtODk2NC04YmMxNzNlMDA1ZmUiLCJzdWIiOiIyIiwic2NwIjoiYWNjb3VudCIsImF1ZCI6bnVsbCwiaWF0IjoxNjg3MjYwMDA3LCJleHAiOjE2ODcyNjcyMDd9.bdc2l4d3hpz7VJHrodXe8mzZYmO9w2Un42VOyTXlhFw","description":"","type":"default","enabled":true}]

thats how it looks above

<h2 style="color: green">Successful Response</h2>

```
{
    "status": 401,
    "message": "Signature has expired"
}
```

<h1>thats the basic sign in - sign out deatails above. </h1>

others comming soon...
