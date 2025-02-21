# GitHub Profile Viewer

A simple react web application that allows you to search for and view GitHub user profiles.

## Overview

This app fetches and displays user information from the GitHub API. When you search for a GitHub username, it shows you key details about that user's profile.

![GitHub Profile Viewer Screenshot]
![Screenshot 2025-02-18 161249](https://github.com/user-attachments/assets/bcee6184-4126-4588-9551-e3451d6ada41)

## Features

- Search for any GitHub user by username
- View profile information including:
  - Profile picture
  - Username and real name
  - Bio
  - Follower and following counts
  - Repository count
  - Location (if available)
  - Website (if available)

## Technologies Used

- React.js
- Tailwind CSS
- GitHub REST API
- Vite (build tool from `npm run dev` command)
- <div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub API" />
</div>

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/github-profile-viewer.git
cd github-profile-viewer
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## How to Use

1. Enter a valid GitHub username in the search bar
2. Press Enter to then search for the user
3. View the user's profile information displayed on the page

## API Usage

This project uses the GitHub REST API to fetch user data. No API key is required for basic usage, but rate limits apply.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
