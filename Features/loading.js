import Config from "../Config"

register("worldLoad", () => {
    if (!Config.enableloadingmessages) return
    ChatLib.chat("&a[PLANT CLIENT] &7loading...")
    setTimeout(() => {ChatLib.chat("&a[PLANT CLIENT] &7loaded!")}, 500)
});