import userModel from "../models/userModel.js"

//add items to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = user.cartData || {};

    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error("Add to Cart Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    let cartData = user.cartData || {};

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.error("Remove From Cart Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const cartData = user.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Get Cart Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { addToCart, removeFromCart, getCart };
