# React Vite App

## Installation

**Step 1: Clone the repository**

```bash
git clone https://github.com/mhmdhalawi/aida-react.git
```

**Step 2: Go to the project folder**

```bash
cd aida-react
```

**Step 3: Install dependencies**

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root to configure environment variables (Vite loads variables prefixed with `VITE_`).

1. Create the file:

```bash
touch .env
```

2. Add your backend URL (example below):

```bash
VITE_APP_BACKEND_URL=http://localhost:8080
```

If the dev server is already running, restart it after changing `.env`.

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open your browser and go to:

```bash
http://localhost:5173/
```

## Build for Production

To build the app for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```
