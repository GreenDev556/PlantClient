import { Color, padText } from "../BloomCore/utils/Utils";
import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty,
    @NumberProperty,
} from '../Vigilance/index';

@Vigilant("PlantClient", "§aPlant §2Client", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "Solvers", "Floor 7", "Kuudra", "Mining", "Gui", "Party Finder"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)

        this.addDependency("Announce to guild", "Rng Announcer")
        this.addDependency("Death Message Text","Dungeons Death Messages")
        this.addDependency("Party Blacklist","Enable Blacklist")
        this.addDependency("No Key Notifier","Kuudra Notifier")
        this.addDependency("Supply Crates Notifier","Kuudra Notifier")
        this.addDependency("Fuel Cells Notifier","Kuudra Notifier")
        this.addDependency("Kuudra Stunned Notifier","Kuudra Notifier")
        this.addDependency("F7 P1","F7 Phase Messages")
        this.addDependency("F7P1 Message","F7 P1")
        this.addDependency("F7 P2", "F7 Phase Messages")
        this.addDependency("F7P2 Message", "F7 P2")
        this.addDependency("F7 P3", "F7 Phase Messages")
        this.addDependency("F7P3 Message", "F7 P3")
        this.addDependency("F7 P4", "F7 Phase Messages")
        this.addDependency("F7P4 Message", "F7 P4")
        this.addDependency("On Blood Full", "Blood Messages")
        this.addDependency("On Blood Cleared", "Blood Messages")
        this.addDependency("Blood Full Message", "On Blood Full")
        this.addDependency("Blood Cleared Message", "On Blood Cleared")
        this.addDependency("Auto GFS Pearls", "Auto GFS")
        this.addDependency("Auto GFS Jerrys", "Auto GFS")
        this.addDependency("Auto GFS Decoys", "Auto GFS")

        const lines = [
            "",
            "&a/setwindowname <name> &f- &2Sets the name of your minecraft window!",
            "&a/crash &f- &2givs infinit vbuks.",
            "&a/skycrypt &f- &2Automatically opens up the skycrypt page of the specified user.",
            ""
        ]
        const maxLength = Math.max(...lines.map(a => Renderer.getStringWidth(a)))

        this.setCategoryDescription("General", 
            `
            &a&l&nPlant

            ${lines.map(a => a !== "" ? padText(a + "&0", ".", maxLength) : a).join("\n")}

            &2GreenV1 & x45k are very cool and cool
            `
        )



    }

   /*
    Example UI elements!
        @SwitchProperty({
        name: "Hide Lightning",
        description: "Stops lightning from being rendered.",
        category: "General",
        subcategory: "Lightning"
    })
    hideLightning = false

    @SliderProperty({
        name: "Delay",
        description: "Delay before accepting the party invite.",
        category: "General",
        subcategory: "Reparty",
        min: 0,
        max: 1000
    })
    autoRejoinRepartyDelay = 500;

    @ButtonProperty({
        name: "Move Toggle Sprint",
        description: "Move",
        category: "General",
        subcategory: "Toggle Sprint"
    })
    MoveToggleSprint() {
         this.toggleSprintMove.open()
    };

    @TextProperty({
        name: "Sprinting Enabled Text",
        category: "The text to be showed when toggle sprint is enabled",
        category: "General",
        subcategory: "Toggle Sprint",
        placeholder: "Sprinting Enabled"
    })
    toggleSprintText = "";

    @SelectorProperty({
        name: "Highlight Type",
        description: "How to highlight the block for the etherwarp overlay.",
        category: "General",
        subcategory: "Etherwarp",
        options: [
            "Edges",
            "Edges (Phase)",
            "Filled",
            "Filled (Phase)",
            "Both",
            "Both (Phase)"
        ]
    })
    etherwarpHighlightType = 0;

    @ColorProperty({
        name: "Overlay Color",
        description: "The color of the overlay when a valid etherwarp spot is found.",
        category: "General",
        subcategory: "Etherwarp"
    })
    etherwarpOverlayColor = new Color(0, 1, 0, 1);

   */



    // ---------------------------------------------------------------
    // General

    @SwitchProperty({
        name: "Auto GFS",
        description: "Gets specified items from your sacks.",
        category: "General",
        subcategory: "Auto GFS"
    })
    enableAutoGfs = false;

    @SwitchProperty({
        name: "Auto GFS Pearls",
        description: "Automatically gets pearls from sacks if you run out.",
        category: "General",
        subcategory: "Auto GFS"
    })
    enableAutoGfsPearls = false;

    @SwitchProperty({
        name: "Auto GFS Jerrys",
        description: "Automatically gets inflatable jerrys from sacks if you run out.",
        category: "General",
        subcategory: "Auto GFS"
    })
    enableAutoGfsJerrys = false;

    @SwitchProperty({
        name: "Auto GFS Decoys",
        description: "Automatically gets decoys from sacks if you run out.",
        category: "General",
        subcategory: "Auto GFS"
    })
    enableAutoGfsDecoys = false;

    @SwitchProperty({
        name: "Loading Messages",
        description: "Enable/disable the [PLANT CLIENT] loading... messages.",
        category: "General",
        subcategory: "Loading"
    })
    enableloadingmessages = false;

    @SwitchProperty({
        name: "Copy Chat",
        description: "Allows you to copy chat by holding left Ctrl + LMB",
        category: "General",
        subcategory: "Copy Chat"
    })
    enableCopyChat = false;

    @SwitchProperty({
        name: "Hide Lightning",
        description: "Hides lightning.",
        category: "General",
        subcategory: "Misc"
    })
    hideLightning = false;

    // ---------------------------------------------------------------
    // Dungeons

    @SwitchProperty({
        name: "Blood Dialogue Skip",
        description: "Notifies you when to clear blood to skip the dialogue from the watcher.",
        category: "Dungeons",
        subcategory: "General"
    })
    bloodDialogueSkip = false;

    @SwitchProperty({
        name: "Dungeons Death Messages",
        description: "Send a message in partychat when someone dies in a dungeon",
        category: "Dungeons",
        subcategory: "Death Message"
    })
    deathMessage = false;

    @TextProperty({
        name: "Death Message Text",
        description: "The text sent on dungeon death.\nUse {name} to use the dead player's name.\nUse a comma to use many messages.",
        category: "Dungeons",
        subcategory: "Death Message",
        placeholder: "rip bozo"
    })
    deathMessageText = "rip bozo";

    @SwitchProperty({
        name: "Rng Announcer",
        description: "Announces drops from RNG Meter to your party.",
        category: "Dungeons",
        subcategory: "RNG Announcing"
    })
    enableRngAnnounce = false;

    @SwitchProperty({
        name: "Announce to guild",
        description: "Also announce RNG Meter drops to you guild. (Requires Rng Announcer to be on!)",
        category: "Dungeons",
        subcategory: "RNG Announcing"
    })
    enableGuildRngAnnounce = false;

    @SwitchProperty({
        name: "Warp Assurance",
        description: "Warps party when dungeon countdown starts.",
        category: "Dungeons",
        subcategory: "Warping"
    })
    enableWarpAssurance = false;

    @SwitchProperty({
        name: "Warp On Player Kick",
        description: "Warps a player back to a dungeon when they are disconnected. (Will not work if the player got limboed!)",
        category: "Dungeons",
        subcategory: "Warping"
    })
    warpOnPlayerKick = false;

    @SwitchProperty({
        name: "Blood Messages",
        description: "Sends a message when either blood is full, blood has been cleared, or both.",
        category: "Dungeons",
        subcategory: "Blood Room"
    })
    enableBloodMessages = false;

    @SwitchProperty({
        name: "On Blood Full",
        description: "Sends a message when blood has filled.",
        category: "Dungeons",
        subcategory: "Blood Room"
    })
    onBloodFull = false;

    @TextProperty({
        name: "Blood Full Message",
        description: "Message that is sent when blood becomes full.",
        category: "Dungeons",
        subcategory: "Blood Room",
        placeholder: "blood has been cleared hurry up and go in"
    })
    bloodFullMessage = "blood has been cleared hurry up and go in";

    @SwitchProperty({
        name: "On Blood Cleared",
        description: "Sends a message when blood has been cleared.",
        category: "Dungeons",
        subcategory: "Blood Room"
    })
    onBloodClear = false;

    @TextProperty({
        name: "Blood Cleared Message",
        description: "Message that is sent when blood is cleared.",
        category: "Dungeons",
        subcategory: "Blood Room",
        placeholder: "blood is full go clear it fuckers"
    })
    bloodClearedMessage = "blood is full go clear it fuckers";

    @SwitchProperty({
        name: "Livid Finder",
        description: "Finds the correct livid for you.",
        category: "Dungeons",
        subcategory: "Finders"
    })
    lividSolver = false;

    @SwitchProperty({
        name: "Blessings Hider",
        description: "Hides the messages when a player obtains a blessing.",
        category: "Dungeons",
        subcategory: "General"
    })
    hideBlessings = false;

    // ---------------------------------------------------------------
    // Kuudra

    @SwitchProperty({
        name: "Kuudra Notifier",
        description: "Notifies you about chosen alerts during the kuudra boss.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraNotifier = false;

    @SwitchProperty({
        name: "No Key Notifier",
        description: "Notifies you when you do not have a key during kuudra.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraNoKeyNotifier = false;

    @SwitchProperty({
        name: "Supply Crates Notifier",
        description: "Notifies you when supply crates have dropped.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraSupplyCratesNotifier = false;

    @SwitchProperty({
        name: "Fuel Cells Notifier",
        description: "Notifies you when fuel cells have dropped.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraFuelCellsNotifier = false;

    @SwitchProperty({
        name: "Kuudra Stunned Notifier",
        description: "Notifies you when kuudra has been stunned.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraStunnedNotifier = false;

    @SwitchProperty({
        name: "Vanquisher Notifier",
        description: "Notifies you when a vanquisher spawns.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    vanqNotifier = false;

    // ---------------------------------------------------------------
    // Mining

    @SwitchProperty({
        name: "5x Titanium",
        description: "Notifies you when the 5x titanium event is active.",
        category: "Mining",
        subcategory: "Events"
    })
    fiveTimesTitanium = false;

    // ---------------------------------------------------------------
    // Solvers

    // ---------------------------------------------------------------
    // Terminals

    @SwitchProperty({
        name: "F7 Phase Messages",
        description: "Automatically sends a message when you enter F7 phases of your choice.",
        category: "Floor 7",
        subcategory: "Auto Messages"
    })
    f7p2automessag = false;

    @SwitchProperty({
        name: "F7 P1",
        description: "Automatically sends a message when you enter F7P1.",
        category: "Floor 7",
        subcategory: "Auto Messages"
    })
    f7p1automessage = false;

    @TextProperty({
        name: "F7P1 Message",
        description: "Message that is sent when you enter F7P1",
        category: "Floor 7",
        subcategory: "Auto Messages",
        placeholder: "ill rc"
    })
    f7p1custommessage = "";

    @SwitchProperty({
        name: "F7 P2",
        description: "Automatically sends a message when you enter F7P2.",
        category: "Floor 7",
        subcategory: "Auto Messages"
    })
    f7p2automessage = false;

    @TextProperty({
        name: "F7P2 Message",
        description: "Message that is sent when you enter F7P2",
        category: "Floor 7",
        subcategory: "Auto Messages",
        placeholder: "ill yellow pad, someone take green"
    })
    f7p2custommessage = "";

    @SwitchProperty({
        name: "F7 P3",
        description: "Automatically sends a message when you enter F7P3.",
        category: "Floor 7",
        subcategory: "Auto Messages"
    })
    f7p3automessage = false;

    @TextProperty({
        name: "F7P3 Message",
        description: "Message that is sent when you enter F7P3",
        category: "Floor 7",
        subcategory: "Auto Messages",
        placeholder: "ill do devs"
    })
    f7p3custommessage = "";

    @SwitchProperty({
        name: "F7 P4",
        description: "Automatically sends a message when you enter F7P4.",
        category: "Floor 7",
        subcategory: "Auto Messages"
    })
    f7p4automessage = false;

    @TextProperty({
        name: "F7P4 Message",
        description: "Message that is sent when you enter F7P4",
        category: "Floor 7",
        subcategory: "Auto Messages",
        placeholder: "ill ice spray"
    })
    f7p4custommessage = "";

    // ---------------------------------------------------------------
    // GUI

    // ---------------------------------------------------------------
    // Party Finder

    @SwitchProperty({
        name: "Enable Blacklist",
        description: "Kicks players who's names are added to the blacklist.",
        category: "Party Finder",
        subcategory: "Blacklist"
    })
    enableBlacklist = false;

    @TextProperty({
        name: "Party Blacklist",
        description: "Auto kicks names that you choose, separated by spaces.",
        category: "Party Finder",
        subcategory: "Blacklist",
        placeholder: ""
    })
    playerBlacklistNames = "";

    @SwitchProperty({
        name: "Party Finder Full",
        description: "Notifies you when your party is full.",
        category: "Party Finder",
        subcategory: "General"
    })
    partyFullAlert = false;
    
}
export default new Config()