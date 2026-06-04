import { JsBridgeNativeInjected } from '@unionkeyfe/native-bridge-injected';
import { injectWeb3Provider } from '@unionkeyfe/inpage-providers-hub';

import {
  injectedProviderReceiveHandler,
  injectJsBridge,
} from '@unionkeyfe/cross-inpage-provider-core';

const bridge = () =>
  new JsBridgeNativeInjected({
    receiveHandler: injectedProviderReceiveHandler,
  });
injectJsBridge(bridge);

injectWeb3Provider();

// eslint-disable-next-line no-void
void 0;
