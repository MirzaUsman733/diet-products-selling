import {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
  name: {type:String, required:true,unique: true},
},  {
    versionKey: false,
    timestamps: true, // Combine options into a single object
  });

export const Category = models?.Category || model('Category', CategorySchema);