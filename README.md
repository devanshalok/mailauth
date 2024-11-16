# MailAuth

**MailAuth** is a powerful tool for generating verified email addresses using a user’s first name, last name, and the company’s website address. The app assigns a confidence score to each generated email address, ensuring reliability. Users can store these email addresses in a database for future use, send emails directly to selected addresses, and search stored addresses by name or company.

Built with **React**, **Node.js**, and **MongoDB**, MailAuth provides a seamless experience for email verification, storage, and communication.

## Features

- **Email Address Generation**: Create verified email addresses using first name, last name, and company domain.
- **Confidence Score**: Assigns a reliability score to each generated email address.
- **Database Storage**: Save verified email addresses for future use.
- **Email Sending**: Send emails directly to selected addresses from the app.
- **Search Functionality**: Easily search saved email addresses by name or company.

## Tech Stack

- **React.js**: For building the frontend user interface.
- **Node.js**: Backend for handling API requests and email verification.
- **MongoDB**: Database for storing verified email addresses and related data.

## Getting Started

Follow these instructions to set up and run MailAuth locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14+ recommended)
- **MongoDB** (local instance or cloud-based)
- A package manager like **npm** or **yarn**

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/devanshalok/mailauth.git
   cd mailauth
   ```

2. **Install Dependencies**:

   Navigate to the `backend` and `frontend` directories to install dependencies:

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB**: Ensure your MongoDB instance is running locally or provide a connection URI in the backend configuration.

2. **Start Backend**:

   Navigate to the `backend` folder and run:

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

3. **Start Frontend**:

   Navigate to the `frontend` folder and run:

   ```bash
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.

## Usage

1. **Generate Email Addresses**:
   - Input the first name, last name, and company website domain.
   - The app generates potential email addresses with confidence scores.

2. **Store Email Addresses**:
   - Save verified email addresses to the database for future use.

3. **Send Emails**:
   - Select one or more email addresses from the database.
   - Compose and send emails directly through the app.

4. **Search Stored Emails**:
   - Use the search bar to find email addresses by name or company.

## Future Enhancements

- **AI-Enhanced Verification**: Use machine learning to improve confidence score accuracy.
- **Email Campaign Management**: Add bulk email sending and campaign tracking features.
- **Analytics Dashboard**: Provide insights into email sending success rates and user engagement.
- **Authentication**: Secure access with user accounts and roles.

## Built With

- **React.js** - Frontend framework
- **Node.js & Express** - Backend server
- **MongoDB** - Database for storing email data

## Contributing

Contributions are welcome! Please see `CONTRIBUTING.md` for guidelines on how to get involved with the project.

## Authors

- **Devansh Alok** - Initial work - [devanshalok](https://github.com/devanshalok)

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

- Thanks to the open-source community for tools and libraries supporting email verification and management.
- Inspired by the need for a seamless, efficient email management solution for professionals.
