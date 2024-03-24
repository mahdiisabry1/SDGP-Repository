pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Checkout code from Git
                git 'your_git_repository_url'
                
                // Build Node.js backend
                sh 'cd backend_directory && npm install'
                // Additional build steps for your backend if needed

                // Build React frontend
                sh 'cd frontend_directory && npm install && npm run build'
                // Additional build steps for your frontend if needed
            }
        }
        stage('Test') {
            steps {
                // Run tests for backend
                sh 'cd backend_directory && npm test'
                // Run tests for frontend
                sh 'cd frontend_directory && npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps for backend and frontend
                // This might involve copying built files to a server, etc.
            }
        }
    }
}
