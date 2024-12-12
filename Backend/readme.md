## Register User
Register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
    "fullname": {
        "firstname": "string", // Required, min 3 characters
        "lastname": "string"   // Optional, min 3 characters if provided
    },
    "email": "string",    // Required, valid email format
    "password": "string"  // Required, min 6 characters
}
```

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Response

#### Success Response (201 Created)
```json
{
    "message": "User created successfully",
    "user": {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "socketId": "string"
    },
    "token": "string" // JWT authentication token
}
```

#### Error Responses

##### Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        }
    ]
}
```

### Validation Rules
- **firstname**: Minimum 3 characters, required
- **lastname**: Minimum 3 characters (if provided)
- **email**: Must be valid email format, required, unique
- **password**: Minimum 6 characters, required

### Notes
- The password is automatically hashed before storage
- A JWT token is generated and returned upon successful registration
- Email must be unique in the system
- The response will not include the password field
```

## Login User
Login a user in the system.

### Endpoint
```
POST /users/login
```
json
{
"email": "string", // Required, valid email format
"password": "string" // Required, min 6 characters
}
json
{
"email": "john.doe@example.com",
"password": "password123"
}
json
{
"message": "Login successful",
"user": {
"id": "string",
"fullname": {
"firstname": "string",
"lastname": "string"
},
"email": "string",
"socketId": "string"
},
"token": "string" // JWT authentication token
}
json
{
"errors": [
{
"msg": "Invalid email address",
"param": "email",
"location": "body"
}
]
}
json
{
"message": "Invalid email or password"
}

