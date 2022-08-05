const { Schema, Types } = require("mongoose");

const favoritesSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

module.exports = favoritesSchema;
