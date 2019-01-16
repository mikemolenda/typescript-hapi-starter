import * as Hapi from "hapi";

export default class Utils {
    public static getUrl(request: Hapi.Request): string {
        return `${request.url.path}`;
    }
}
