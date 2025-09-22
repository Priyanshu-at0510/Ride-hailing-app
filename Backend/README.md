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

