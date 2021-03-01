import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "logger";
import Routes from "./routes";
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');

class App {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

     /* Swagger files start */
     private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
     private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
     private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
     private swaggerDocument = JSON.parse(this.swaggerData);
     /* Swagger files end */

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get("/", (req, res, next) => {
            res.send("API Works!!!!!");
        });

        // user route
        this.express.use("/api", Routes);

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}

export default new App().express;