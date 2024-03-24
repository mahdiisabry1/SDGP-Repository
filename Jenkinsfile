pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/mahdiisabry1/SDGP-Repository'
            }
        }
        stage('Build Backend') {
            steps {
                dir('Backend') {
                    sh 'mvn clean package'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('mindforge-project') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment steps go here'
            }
        }
    }
}
