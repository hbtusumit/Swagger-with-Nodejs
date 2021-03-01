
import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "logger";
const randomId = require("random-id");

class Task {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public tasks: any[]  = [
        {
          id: 1,
          task: 'task1',
          assignee: 'assignee1000',
          status: 'completed'
        },
        {
          id: 2,
          task: 'task2',
          assignee: 'assignee1001',
          status: 'completed'
        },
        {
          id: 3,
          task: 'task3',
          assignee: 'assignee1002',
          status: 'completed'
        },
        {
          id: 4,
          task: 'task4',
          assignee: 'assignee1000',
          status: 'completed'
        },
        
      ];

    constructor() {
        this.express = express();
        this.routes();
        this.logger = new Logger();
    }

    private routes(): void {

        // request to get all the users
        // this.express.get("/todos", (req, res, next) => {
        //     //this.logger.info("url:" + req.url);
        //     res.json(this.tasks);
        // });

        // // request to get all the users by userName
        // this.express.put("/todos/:id", (req, res, next) => {
        //     //this.logger.info("url:::::" + req.url);
        //     const taskToUpdate = req.body.task;
        //     this.tasks = this.tasks.map(task => {
        //         if (task.id == req.params.id) {
        //             taskToUpdate.id = req.params.id;
        //             task = taskToUpdate;
        //         }
        //         return task;
        //     });
        //     res.json(this.tasks);
        // });

        

        // this.express.post("/todo", (req, res, next) => {
        //    // this.logger.info("url:::::::" + req.url);
        //     const task = req.body.task;
        //     task.id = randomId(10);
        //     this.tasks.push(task);
        //     res.json(this.tasks);
        // });

        // this.express.delete("/todo/:id", (req, res, next) => {
        //    // this.logger.info("url:::::::" + req.url);
        //     const task = req.body.task;
        //     this.tasks = this.tasks.filter(task => task.id != req.params.id);
        //     res.json(this.tasks);
        // });
    }
}

export default new Task().express;