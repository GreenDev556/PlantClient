import "./Commands/ConfigGUI"

import "./Features/PartyBlacklist"
import "./Features/AutoGFS"
import "./Features/deathmessages"
import "./Features/RngAnnounce"

register("worldLoad", () => {
    ChatLib.chat("&a[PLANT CLIENT] &7loading...")
    ChatLib.chat("&a[PLANT CLIENT] &7loaded!")
});
