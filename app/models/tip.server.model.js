// Load the Mongoose module and Schema object
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define a new SignSchema
const TipSchema = new Schema({
  //
  title: String,
  content: String,

  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
//
mongoose.model("Tip", TipSchema);
