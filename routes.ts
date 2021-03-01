import * as express from "express";
import { Logger } from "logger";
import Task from "./task";

class Routes {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.routes();
        this.logger = new Logger();
    }

    private routes(): void {

        // user route
        this.express.use("/", Task);
    }
}

export default new Routes().express;