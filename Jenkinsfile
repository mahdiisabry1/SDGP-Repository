pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                git url: 'https://github.com/mahdiisabry1/SDGP-Repository'
        
                sh 'cd ../Backend && npm install'

                sh 'cd ../mindforge-project && npm install && npm run build'
    }
}
        stage('Test') {
            steps {
                // Run tests for backend
                sh 'cd ../Backend && npm test'
                // Run tests for frontend
                sh 'cd ../mindforge-project && npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'No deployment steps specified yet'
            }
        }
    }
}
