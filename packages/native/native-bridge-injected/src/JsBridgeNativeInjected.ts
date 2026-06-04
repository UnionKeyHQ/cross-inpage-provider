import { IJsBridgeMessagePayload } from '@unionkeyfe/cross-inpage-provider-types';

import { JsBridgeBase } from '@unionkeyfe/cross-inpage-provider-core';

class JsBridgeNativeInjected extends JsBridgeBase {
  sendAsString = true;

  isInjected = true;

  sendPayload(payload: IJsBridgeMessagePayload | string) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(payload as string);
    }
  }
}

export { JsBridgeNativeInjected };
