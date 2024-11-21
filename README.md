Second Chance Foods - RBAC System

Second Chance Foods is a web application where I have implemented a comprehensive Role-Based Access Control (RBAC) system to manage user access and permissions efficiently. 
The application allows administrators to define multiple user roles, such as Admin, Store Admin, and Delivery Staff, each with specific access rights to various resources and functionalities.
Administrators can create, edit, or delete user accounts, Store Admin accounts, and Delivery Staff accounts, while also controlling their permissions for actions such as adding, modifying, or viewing content.
The RBAC system ensures secure, granular control over access, providing a seamless user experience while safeguarding sensitive data and operations.

The project demonstrates my ability to implement robust security mechanisms while maintaining an intuitive interface for managing user roles and permissions.
Additionally, the login page is unified for Admin, Store Admin, and Delivery Staff, redirecting users to the appropriate dashboard upon successful login, 
while a separate login page is provided for public users.

INTRODUCTION

The Prison Food Production and Marketing System is a digital platform that enables the prison system to manage and market food products
made by inmates to the public at a low cost. The system aims to provide a efficient way to manage production, inventory, sales, and delivery of food products.

Functional Requirements:

1. User Management:
    - Admin: Manage user accounts, roles, and permissions.
    - Store Admin: Manage store operations, inventory, and sales.
    - Delivery Staff: Manage delivery schedules, routes, and orders.
    - Users: Place orders, view products, and track delivery status.
2. Product Management:
    - Admin: Add, edit, and delete products.
    - Store Admin: Manage product inventory, pricing, and availability.
3. Order Management:
    - Users: Place orders through the Android app.
    - Store Admin: Manage orders, process payments, and update order status.
    - Delivery Staff: Receive and fulfill orders.
4. Inventory Management:
    - Store Admin: Manage inventory levels, track stock, and update product availability.
5. Sales and Marketing:
    - Admin: Analyze sales data, track revenue, and manage marketing campaigns.
6. Delivery Management:
    - Delivery Staff: Receive and fulfill orders, update delivery status.
7. Reporting and Analytics:
    - Admin: Generate reports on sales, revenue, and inventory levels.

Technologies Used:
Frontend: React
Backend: Node.js with Express
Database: MongoDB
Installation Guide
Follow the steps below to set up and run the project locally:

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/second-chance-foods.git
2. Navigate into the project folder
bash
Copy code
cd second-chance-foods
3. Install the backend dependencies
Go to the backend folder and install the required packages:

bash
Copy code
cd backend
npm install
4. Set up environment variables
Create a .env file in the backend directory and configure the necessary environment variables (e.g., MongoDB URI, JWT Secret, etc.).

Example .env file:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/secondChanceFoods
JWT_SECRET=your_jwt_secret
5. Run the backend server
Start the backend server using:

bash
Copy code
npm start
This will start the Node.js server on http://localhost:3000 (or whichever port you configured).

6. Install the frontend dependencies
Now, navigate to the frontend folder and install the required packages:

bash
Copy code
cd frontend
npm install
7. Run the frontend development server
Start the React development server using:

bash
Copy code
npm start
This will start the React app on http://localhost:3000.

8. Access the Application
Admin Login: The admin login page is located at http://localhost:3000/admin. After logging in, admins will be redirected to their respective dashboard.
Initial Admin Setup: If you're setting up the application for the first time, visit http://localhost:3000/adminsetup to create the initial admin account.
Public Login: A separate login page is available for public users.

Notes:
Make sure you have MongoDB running locally or provide a MongoDB Atlas URI in your .env file.
You can customize roles and permissions within the application, as well as manage user accounts directly through the admin interface.



