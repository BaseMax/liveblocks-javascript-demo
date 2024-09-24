import { room } from "./room.js";

const div = document.querySelector("#app");

room.subscribe("others", (others) => {
    div.innerText = `There are ${others.length} other user(s) online`;
});
