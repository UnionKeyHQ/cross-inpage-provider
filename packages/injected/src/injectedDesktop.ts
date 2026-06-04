import { JsBridgeDesktopInjected } from '@unionkeyfe/desktop-bridge-injected';
import {
  injectedProviderReceiveHandler,
  injectJsBridge,
} from '@unionkeyfe/cross-inpage-provider-core';

import { injectWeb3Provider } from '@unionkeyfe/inpage-providers-hub';

const bridge = () =>
  new JsBridgeDesktopInjected({
    receiveHandler: injectedProviderReceiveHandler,
  });
injectJsBridge(bridge);

injectWeb3Provider();

// eslint-disable-next-line no-void
void 0;
