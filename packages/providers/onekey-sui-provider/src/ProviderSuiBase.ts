import type { IInpageProviderConfig } from '@unionkeyfe/cross-inpage-provider-core';
import { ProviderBase } from '@unionkeyfe/cross-inpage-provider-core';
import { IInjectedProviderNames } from '@unionkeyfe/cross-inpage-provider-types';


class ProviderSuiBase extends ProviderBase {
  constructor(props: IInpageProviderConfig) {
    super(props);
  }

  protected providerName = IInjectedProviderNames.sui;

  request(data: unknown) {
    return this.bridgeRequest(data);
  }
}

export { ProviderSuiBase };
