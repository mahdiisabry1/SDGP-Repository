const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://mahdiisabry:EAGLE123@cluster0.y1ojtyj.mongodb.net/mindforge?retryWrites=true&w=majority&appName=Cluster0",
      connectionParams
    );
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};