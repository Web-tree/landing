pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout([$class: 'GitSCM',
                      branches: [[name: '*/master']],
                      doGenerateSubmoduleConfigurations: false,
                      extensions: [[$class: 'SubmoduleOption',
                                    disableSubmodules: false,
                                    parentCredentials: false,
                                    recursiveSubmodules: true,
                                    reference: '',
                                    trackingSubmodules: true]],
                      submoduleCfg: [],
                      userRemoteConfigs: [[url: 'https://github.com/Web-tree/landing.git']]])
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
                        image.push('dev')
                    }
                }
            }
        }

        // stage("update stack") {
        //     steps {
        //         sh 'docker stack deploy -c docker-compose.yml webtree-entripoint'
        //     }
        // }
    }
}
