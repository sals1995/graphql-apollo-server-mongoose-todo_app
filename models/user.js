import  mongoose from 'mongoose'
import  bcrypt from "bcrypt"

var userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});



userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

var userModel = mongoose.model("User", userSchema);
export default userModel;
