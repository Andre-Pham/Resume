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

## Lint

To lint all code, run the following in the project directory:

```
$ npm run lint
```

## Building for Production

To test in a production environment, the base has to be set to `"/"` (it can be reverted after building).

```typescript
// Inside vite.config.ts
base: "/",
```

Then run in the project directory:

```
$ npm run build && cd dist && serve
```

## Nuke

To nuke (clean cache and all that) run the following command (**only works on Unix**):

```bash
find . -name 'node_modules' -type d -prune -exec echo "Deleting: {}" \; -exec rm -rf {} \;
find . -name 'tsconfig.tsbuildinfo' -type f -exec echo "Deleting: {}" \; -exec rm {} \; 
find . -name 'dist' -type d -exec echo "Deleting directory: {}" \; -exec rm -rf {} \;
find . -name '.pnpm-store' -type d -exec echo "Deleting directory: {}" \; -exec rm -rf {} \;
npm i ;
npm run build ;
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

#### Adding Lint

```
npm uninstall @typescript-eslint/parser @typescript-eslint/eslint-plugin

npm install eslint-config-standard-with-typescript @typescript-eslint/eslint-plugin@^6.4.0 @typescript-eslint/parser@^6.4.0 --save-dev
```

```
$ npx eslint --init
```

> **How would you like to use ESLint?**: To check syntax, find problems, and enforce code style.

> **What type of modules does your project use?**: JavaScript modules (import/export).

> **Which framework does your project use?**: React.

> **Does your project use TypeScript?**: Yes.

> **Where does your code run?**: Browser.

> **How would you like to define a style for your project?**: Use a popular style guide or customize your own.

> **What format do you want your config file to be in?** JavaScript

> **Would you like to install them now?** Yes

Add the following script to `package.json`:

```ts
"scripts": {
  "lint": "eslint . --ext .ts,.tsx --report-unused-disable-directives --max-warnings 0",
}
```

Then to align ESLint with the prettier settings, first run:

```
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Then add the following extension to `.eslintrc.cjs` (which will read the rules set in your prettier rule file):

```js
extends: [
    "plugin:prettier/recommended" // Add this
]
```

Then add the following rules to `.eslintrc.cjs`:

```js
rules: {
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "object-shorthand": "off",
},
```

Then add the following setting:

```js
settings: {
    react: {
        version: "detect",
    },
},
```

Then create a `.eslintignore` file:

```
vite-env.d.ts
vite.config.ts
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

#### Adding Device Detection

```
$ npm install react-device-detect
```

#### Adding Production Builds

You need `serve` to run a production build on your local machine. To install, run:

```
$ npm install -g serve
```

#### Setting up GitHub Pages

```
$ npm install gh-pages --save-dev
```

```
$ npm install vite-plugin-static-copy --save-dev
```

Add the following to `package.json` inside the `scripts` property:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
"clean": "rm -rf dist"
```

Add to `vite.config.ts`:

```typescript
import { viteStaticCopy } from "vite-plugin-static-copy";

// ...

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "public/404.html",
                    dest: ".",
                },
            ],
        }),
    ],
    base: "/Resume/",
});
```

Then in `/public`, add a new `404.html` file:

```html
<!doctype html>
<html>
    <head>
        <meta http-equiv="refresh" content="0; URL=/Resume/" />
    </head>
    <body>
        <script>
            // For old browsers that do not support the meta refresh tag
            window.location.href = "/Resume/";
        </script>
    </body>
</html>
```

Make sure your routing uses `HashRouter` for GitHub Pages:

```typescript
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// ...

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/education" element={<EducationScreen />} />
                {/* ... Other Routes... */}

                {/* Invalid paths redirect to root */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
```
