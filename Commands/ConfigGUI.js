import Config from "../Config";

register("command", () => {
    Config.openGUI()
}).setName("plantclient").setAliases(["plant"])