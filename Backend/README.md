# User Registration API Documentation

## Endpoint

`POST /users/register`

---

## Description

Registers a new user by accepting their first name, last name (optional), email, and password. Returns a JWT token and the created user object upon success.

---

## Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",      // Required, minimum 3 characters
    "lastname": "Doe"         // Optional, minimum 3 characters if provided
  },
  "email": "john@example.com", // Required, must be a valid email
  "password": "secret123"      // Required, minimum 6 characters
}
```

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com"
        // ...other user fields
      }
    }
    ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
    ```json
    {
      "error": "All fields are required"
    }
    ```

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

---

## Notes

- The `email` must be unique.
- The `password` is securely hashed before storage.
- The returned `token` can be used for authenticated requests.

---

# User Login API Documentation

## Endpoint

`POST /users/login`

---

## Description

Authenticates an existing user using their email and password. Returns a JWT token and the user object upon successful login.

---

## Request Body

Send a JSON object in the following format:

```json
{
  "email": "john@example.com", // Required, must be a valid email
  "password": "secret123"      // Required, minimum 6 characters
}
```

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john@example.com"
        // ...other user fields
      }
    }
    ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
    ```json
    {
      "error": "All fields are required"
    }
    ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "error": "Invalid email or password"
    }
    ```

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

---

## Notes

- The `email` and `password` must match an existing user.
- The returned `token` can be used for authenticated requests.

---

# User Profile API Documentation

## Endpoint

`GET /users/profile`

---

## Description

Retrieves the authenticated user's profile information. Requires a valid JWT token in the `Authorization` header or as a cookie.

---

## Request

- **Headers:**  
  - `Authorization: Bearer <jwt_token>`  
  or  
  - Cookie: `token=<jwt_token>`

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john@example.com"
      // ...other user fields
    }
    ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "error": "Access denied. No token provided"
    }
    ```
    or
    ```json
    {
      "error": "Unauthorized. Token has been logged out"
    }
    ```
    or
    ```json
    {
      "error": "Unauthorized. Invalid token"
    }
    ```

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

---

# User Logout API Documentation

## Endpoint

`GET /users/logout`

---

## Description

Logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie. Requires a valid JWT token in the `Authorization` header or as a cookie.

---

## Request

- **Headers:**  
  - `Authorization: Bearer <jwt_token>`  
  or  
  - Cookie: `token=<jwt_token>`

---

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
    ```json
    {
      "error": "Access denied. No token provided"
    }
    ```
    or
    ```json
    {
      "error": "Unauthorized. Token has been logged out"
    }
    ```
    or
    ```json
    {
      "error": "Unauthorized. Invalid token"
    }
    ```

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

---

## Notes

- After logout, the token is blacklisted and cannot be used again.
- The authentication cookie is cleared on logout.

