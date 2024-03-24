pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                git https://github.com/mahdiisabry1/SDGP-Repository
                
                sh 'cd Backend && npm install'
                sh 'cd mindforge-project && npm install && npm run dev'
            }
        }
        stage('Test') {
            steps {
                
                sh 'cd Backend && npm test'

                sh 'cd mindforge-project && npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'No deployment steps specified yet'
            }
    }
    }
}
