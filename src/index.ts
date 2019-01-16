import * as DotEnv from "dotenv";

// Import and config dotenv before server is required
DotEnv.config({
    path: `${process.cwd()}/.env`,
});

import Logger from "./helper/logger";
import Server from "./server";

(async () => {
    await Server.start();
})();

// listen on SIGINT signal and gracefully stop the server
process.on("SIGINT", () => {
    Logger.info("Stopping hapi server");

    Server.stop();
});
