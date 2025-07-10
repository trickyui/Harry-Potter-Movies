pipeline{
  agent any
  stages{
    stage('Checkout Code'){
      steps{
        git branch: 'main', 'https://github.com/trickyui/Harry-Potter-Movies.git'
      }
    }

    stage('Build'){
      steps{
        bat 'echo "building application"'
      }
    }

    stage('Test'){
      steps{
        bat 'echo "Running tests"'
      }
    }

    stage('Deploy'){
      steps{
        bat 'echo "Deploying"'
      }
    }
  }
}
