const APP_VERSION_KEY = 'appVersion';

export function getAppVersion(): string {
  return localStorage.getItem(APP_VERSION_KEY) || '1.4.0';
}