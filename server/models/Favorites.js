const { Schema, Types } = require("mongoose");

const favoritesSchema = new Schema(
  {
    favoritesId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    lat: {
      type: Number,
    },
    long: {
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
