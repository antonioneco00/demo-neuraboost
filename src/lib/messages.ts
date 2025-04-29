import { getMessages } from "next-intl/server";
import { Messages } from "@/types/messages";

export async function getTypedMessages(): Promise<Messages> {
  const messages = await getMessages();

  return messages as Messages;
}
