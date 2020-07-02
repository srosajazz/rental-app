import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{

  constructor(){
    this.server = express();
    //db connection
    mongoose.connect('mongodb+srv://devapp:devapp@cluster0.yqyna.mongodb.net/devapp?retryWrites=true&w=majority',{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
