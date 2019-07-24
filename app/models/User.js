const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    username: String,
    // password: String,

    course: {
      type: String,
      enum: ["WebDev", "UX", "Data"]
    },
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Amsterdam"]
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "username" });

module.exports = model("User", userSchema);
