const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  }).then((dbCategories) => {
    res.json(dbCategories);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id,
    },
  }).then((dbCategories) => {
    res.json(dbCategories);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body).then((dbCategories) => {
    res.json(dbCategories);
  });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((dbCategories) => {
    res.json(dbCategories);
  });
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbCategories) => {
    res.json(dbCategories);
  });
});

module.exports = router;
