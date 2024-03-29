# Plum

## Development
### Running in Docker

#### Install task runner

[Task Homepage](https://taskfile.dev/)

_Task runner streamlines all local commands to simple verb:object commands, such as "task test:backend"._

```
brew install go-task
```

Confirm task runner installed correctly by listing all available tasks from the repository root directory using `task -l`.

_See information on any specific task, if available, using `task --summary <TASK NAME>`, e.g. `task --summary test`._

Build Containers:

```shell
task build
```

Run tests:

```shell
task test
```

### Running "Natively" on your Computer / for VSCode Intellisense

First, ensure Node is up to date. If you have [NVM](https://github.com/nvm-sh/nvm) installed, `nvm use` will automatically install and switch to the latest LTS version.

Install dependencies:

```shell
npm install
```

Run storybook:

```shell
npm run storybook
```

Run tests:

```shell
npm run test
```

## Deployment

Code is automatically deployed using [AWS Amplify](https://aws.amazon.com/amplify/). The main branch is deployed to https://plum.quorum.us. Pull requests are deployed using Amplify's built-in preview functionality. When you create a pull request, Amplify will add a comment to your pull request with the URL to the deployment:

![Amplify adds a comment in your pull request](/.github/amplify-comment.png)

An alert will also be sent to the #alerts-design-system channel in Slack:

TODO: add screenshot

[Configuration for the plum app in Amplify](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d29y5g8bf7q44y) is in the Development account in AWS. There you can change build settings, notifications, access control, URL rewrites, and more.
