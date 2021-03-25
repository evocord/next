/* eslint-disable */
import { Client } from "@/core/Client";
import { GenericObj } from "@/lib/utils/constants";

class BaseStructure {
  constructor(public client: Client) {}

  public _parseOptionalData(this: any, data: GenericObj): void {
    const bucket = {};

    for (const key of Object.keys(data)) {
      if (typeof this[key] !== "undefined" && this[key] !== null) continue;
      if (typeof data[key] !== "undefined" && data[key] !== null)
        (bucket as any)[key] = data[key];
      continue;
    }

    const keys = Object.keys(bucket);
    if (keys.length) for (const key of keys) this[key] = (bucket as any)[key];
  }
}

export { BaseStructure };
