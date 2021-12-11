const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();
const redisClient = require('../configs/redis')


router.get("/", async (req, res) => {
  redisClient.get("products_data", async (error, data) => {
    if (err) console.log(err)
    if (data) return res.status(200).send(JSON.parse(data))
  })

  const products = await Product.find().lean().exec();
  redisClient.set("products_data", JSON.stringify(products))
  return res.send(products);
});
router.get("/:id", async (req, res) => {
  redisClient.get(`products_data.${req.params.id}`, async (error, data) => {
    if (err) console.log(err)
    if (data) return res.status(200).send(JSON.parse(data))
  })

  const product = await Product.findById(req.params.id).lean().exec();
  redisClient.set(`products_data.${req.params.id}`, JSON.stringify(product))
  return res.send(product);
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    

    const products = await Product.find().lean().exec();
    redisClient.set("products_data", JSON.stringify(products))
    return res.status(201).json( product );
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    redisClient.set(`products_data.${req.params.id}`, JSON.stringify(product))
    const products = await Product.find().lean().exec();
    redisClient.set("products_data", JSON.stringify(products))
    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    redisClient.del(`products_data.${req.params.id}`)
    const products = await Product.find().lean().exec();
    redisClient.set("products_data", JSON.stringify(products))
    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
