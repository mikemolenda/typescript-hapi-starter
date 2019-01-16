export default {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
    logLevel: process.env.LOG_LEVEL || "info",
    nodeEnv: process.env.NODE_ENV || "development",
    swagger: {
        options: {
            jsonEditor: true,
            info: {
                title: "API Documentation",
                version: "v1.0.0",
                contact: {
                    name: "John doe",
                    email: "johndoe@johndoe.com"
                }
            },
            grouping: "tags",
            sortEndpoints: "ordered"
        }
    },
    status: {
        options: {
            path: "/status",
            title: "API Monitor",
            routeConfig: {
                auth: false
            }
        }
    }
};
