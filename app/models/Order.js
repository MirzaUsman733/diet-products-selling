import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userEmail: String,
  phone: String,
  streetAddress: String,
  postalCode: String,
  city: String,
  country: String,
  cartProducts: Object,
  paid: {type: Boolean, default: false},
},  {
    versionKey: false,
    timestamps: true,
  });

export const Order = models?.Order || model('Order', OrderSchema);