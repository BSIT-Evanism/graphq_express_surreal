import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

const schema = require("./schema/schema");
const app = express();
const port = 8080;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req: any,res: any ) => {
  res.send("Hello World, Hello Again,test")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
