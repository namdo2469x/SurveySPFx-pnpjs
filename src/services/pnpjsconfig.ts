/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import { WebPartContext } from "@microsoft/sp-webpart-base"

// import pnp and pnp logging system
import { spfi, SPFI, SPFx } from "@pnp/sp"
import { LogLevel, PnPLogging } from "@pnp/logging"
import "@pnp/sp/webs"
import "@pnp/sp/lists"
import "@pnp/sp/batching"
import "@pnp/sp/site-users"
import "@pnp/sp/items"
import "@pnp/sp/items/get-all"

var _sp: SPFI = null

export const getSP = (context?: WebPartContext): SPFI => {
  if (_sp === null && context !== null) {
    //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
    // The LogLevel set's at what level a message will be written to the console
    _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning))
  }
  return _sp
}