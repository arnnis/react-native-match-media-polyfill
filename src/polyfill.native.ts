import { Dimensions } from 'react-native'
// @ts-ignore
import mediaQuery from 'css-mediaquery'

type Listener = (context: MediaQuery) => any;

class MediaQuery {
  _listeners: Array<Listener> = [];
  _query = '';

  constructor(query: string) {
    this._query = query
    Dimensions.addEventListener('change', this._handleDimensionsChange)
  }

  get matches() {
    const dims = Dimensions.get("window");
    return mediaQuery.match(this._query, {
      type: 'screen',
      ...dims,
      "orientation": dims.width >= dims.height? "landscape" : "portrait",
      "device-width": dims.width,
      "device-height": dims.height,
    })
  }

  _handleDimensionsChange = () => {
    this._notifyListeners()
  }

  _notifyListeners() {
    this._listeners.forEach(listener => {
      (listener as any)(this)
    })
  }

  _unmount() {
    Dimensions.removeEventListener('change', this._handleDimensionsChange)
  }

  addListener(listener: any) {
    this._listeners.push(listener)
  }

  removeListener(listener: any) {
    const index = this._listeners.indexOf(listener)
    if (index === -1) return
    this._listeners.splice(index)
  }
}

  // @ts-ignore
if (window) {
  // @ts-ignore
  window.matchMedia = (mediaQueryString: string) => new MediaQuery(mediaQueryString);
}
  