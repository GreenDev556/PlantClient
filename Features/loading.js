import config from "../Config"

register("worldLoad", () => {
    if (!config().enableloadingmessages) return
    ChatLib.chat("&a[PLANT CLIENT] &7loading...")
    setTimeout(() => {ChatLib.chat("&a[PLANT CLIENT] &7loaded!")}, 500)
});