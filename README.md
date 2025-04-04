# Plum

This is the repository for Quorum's component library, Plum. You can find documentation for Plum in [ZeroHeight](https://plum.quorum.us/), [Figma](), and [Confluence](https://quorumanalytics.atlassian.net/wiki/spaces/DEVTEAM/pages/1289879592/DSGG).

## Contributing to Plum

### Dependencies

First, ensure Node is up to date. If you are using [Volta](https://volta.sh/), it will automatically use the version of node defined in `package.json`. If you have [NVM](https://github.com/nvm-sh/nvm) installed, `nvm use` will automatically install and switch to the latest LTS version.

We also use [PNPM](https://pnpm.io/) as our package manager. If you don't have it installed, you can install it with:

```shell
volta install pnpm
```

Next, install the dependencies:

```shell
pnpm install
```

### Use git hooks

We setup git hooks with [Husky](https://typicode.github.io/husky/) to automate checks and code formatting before changes make their way upstream.

To install hooks manually with Husky:

```shell
pnpx husky install
```

To uninstall hooks manually with Husky:

```shell
pnpx husky uninstall
```

### Tests

Run the [vitest](https://vitest.dev/) suite with:

```shell
pnpm run test
```

By default, this command will watch for changes to the source code and automatically re-run tests as needed.

### Documentation

The usage of each component should be documented in [Storybook](https://storybook.js.org/). You can start the storybook server with:

```shell
pnpm run storybook
```

#### Deploying Storybook

When a PR is opened (or when a new change is pushed to the `main` branch) Storybook is automatically deployed using [AWS Amplify](https://aws.amazon.com/amplify/). The main branch is deployed to https://plum-code.quorum.us. Pull requests are deployed using Amplify's built-in preview functionality. When you create a pull request, Amplify will add a comment to your pull request with the URL to the deployment:

![Amplify adds a comment in your pull request](/.github/amplify-comment.png)

An alert will also be sent to the `#alerts-design-system` channel in Slack.

[Configuration for Amplify](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d29y5g8bf7q44y) is in the Development account in AWS. There you can change build settings, notifications, access control, URL rewrites, and more. Amplify builds are triggered by a webhook integration defined in the GitHub Repo.

### Publishing

#### Building

The package can be built using:

```shell
pnpm run build
```

The output is in the `dist/` directory. For developmental purposes, you can declare Plum as a file dependency with the following syntax:

```json
{
    "dependencies": {
        "@quorumus/plum": "file:path/to/plum"
    }
}
```

This will create a symlink from the `node_modules/@quorumus/plum` directory to your local copy of the Plum repo, but beware that this symlink can be difficult for Docker to manage, so you'll want to `rm -rf node_modules/@quorumus` after reverting your `package.json` change.

#### Publishing

To authenticate with GitHub's NPM registry, you'll first need to create a `.npmrc` file with the following contents:

```
@quorumus:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={TOKEN}
```

The token is a GitHub Access Token (Classic) that you'll need to generate with the proper scopes. Review [GitHub's documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) for more information.

Be sure to increment the `version` key in `package.json` before publishing, or the registry will reject it! Follow [Semantic Versioning](https://semver.org/).

You can then manually publish a new version of the package with:

```shell
pnpm publish
```

#### Releasing

Typically, you won't need to manually publish the package. The repository is set up to automatically publish the latest version of the repo when you [create a new release in GitHub](https://github.com/QuorumUS/plum/releases/new).

<div>
    <a href="https://www.loom.com/share/dbd161e117694643b6dcfa12f5ec3e0d">
      <p>Plum - Create New Release - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/dbd161e117694643b6dcfa12f5ec3e0d">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/dbd161e117694643b6dcfa12f5ec3e0d-with-play.gif">
    </a>
  </div>
