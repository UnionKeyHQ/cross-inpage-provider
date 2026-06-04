import { IInjectedProviderNames } from '@unionkeyfe/cross-inpage-provider-types';

import { ProviderBase, IInpageProviderConfig } from '@unionkeyfe/cross-inpage-provider-core';

class ProviderNeoBase extends ProviderBase {
  constructor(props: IInpageProviderConfig) {
    super(props);
  }

  protected providerName = IInjectedProviderNames.neo;

  request(data: unknown) {
    return this.bridgeRequest(data);
  }
}

export { ProviderNeoBase }; 
