# Secure Authentication API with Supabase Auth

> Week 2 Assignment A4 - FlyRank Backend Track

A secure REST API built with Express.js and Supabase Auth, featuring user authentication, JWT verification, protected routes, and Swagger UI documentation.

## Project Overview

This project implements a complete authentication system using Supabase Auth for user management and JWT tokens for secure API access. The API includes signup, login, logout, protected routes, and comprehensive Swagger documentation.

This is a FlyRank Backend Track Week 2 Assignment A4 project demonstrating secure API development practices.

## Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web framework for Node.js
- **Supabase Auth** - Authentication service
- **JWT** - JSON Web Tokens for secure authentication
- **Swagger/OpenAPI** - API documentation
- **Git/GitHub** - Version control

## Features

- ✅ User signup with email/password
- ✅ User login with JWT token generation
- ✅ User logout
- ✅ JWT token verification with Supabase
- ✅ Protected routes with authentication middleware
- ✅ Public routes without authentication
- ✅ Reusable authentication middleware
- ✅ Swagger UI documentation with Bearer authentication
- ✅ Proper HTTP status codes
- ✅ Environment variable configuration
- ✅ Secure credential management

## Project Structure

```
api/
├── src/
│   ├── server.js              # Main application entry point
│   ├── config/
│   │   └── supabase.js        # Supabase client configuration
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication middleware
│   ├── routes/
│   │   ├── auth.js            # Authentication routes (signup, login, logout)
│   │   ├── protected.js      # Protected routes requiring authentication
│   │   └── public.js          # Public routes
│   └── swagger/
│       └── openapi.json       # OpenAPI specification
├── .env                       # Environment variables (not committed)
├── .env.example               # Environment variable template
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
```bash
git clone YOUR_REPOSITORY_URL
cd api
```

2. Install dependencies:
```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root with your Supabase credentials:

```env
SUPABASE_URL=your_project_url
SUPABASE_KEY=your_anon_key
PORT=3000
```

To get your Supabase credentials:
1. Go to [supabase.com](https://supabase.com)
2. Create a new project or select an existing one
3. Navigate to Project Settings → API
4. Copy your Project URL and anon/public API key

⚠️ **Important**: Never commit your `.env` file or share your Supabase secrets.

## Running the Server

Start the server:
```bash
npm start
```

The server will start on port 3000 (or the port specified in your `.env` file).

## API Reference

| Method | Endpoint | Auth Required | Purpose |
|--------|----------|---------------|---------|
| POST | `/auth/signup` | No | Create account |
| POST | `/auth/login` | No | Login |
| POST | `/auth/logout` | Yes | Logout |
| GET | `/protected/profile` | Yes | User profile |
| GET | `/protected/dashboard` | Yes | Protected dashboard |
| GET | `/public/info` | No | Public information |

## Status Codes

- `200` - OK: Request successful
- `201` - Created: Resource created successfully
- `204` - No Content: Successful request with no response body
- `400` - Bad Request: Invalid request data
- `401` - Unauthorized: Missing or invalid authentication
- `404` - Not Found: Resource not found
- `500` - Internal Server Error: Server error

## Swagger Documentation

Access the interactive API documentation at:
```
http://localhost:3000/docs
```

The Swagger UI includes:
- Complete API endpoint documentation
- Request/response schemas
- Bearer authentication configuration
- Interactive testing interface

To test protected endpoints in Swagger:
1. Click the "Authorize" button
2. Enter your JWT token (format: `Bearer YOUR_TOKEN`)
3. Close the authorization dialog
4. Execute protected requests

## Testing with cURL

### Public endpoint (no authentication required)
```bash
curl -i http://localhost:3000/public/info
```

Expected response: `200 OK` with public message

### Protected endpoint without token (should fail)
```bash
curl -i http://localhost:3000/protected/profile
```

Expected response: `401 Unauthorized`

### Signup
```bash
curl -i -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

Expected response: `201 Created` with user information

### Login
```bash
curl -i -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

Expected response: `200 OK` with `access_token` and `refresh_token`

### Protected endpoint with valid token
```bash
curl -i http://localhost:3000/protected/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

Expected response: `200 OK` with user profile

### Protected endpoint with tampered token (should fail)
```bash
curl -i http://localhost:3000/protected/profile \
  -H "Authorization: Bearer TAMPERED_TOKEN"
```

Expected response: `401 Unauthorized`

### Logout
```bash
curl -i -X POST http://localhost:3000/auth/logout \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

Expected response: `204 No Content`

## Security Notes

- ✅ Passwords are never stored locally - Supabase handles password hashing
- ✅ JWT tokens are verified with Supabase on each request
- ✅ Environment variables are used for sensitive data
- ✅ `.env` file is excluded from Git
- ✅ No service_role keys are used
- ✅ No secrets are exposed in error messages
- ✅ Proper HTTP status codes are used for different scenarios

## Supabase Configuration

For development, ensure your Supabase project has:
- Email/password authentication enabled
- Email confirmation disabled (for immediate testing)
- Proper CORS settings for your development domain

To disable email confirmation in Supabase:
1. Go to your Supabase project dashboard
2. Navigate to Authentication → Providers
3. Edit the Email provider
4. Disable "Confirm email"

## Development

The project uses `nodemon` for development (automatically restarts on file changes):

```bash
npm run dev
```

## License

ISC

## Author

FlyRank Backend Track - Week 2 Assignment A4