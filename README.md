# Resume
My digital resume. Try out the latest release on web [here](https://Andre-Pham.github.io/Resume/).

Built using React, TypeScript, and Redux. Hosted by GitHub Pages.

## Setup

1. Make sure you have latest version of Node.js installed
2. Clone the repository in your local directory

```
$ git clone https://github.com/Andre-Pham/Resume.git
```

2. Open the project directory and run `npm install`

## Running on Web

In the project directory, run the following:

```
$ npm run dev
```

## Deployment

To redeploy, run in the project directory:

```
$ npm run deploy
```

The application will be built and published automatically from the `gh-pages` branch.

## Prettify

To prettify (format) all code, run the following in the project directory:

```
$ npx prettier . --write
```

To not lint specific code blocks, refer to the following: https://prettier.io/docs/en/ignore.html

## Building for Production

To test in a production environment, run in the project directory:

```
$ npm run build
$ cd dist
$ serve
```

## Initial Project Setup

#### Creating a New Project

Where you want the project to be created, run:

```
$ npm create vite@latest
```

Select project name, package name, framework. For variant, TypeScript should be fine.

Then in the **project directory**:

```
$ npm install
```

You're now ready to go. To run the project, run:

```
$ npm run dev
```

#### Adding Prettier

First in the project directory, run:

```
$ npm install --save-dev prettier
```

Then in the project root directory, create a file called `.prettierrc`. Add the following contents:

```json
{
    "tabWidth": 4,
    "semi": true,
    "useTabs": false,
    "singleQuote": false,
    "bracketSameLine": false,
    "printWidth": 120
}
```

#### Adding Icons

```
$ npm install @mdi/react @mdi/js
```

#### Adding CSS in JS

```
$ npm install styled-components
```

#### Adding Redux

```
$ npm install redux react-redux --legacy-peer-deps
```

```
$ npm install @reduxjs/toolkit
```

#### Adding Types

For things like downloads.

```
$ npm install --save-dev @types/node
```

#### Adding Navigation

```
$ npm install react-router-dom
```

#### Adding Production Builds

You need `serve` to run a production build on your local machine. To install, run:

```
$ npm install -g serve
```

#### Adding Device Detection

```
$ npm install react-device-detect
```

