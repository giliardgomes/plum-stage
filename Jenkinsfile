
def post_PR_comment_scm(pr_id, text) {
    def repository_url = scm.userRemoteConfigs[0].url
    def repository_name = repository_url.replace("git@github.com:","").replace("https://github.com/", "").replace(".git","")

    post_PR_comment(repository_name, pr_id, text)
}

def post_PR_comment(repo_name, pr_id, text) {
    withCredentials([string(credentialsId: 'quorumgithubservice-token', variable: 'GITHUB_TOKEN')]) {
        sh """curl -s -H 'Authorization: token ${GITHUB_TOKEN}' -X POST -d '{"body": "${text}"}' 'https://api.github.com/repos/${repo_name}/issues/${pr_id}/comments'"""
    }
}

pipeline {
    agent {
        label "Plum-test"
    }
    options {
        skipStagesAfterUnstable()
        disableConcurrentBuilds(abortPrevious: true)
        ansiColor('xterm')
    }
    environment {
        DOCKER_BUILDKIT=1
        COMPOSE_FILE = 'docker-compose.yml'
        COMPOSE_PROJECT_NAME = "plum-tests-${CHANGE_ID}-${BUILD_ID}"
    }
    stages {
        stage("Build Plum container") {
            steps {
                script {
                    sh "docker compose build plum"
                }
            }
        }
        stage("Run tests") {
            stage("Plum-tests") {
                steps {
                    sh "docker compose exec plum npm run test"
                    sh "docker compose cp plum:/code/junit.xml ."
                }
                post {
                    always {
                        junit "junit.xml"
                    }
                }
            }
        }
    }
    post {
        always {
            catchError {
                script {
                    sh "docker compose down --remove-orphans --volumes"
                }
            }
        }
    }
}
