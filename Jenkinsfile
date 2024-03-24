pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                git url: 'https://github.com/mahdiisabry1/SDGP-Repository', branch: 'main'
                script {
                    sh 'cd Backend && npm install' || error('Failed to install dependencies in Backend directory')
                    sh 'cd mindforge-project && npm install && npm run dev' || error('Failed to install dependencies or run dev script in mindforge-project directory')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'cd Backend && npm test' || error('Failed to run tests in Backend directory')
                    sh 'cd mindforge-project && npm test' || error('Failed to run tests in mindforge-project directory')
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'No deployment steps specified yet'
            }
        }
    }
}
