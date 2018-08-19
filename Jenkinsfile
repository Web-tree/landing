pipeline {
    agent any
    stages {
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
                        image.push('dev')
                    }
                }
            }
        }

        stage("update stack") {
            steps {
                sh 'docker stack deploy -c docker-compose.yml webtree-landing'
            }
        }
    }
}
