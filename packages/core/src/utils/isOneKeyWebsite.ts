const ONEKEY_WEBSITE_LIST = [
  'app.unionkey.io',
  '1key.so',
  'app.unionkey.io',
];

export function isOneKeyWebsite() {
 return ONEKEY_WEBSITE_LIST.some(hostname => window.location.origin.includes(hostname));
}
