# Endorse256Services - Construction Company Website

## Overview

This is a modern construction company website built as a single-page application (SPA) for Endorse256Services, a Ugandan construction company founded by Nuwagaba Goodhope. The application features a complete business showcase with contact inquiry management, testimonials, and a professional portfolio display.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom brand colors and shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas for request/response validation
- **Development Storage**: In-memory storage fallback for development

## Key Components

### Database Schema
Located in `shared/schema.ts`, defines three main entities:
- **Users**: Basic user authentication structure
- **Contact Inquiries**: Customer contact form submissions with read status tracking
- **Testimonials**: Customer testimonials with approval workflow

### API Endpoints
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact` - Retrieve all contact inquiries
- `PATCH /api/contact/:id/read` - Mark inquiry as read
- `GET /api/testimonials` - Retrieve approved testimonials
- `POST /api/testimonials` - Submit new testimonial

### UI Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: shadcn/ui components for consistent design
- **Sections**: Hero, Services, About, Portfolio, Testimonials, Contact
- **Forms**: Contact form with validation and error handling
- **Toast Notifications**: User feedback for form submissions

## Data Flow

1. **Contact Inquiries**: Users submit forms → validated with Zod → stored in database → admin can view and mark as read
2. **Testimonials**: Approved testimonials are fetched and displayed in a grid layout with star ratings
3. **Portfolio**: Static project showcase with filtering capabilities
4. **Real-time Updates**: React Query manages cache invalidation and optimistic updates

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React icons
- **Date Handling**: date-fns for date formatting
- **Validation**: Zod for schema validation and drizzle-zod for integration

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server with hot module replacement
- **ESBuild**: Production bundling for server code
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Build Process
- Frontend: Vite builds to `dist/public` directory
- Backend: ESBuild bundles server code to `dist/index.js`
- Database: Drizzle handles schema migrations

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment setting (development/production)
- Development includes Replit-specific tooling and cartographer

### Production Considerations
- Static asset serving handled by Express in production
- Database migrations run via `npm run db:push`
- Error handling with proper HTTP status codes
- Request logging for API endpoints

The application uses a monorepo structure with shared types and schemas, enabling type safety across the full stack while maintaining clear separation between client and server code.