import mongoose, { model, models, Schema } from "mongoose";

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new Schema({
  image: {type: String},
  name: { type: String },
  productDetail: { type: String },
  direction: { type: String },
  category: { type: mongoose.Types.ObjectId },
  basePrice: { type: Number },
  description: {type: String},
  sizes: { type: [ExtraPriceSchema] },
  extraIngredientPrices: { type: [ExtraPriceSchema] },
}, {
  versionKey: false,
  timestamps: true,
});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);