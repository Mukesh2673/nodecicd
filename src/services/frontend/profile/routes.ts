import { Request, Response } from "express";
import {
  health

} from "./controller";
import config from "config";
const basePath = config.get("BASE_PATH");
const currentPath = "web/profile";
const currentPathURL = basePath + currentPath;


export default [
 
 {
    path: currentPathURL,
    method: "get",
    handler: [
      //checkAuthenticate,
      async (req: Request, res: Response) => {
        const result = await health(req);
        res.status(200).send(result);
      }
    ]
  }, 

];
