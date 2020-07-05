# react-native-match-media-polyfill

`window.matchMedia` polyfill for React Native so you can use `react-responsive` or similar libs. also suports `react-native-web`

## Installation

Open a Terminal in your project, and run:

```sh
yarn add react-native-match-media-polyfill
```

## Usage
Import the polyfill at the top of your file before using the window.matchMedia API or at top of your index.js or App.js file

```js
import 'react-native-match-media-polyfill'
// use the match media API
```

with react-responsive:
```js
import 'react-native-match-media-polyfill'
import {useMediaQuery} from 'react-responsive'

const App = () => {
  const isLandscape = useMediaQuery({orientation: 'landscape'})
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })

  return (
     <>
       <Text>{isLandscape? 'Landscape' : 'Portrait'}<Text>
       <Text>{isBigScreen? 'Big screen' : 'Small screen'}<Text>
     </>

  )
}
```

And we're done 🎉

## LICENSE

MIT, fork of @expo/match-media and tuckerconnelly/react-native-match-media
