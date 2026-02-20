# Freelance Dashboard

A modern, responsive dashboard application for freelancers to manage their projects, track earnings, and handle client relationships. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard Overview**: Visual statistics with interactive charts showing monthly earnings and project status distribution
- **Project Management**: Full CRUD (Create, Read, Update, Delete) operations for managing freelance projects
- **Activity Tracking**: Recent activities feed showing project milestones, payments, and tasks
- **User Profile**: Editable profile with personal information and password management
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Sidebar**: Professional sidebar navigation with active state indicators

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Create React App (React Scripts)
- **CSS Preprocessor**: PostCSS with Autoprefixer

## Project Structure

```
freelance-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ProjectModal.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── pages/
│   │   ├── Overview.tsx
│   │   ├── Profile.tsx
│   │   └── Projects.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd freelance-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App configuration |

## Data Models

### Project
- `id`: Unique identifier
- `name`: Project name
- `client`: Client name
- `status`: Project status (In Progress, Completed, On Hold, Pending)
- `deadline`: Project deadline date
- `budget`: Project budget in USD
- `description`: Project description

### UserProfile
- `name`: Full name
- `email`: Email address
- `role`: Professional role
- `bio`: User biography
- `avatar`: Profile picture URL (optional)

### DashboardStats
- `totalProjects`: Total number of projects
- `totalEarnings`: Sum of completed project budgets
- `tasksDue`: Number of in-progress projects
- `completedProjects`: Number of completed projects

## Pages

### 1. Overview (`/`)
The main dashboard page displaying:
- Four stat cards: Total Projects, Total Earnings, Tasks Due, Completed
- Monthly earnings bar chart
- Project status pie chart
- Recent activities feed

### 2. Projects (`/projects`)
Project management page featuring:
- Desktop table view with all project details
- Mobile card view for responsive design
- Create, Edit, View, and Delete actions
- Status badges with color coding
- Project modal for form input

### 3. Profile (`/profile`)
User profile settings including:
- Avatar display
- Editable personal information (name, email, role, bio)
- Password change form
- Form validation

## License

This project is private and proprietary.

## Author

**Hossam Hassan** - Full Stack Developer
- Email: hossamhassan112003@gmail.com
- Bio: Passionate developer with 3+ years of experience in web development.

