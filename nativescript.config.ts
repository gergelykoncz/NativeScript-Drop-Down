import { NativeScriptConfig } from '@nativescript/core';

// tslint:disable-next-line:no-object-literal-type-assertion
export default {
  id: 'org.nativescript.app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;
