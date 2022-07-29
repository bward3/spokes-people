const mongoose = require("mongoose");

mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/spokes-people",
  process.env.MONGODB_URI || "mongodb+srv://AndrewYoung72:andy12345y@cluster0.vcwmv.mongodb.net/bikesDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

module.exports = mongoose.connection;
