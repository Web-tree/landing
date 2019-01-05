pipeline {
  agent {
    label 'master'
  }
  parameters {
    choice choices: ['prod', 'stage'], description: '', name: 'ENV_TYPE'
    gitParameter branch: '', branchFilter: 'origin/(.*)', defaultValue: 'master', description: '', name: 'BRANCH', quickFilterEnabled: false, selectedValue: 'NONE', sortMode: 'NONE', tagFilter: '*', type: 'PT_BRANCH'
  }


  stages {
    stage('Checkout') {
      steps {
        git changelog: false, poll: false, branch: "${params.BRANCH}", url: 'https://github.com/Web-tree/landing.git'
      }
    }
    stage("build webtree.org landing") {
      agent {
        docker {
          image 'node:8-alpine'
          reuseNode true
        }
      }

      steps {
        sh 'npm i'
        sh '$(npm bin)/ng build --prod --build-optimizer'
      }
    }

    stage("build & push image") {
      steps {
        script {
          withDockerRegistry(credentialsId: '51025d33-41de-44fe-8798-7dde9eebc98c') {
            def image = docker.build("webtree/landing:${env.BUILD_ID}")
            image.push(params.ENV_TYPE)
          }
        }
      }
    }

    stage("update stack") {
      steps {
        sh "docker stack deploy -c docker-compose-${params.ENV_TYPE}.yml webtree-landing-${params.ENV_TYPE}"
      }
    }
  }
}
