# Google Drive Integration Demo

A React application that integrates with Google Drive, allowing users to manage their files through a clean and intuitive interface.

## Project Overview

This application provides a simple interface for users to:
- Upload files to Google Drive
- Download files from Google Drive
- Delete files from Google Drive
- View their Google Drive files

The project uses [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) and implements Google OAuth 2.0 for authentication.

## Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [yarn](https://yarnpkg.com/)
- A Google Cloud Platform account with Google Drive API enabled

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:charlie-baba/google-drive-client.git
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the project root:

```
REACT_APP_API_BASE_URL=http://localhost:3000
```

4. In the project directory, run:

```bash
yarn start
```

## Available Scripts

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

```
src/
├── components/
│   ├── auth/            # Authentication components
│   │   ├── AuthError.tsx
|   |   ├── AuthSuccessHandler.tsx
│   │   ├── Login.tsx
│   │   └── LogoutButton.tsx
│   ├── drive/          # Drive components
│   │   └── DriveFiles.tsx
│   └── common/         # Shared components
│       └── NavBar.tsx
├── services/
│   ├── authService.ts   # Authentication logic
│   └── driveService.ts  # Drive operations
└── App.tsx             # Main component
```

## Required API Endpoints

The application expects the following backend API endpoints:

### Authentication Endpoints

- `GET /api/auth/login/google` - Returns Google OAuth URL
- `GET /api/auth/check` - Validates JWT token
- `POST /api/auth/logout` - Handles user logout

### Google Drive Endpoints

- `GET /api/google-drive/files` - Lists files from Google Drive
- `POST /api/google-drive/upload` - Uploads file to Google Drive
- `GET /api/google-drive/download/:fileId` - Downloads specific file
- `DELETE /api/google-drive/delete/:fileId` - Deletes specific file

## Design Decisions

The application implements:
- JWT tokens stored in sessionStorage for user session management
- Protected routes using React Router
- Tailwind CSS for styling
- TypeScript for type safety
- Component-based architecture for better maintainability

## Learn More

You can learn more about the technologies used in this project:

- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Google Drive API](https://developers.google.com/drive/api/v3/about-sdk)
- [Tailwind CSS](https://tailwindcss.com/docs)
