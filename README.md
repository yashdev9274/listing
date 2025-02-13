# CreateXP

## Assignment overview- explained through pictorial diagram:

![alt text](Listing_excalidraw.png)


# Job Listing Platform

A modern job listing platform built with Next.js 14, featuring a clean UI and powerful filtering capabilities.

## Features

- 🌐 **Real-time Job Listings** with advanced filtering options
- 🎨 **Modern UI** built with Tailwind CSS and Shadcn UI
- 🔍 **Advanced Search & Filters**
  - Job type filtering (Full-time, Part-time, Contract, Internship)
  - Location-based search with worldwide/remote options
  - Salary range filtering
- 📝 **Rich Text Job Descriptions** using TipTap editor
- 🖼️ **Image Upload** support for company logos
- 🌙 **Dark/Light Mode** support
- 🔐 **Authentication** system
- 💼 **Company Profiles** management

## Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Shadcn UI for pre-built components
  - Lucide Icons for vector icons
- **State Management**: React Hooks
- **Form Handling**:
  - React Hook Form for form state
  - Zod for schema validation
  - React Select for dropdown components

### Backend
- **Runtime**: Node.js
- **Framework**: Next.js Server Components & Server Actions
- **Database**: 
  - PostgreSQL as main database
  - Prisma as ORM
- **Authentication**: 
  - NextAuth.js/Auth.js
  - JWT for session management

### Features & Integrations
- **Rich Text Editor**: TipTap
- **Image Upload**: UploadThing
- **UI Components**:
  - Sonner for toast notifications
  - Tailwind Merge for class name merging
  - Class Variance Authority for component variants
- **Development Tools**:
  - TypeScript for type safety
  - ESLint for code linting
  - Prettier for code formatting

### Infrastructure
- **Hosting**: Vercel
- **Database Hosting**: Vercel Postgres
- **Image Storage**: UploadThing CDN
- **Version Control**: Git

## Project Structure

```
├── app/
│   ├── (appLayout)/         # Main application layout
│   ├── action.ts           # Server actions
│   └── utils/              # Utility functions
├── components/
│   ├── form/               # Form components
│   ├── home/               # Home page components
│   └── ui/                 # Reusable UI components
└── lib/                    # Library code
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```env
   DATABASE_URL=
   NEXTAUTH_SECRET=
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Key Features Explained

### Job Filtering
- Real-time filtering using URL parameters
- Multiple filter combinations (job type, location, salary)
- Clean and responsive filter UI

### Job Posting
- Rich text editor for job descriptions
- Company profile integration
- Image upload for company logos
- Form validation using Zod

### Company Profiles
- Detailed company information
- Logo management
- Job posting management

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
