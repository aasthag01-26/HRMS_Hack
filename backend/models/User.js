const mongoose = require("mongoose");
const passportLocalMongoose =
  require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "employee"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "employeeId",
});

module.exports = mongoose.model("User", userSchema);
