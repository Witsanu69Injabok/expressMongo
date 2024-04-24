const Product = require("../Models/product");
exports.read = async (req, res) => {
  try {
    // res.send("Hello, List!");
    let id = req.params.id;
    const products = await Product.findOne({ _id: id }).exec();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
  try {
    // res.send("Hello, List!");
    const products = await Product.find({}).exec();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const productNew = await Product(req.body).save();
    res.send(productNew);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
exports.update = async (req, res) => {
  try {
    let id = req.params.id;
    const updated = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.send(updated);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    let id = req.params.id;

    const deleted = await Product.findOneAndDelete({ _id: id }).exec();
    res.send(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
