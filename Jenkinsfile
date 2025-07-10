pipeline {
  agent any

  environment {
    BUILD_DIR = 'dist/harry-potter-movies'
  }

  stages {
    stage('Clone Repository') {
      steps {
        echo 'Cloning the repository...'
        git branch: 'main', url: 'https://github.com/trickyui/Harry-Potter-Movies.git' // Replace with your repo details
      }
    }

    stage('Verify Node.js and npm') {
      steps {
        echo 'Verifying Node.js and npm versions...'
        bat 'node -v'
        bat 'npm -v'
        bat 'ng version'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm ci' // Use npm ci for clean installations in CI/CD environments
      }
    }

    stage('Build Angular App') {
      steps {
        echo 'Building the Angular application...'
        bat 'ng build --configuration=production' // Builds the app for production
      }
    }
  }
}
