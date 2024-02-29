// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { RhetosConfig } from '@ngx-floyd/rhetos';

export const environment = {
  production: false,
  rhetos:  {
    withCredentials: true,
    url: 'https://localhost:7081/',
    suppressLoadMetadataOnAppInit: true,
    suppressLoadUserSpecificDataOnAppInit: false,
    useMsDate: true
  } as RhetosConfig,
};