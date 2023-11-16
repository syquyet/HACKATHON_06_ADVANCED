import { connection } from "../DB/config.js";

 export const getData = (tableNames) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tableNames}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  