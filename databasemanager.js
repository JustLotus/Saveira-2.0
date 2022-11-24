const { Mongosha, Database, Client } = require("mongosha");

module.exports = class DatabaseManager {
    /**
     * @type {Client}
     */
    static Client;
    /**
     * @type {Database}
     */
    static Database;

    static async init() {
        let client = DatabaseManager.Client = await Mongosha.connect("XXX");
        DatabaseManager.Database = client.database("rpg_bot2");
    }
}
