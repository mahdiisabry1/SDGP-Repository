pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    try {
                        git url: 'https://github.com/mahdiisabry1/SDGP-Repository', branch: 'main'
                        sh 'cd Backend && npm install'
                        sh 'cd mindforge-project && npm install && npm run dev'
                    } catch (Exception e) {
                        echo "Failed to build: ${e.message}"
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    try {
                        sh 'cd Backend && npm test'
                        sh 'cd mindforge-project && npm test'
                    } catch (Exception e) {
                        echo "Failed to test: ${e.message}"
                    }
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
