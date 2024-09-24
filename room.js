import { createClient } from "@liveblocks/client";

const client = createClient({
  publicApiKey: "pk_prod_hdKHawd0Qw7oc_vJolxUGaMnYNgqITzZWn0g4HwNZJTzuPwqC1SLTfPTfqT6klIK",
});

export const { room, leave } = client.enterRoom("my-room");
