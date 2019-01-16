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
