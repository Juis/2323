# Product Management

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the command to install the blueprint

```bash
npm install
```

## Run

Use the command to run the blueprint

```bash
npm start
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## APIs

### Address: **`localhost:3333`**


### `POST /auth/login`: Auth Login
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/login' \
  -H "Content-Type: application/json" \
  --data '{
    "email": "user@email.com",
    "password": "4S3cr3tPa55w0rd"
  }'
```

  - Request body:
  ```
  {
     "email": string,
     "password": string       
  }
  ```

### `POST /auth/logout`: Auth Logout
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/logout' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "refreshToken": "bea8e70d5989b37cc2e5d53bae79f310gKAwe/SafTyOo8uVy8XgKUr76opzpS4I8KTAaUOoi/0LLNmctSVUEG8kqBi6mED7"
  }'
```

  - Request body:
  ```
  {
     "refreshToken": string      
  }
  ```
  
### `POST /auth/confirm/:token`: Auth Confirm
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/confirm/bea8e70d5989b37cc2e5d53bae79f310gKAwe/SafTyOo8uVy8XgKUr76opzpS4I8KTAaUOoi/0LLNmctSVUEG8kqBi6mED7' \
  -H "Content-Type: application/json" \
```

  - Request path:
  ```
  {
     "token": string      
  }
  ```
  
### `POST /auth/register`: Auth Register
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/register' \
  -H "Content-Type: application/json" \
  --data '{
    "name": "luiz",
    "email": "email@gmail.com",
    "password": "12345s7"
  }'
```

  - Request body:
  ```
  {
     "name": string,
     "email": string,
     "password": string 
  }
  ```
  
### `GET /auth/profile`: Auth Profile
```bash
curl -X GET -i 'http://127.0.0.1:3333/auth/profile' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```

### `POST /users`: User Register
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/users' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "name": "luiz",
    "email": "email@gmail.com",
    "password": "12345s7"
  }'
```

  - Request body:
  ```
  {
     "name": string,
     "email": string,
     "password": string 
  }
  ```
  
### `GET /users`: Users
```bash
curl -X GET -i 'http://127.0.0.1:3333/auth/users' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```

### `GET /users/:id`: User Find One
```bash
curl -X GET -i 'http://127.0.0.1:3333/auth/users/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```

  - Request path:
  ```
  {
     "id": integer
  }
  ```
  
### `PUT /users/:id`: User Update
```bash
curl -X PUT -i 'http://127.0.0.1:3333/auth/users/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "name": "luiz",
    "email": "email@gmail.com",
    "password": "12345s7"
  }'
```
  - Request path:
  ```
  {
     "id": integer
  }
  ```
  - Request body:
  ```
  {
     "name": string
  }
  ```
  
### `DELETE /users/:id`: User Delete
```bash
curl -X DELETE -i 'http://127.0.0.1:3333/auth/users/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```
  - Request path:
  ```
  {
     "id": integer
  }
  ```
  
### `POST /products`: Products Register
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/products' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "name": "Bol",
    "description": "Pump",
    "price": 20.1,
    "published_at": "2020-04-10"
  }'
```

  - Request body:
  ```
  {
     "name": string,
     "description": string,
     "price": double,
     "published_at": date  
  }
  ```

### `GET /products`: Products
```bash
curl -X GET -i 'http://127.0.0.1:3333/auth/products' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```

### `GET /products/:id`: Products Find One
```bash
curl -X GET -i 'http://127.0.0.1:3333/auth/products/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```

  - Request path:
  ```
  {
     "id": integer
  }
  ```
  
### `PUT /products/:id`: Products Update
```bash
curl -X PUT -i 'http://127.0.0.1:3333/auth/products/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "name": "Bol Pump",
    "description": "Pumped",
    "price": 23.43,
    "published_at": "2021-04-10"
  }'
```
  - Request path:
  ```
  {
     "id": integer 
  }
  ```
  
  - Request body:
  ```
  {
     "name": string,
     "description": string,
     "price": double,
     "published_at": date  
  }
  ```
  
### `DELETE /products/:id`: Products Delete
```bash
curl -X DELETE -i 'http://127.0.0.1:3333/auth/products/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
```
  - Request path:
  ```
  {
     "id": integer 
  }
  ```
  
### `POST /upload/:type/:id`: Upload
```bash
curl -X POST -i 'http://127.0.0.1:3333/auth/upload/product/1' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "images": [file1.jpg, file2.jpg]
  }'
```

  - Request body:
  ```
  {
     "images": array
  }
  ```

### `PUT /upload/`: Upload Update
```bash
curl -X PUT -i 'http://127.0.0.1:3333/auth/upload/' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "keys": [
      "1s.perk6cje3o-2weq.jpg",
      "2s.per36cje3o-asdw.jpg"
    ], 
    "type": "update"
  }'
  ```

  - Request body:
  ```
  {
     "keys": array,
     "type": string
  }
  ```
  
### `DELETE /upload/`: Upload Delete
```bash
curl -X DELETE -i 'http://127.0.0.1:3333/auth/upload/' \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxODE3ODE0N30.UCwQFTzVFkneiUBL_haV2eaml7ey7vEa0g6OP-sddxI" \
  
  --data '{
    "keys": [
      "1s.perk6cje3o-2weq.jpg",
      "2s.per36cje3o-asdw.jpg"
    ], 
    "type": "delete"
  }'
  ```

  - Request body:
  ```
  {
     "keys": array,
     "type": string
  }
  ```
