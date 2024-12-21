import { Schema, model, models } from "mongoose";
import Product from "./marketplace.product";


const CartSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: [false, "Some text not required"]
    },
    products: {
        type: Product,
        enum: Product,
        required: [false, "products might be empty"]
    },
    status: {
        type: String,
        enum: ["pending", "cleared", ""],
        default: "pending"
    },
    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },
    updated_at: {
        type: Date,
        index: true
    }
})

const Cart = models.Product || model("Cart", CartSchema)


export default Cart

