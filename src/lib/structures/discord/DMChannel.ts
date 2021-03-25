import { Client } from "@/core/Client";
import { Channel, IChannnel } from "./Channel";
import { IUser } from "./User";

export interface IDMChannel extends IChannnel {
  lastMessageId: string | null;
  recipients: IUser[];
  lastPinTimestamp: string | null;
}

export class DMChannel extends Channel implements IDMChannel {
  public lastMessageId: string | null;
  public recipients: IUser[];
  public lastPinTimestamp: string | null;

  constructor(client: Client, data: IDMChannel) {
    super(client, data);

    this.lastMessageId = data.lastMessageId;
    this.recipients = data.recipients;
    this.lastPinTimestamp = data.lastPinTimestamp;

    this._parseOptionalData.call(this, data);
  }
}
