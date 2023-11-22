Instructions to Run the Code
Install Dependencies:
Ensure that you have Yarn installed on your machine. If not, you can install it globally using:

bash
Copy code
npm install -g yarn
Clone the Repository:
Clone the project repository from the source.

bash
Copy code
git clone <repository-url>
Navigate to Project Directory:
Change your current working directory to the project folder.

bash
Copy code
cd admin-dashboard
Install Node Modules:
Install project dependencies using Yarn.

bash
Copy code
yarn
Run the Development Server:
Start the development server to run the project locally.

bash
Copy code
yarn dev
This command will launch the development server, and you can view the project by opening your browser and navigating to http://localhost:3000.

Build for Production:
If you want to build the project for production, use the following command:

bash
Copy code
yarn build
This will create a dist directory with optimized and minified production-ready code.

Linting:
To run ESLint for linting the code, use:

bash
Copy code
yarn lint
Preview Production Build:
To preview the production build locally, use:

bash
Copy code
yarn preview
This command will serve the production build, and you can view it by opening your browser and navigating to http://localhost:5000.

Notes:
Ensure that you have Node.js installed on your machine.
The project uses Vite for development and building, and the scripts are configured accordingly.
Adjust the <repository-url> placeholder with the actual URL of your project repository.
These instructions assume that you have a basic understanding of using the command line and have the necessary software installed on your machine.
