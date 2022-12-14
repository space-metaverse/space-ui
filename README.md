[![npm version](https://badge.fury.io/js/@space-metaverse-ag%2Fspace-ui.svg)](https://badge.fury.io/js/@space-metaverse-ag%2Fspace-ui)

# space-ui
React component library for metaverse 3D and 2D apps.

## How to use the UI library

1.) `npm install @space-metaverse-ag/space-ui`

2.) Wrap `ThemeProvider` around your app. 

```
import { ThemeProvider } from '@space-metaverse-ag/space-ui'

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
)
```

3.) Import `index.css` into your app.

```
import "@space-metaverse-ag/space-ui/index.css"
```

### Example usage:

Components: 

`import { Button, TextInput } from "@space-metaverse-ag/space-ui";`

Icons: 

`import { Home, UpArrow } from "@space-metaverse-ag/space-ui/icons";`

## Develop locally

1. Install Node.js LTS

2. `npm install --force`

3. `npm run storybook`

4. Go-to: http://localhost:6006/

## NPM Package

https://www.npmjs.com/package/@space-metaverse-ag/space-ui

## Environments

https://storybook.dev.tryspace.com - `dev`

https://storybook.qa.tryspace.com - `qa`

https://storybook.tryspace.com - `main`
