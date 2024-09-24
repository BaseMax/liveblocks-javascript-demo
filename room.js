const client = createClient({
    publicApiKey: "pk_prod_pe0e…TXp7oY",
});

const { room, leave } = client.enterRoom("my-room");
