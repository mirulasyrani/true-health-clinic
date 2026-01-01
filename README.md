# TruHealth Clinic Website

A modern, full-stack web application for TruHealth Clinic in Kota Damansara, built with React (TypeScript) frontend and Spring Boot backend.

## Project Structure

```
TruHealth/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar, Footer)
│   │   ├── pages/         # Page components (Home, About, Services, Contact)
│   │   ├── services/      # API service layer
│   │   ├── App.tsx        # Main app component with routing
│   │   └── App.css        # Global styles
│   └── package.json
│
└── backend/           # Spring Boot + Java
    ├── src/main/java/com/truhealth/
    │   ├── controller/    # REST API controllers
    │   ├── model/         # Entity models
    │   ├── repository/    # Data repositories
    │   ├── service/       # Business logic
    │   └── config/        # Configuration (CORS, etc.)
    ├── src/main/resources/
    │   └── application.properties
    └── pom.xml
```

## Features

### Frontend (React)
- **Modern UI/UX**: Responsive design with gradient themes
- **Routing**: React Router for seamless navigation
- **Pages**:
  - Home: Hero section, features, and quick services overview
  - About: Clinic information, mission, vision, values, and team
  - Services: Detailed list of all medical services
  - Contact: Contact form with API integration
- **Components**: Reusable Navbar and Footer
- **API Integration**: Axios for backend communication

### Backend (Spring Boot)
- **RESTful API**: Full CRUD operations
- **Entities**:
  - Appointments: Manage patient appointments
  - Contact Messages: Handle contact form submissions
- **Features**:
  - Input validation
  - CORS configuration
  - H2 in-memory database (development)
  - JPA/Hibernate for data persistence
- **API Endpoints**:
  - `POST /api/appointments` - Create appointment
  - `GET /api/appointments` - Get all appointments
  - `GET /api/appointments/{id}` - Get appointment by ID
  - `POST /api/contact` - Send contact message
  - `GET /api/contact` - Get all messages

## Prerequisites

- **Frontend**:
  - Node.js 18+ and npm
  
- **Backend**:
  - Java 17+
  - Maven 3.6+

## Installation & Setup

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

4. Access H2 Database Console (optional):
   - URL: `http://localhost:8080/h2-console`
   - JDBC URL: `jdbc:h2:mem:truhealth`
   - Username: `sa`
   - Password: (leave empty)

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

4. Open your browser and visit `http://localhost:5173`

## Running Both Services

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## API Documentation

### Appointments API

- **Create Appointment**
  ```
  POST /api/appointments
  Content-Type: application/json
  
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+60123456789",
    "appointmentDate": "2026-01-15T10:00:00",
    "service": "General Consultation",
    "notes": "Optional notes"
  }
  ```

- **Get All Appointments**
  ```
  GET /api/appointments
  ```

### Contact API

- **Send Contact Message**
  ```
  POST /api/contact
  Content-Type: application/json
  
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+60123456789",
    "subject": "appointment",
    "message": "I would like to book an appointment"
  }
  ```

## Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- React Router DOM
- Axios
- CSS3 (Custom styling)

### Backend
- Spring Boot 3.2.1
- Spring Data JPA
- Spring Web
- H2 Database
- Lombok
- Bean Validation

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```
The production build will be in the `frontend/dist` directory.

### Backend
```bash
cd backend
mvn clean package
```
The JAR file will be in `backend/target/truhealth-clinic-1.0.0.jar`

Run the JAR:
```bash
java -jar target/truhealth-clinic-1.0.0.jar
```

## Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.properties` to configure:
- Server port
- Database connection
- CORS allowed origins
- Logging levels

### Frontend API Configuration
Edit `frontend/src/services/api.ts` to change the API base URL:
```typescript
const API_BASE_URL = 'http://localhost:8080/api';
```

## Future Enhancements

- User authentication and authorization
- Admin dashboard for managing appointments
- Email notifications
- Online payment integration
- Patient medical records system
- SMS appointment reminders
- Database migration to MySQL/PostgreSQL for production

## License

© 2026 TruHealth Clinic. All rights reserved.
