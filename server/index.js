const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Initialize an variable called app
const app = express();
app.use(cors());

// Body parser to parse request data (raw and form submission)
// Note that this must be written at the top of index.js, before the routing code
// Else it will not work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce",
});

/* To test connection 
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

  app.get("/",(req,res) => {
    connection.query('SELECT * from category LIMIT 1', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});*/

app.get("/category", (req, res) => {
  const sqlSelect = "SELECT * FROM category";
  connection.query(sqlSelect, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No category found" });
    }
  });
});

app.get("/category/:id", (req, res) => {
  const sqlSelect = `SELECT * FROM product WHERE qty > 0 AND category_id = ${req.params.id}`;
  connection.query(sqlSelect, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No product found" });
    }
  });
});

app.get("/product/detail/:id", (req, res) => {
  const sqlSelect = `SELECT * FROM product WHERE qty > 0 AND id = ${parseInt(
    req.params.id
  )}`;
  connection.query(sqlSelect, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No product detail found" });
    }
  });
});

app.get("/product/category/:id", (req, res) => {
  const sqlSelect = `SELECT * FROM product where qty > 0 AND category_id = ${parseInt(
    req.params.id
  )}`;
  connection.query(sqlSelect, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No product found" });
    }
  });
});

app.post("/login", (req, res) => {
  const username = `${req.body.username}`;
  const password = `${req.body.password}`;
  const sqlSelect = `SELECT id FROM Customer where username = ? and password = ?`;
  connection.query(sqlSelect, [username, password], (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No customer found" });
    }
  });
});

// Create order
app.post("/addToCart", (req, res) => {
  const customerId = `${req.body.userId}`;
  const productId = `${req.body.productId}`;
  const status = "PENDING";

  const sqlSelect = `SELECT * FROM product where id = ? `;
  connection.query(sqlSelect, [productId], (err, result) => {
    if (!err) {
      let productQty = result[0].qty;
      let productUnitPrice = result[0].price;

      // Check if product already exist in cart. If yes, increment
      const sqlSelect = `SELECT * FROM orders where customer_id = ? and product_id = ? and status = 'PENDING' `;
      connection.query(sqlSelect, [customerId, productId], (err, result) => {
        // If no error
        if (!err) {
          let cartQty;
          const existingCartData = result;

          if (existingCartData.length > 0) {
            // if exist, update cart
            let orderId = existingCartData[0].order_id;
            cartQty = existingCartData[0].qty + 1;

            if (cartQty <= productQty) {
                const sqlSelect = `UPDATE orders SET qty = ? WHERE order_id = ?`;
                connection.query(sqlSelect, [cartQty, orderId], (err, result) => {
                // If no error
                if (!err) {
                    res.status(200).json({ msg: "Update cart qty" });
                } else {
                    res.status(400).json({ msg: "Error when updating cart" });
                }
                });
            }
            else {
                res.status(400).json({ msg: "Insufficent quantity" });
            }
          } else {
            cartQty = 1;
            const sqlSelect = `INSERT INTO orders(customer_id, product_id, qty, unit_price, status, created_date) VALUES (?, ?, ?, ?, ?, NOW())`;
            connection.query(
              sqlSelect,
              [customerId, productId, cartQty, productUnitPrice, status],
              (err, result) => {
                // If no error
                if (!err) {
                    res.status(200).json({ msg: "Added item to cart" });
                } else {
                  res.status(400).json({ msg: "Error when adding to cart" });
                }
              }
            );
          }
        } else {
          res.status(400).json({ msg: "Error when retrieving cart" });
        }
      });
    } else {
      res
        .status(400)
        .json({ msg: "Unable to add to cart due to product not found" });
    }
  });
});

app.get("/cart/:id", (req, res) => {
  const sqlSelect = `SELECT o.order_id, o.customer_id, o.product_id, o.qty, o.unit_price, p.title, p.image FROM ORDERS O LEFT JOIN PRODUCT P ON O.PRODUCT_ID = P.ID WHERE STATUS = 'PENDING' AND CUSTOMER_ID = ${parseInt(
    req.params.id
  )}`;
  connection.query(sqlSelect, (err, result) => {
    // If no error
    if (!err) {
      res.json(result);
    } else {
      res.status(400).json({ msg: "No item found in shopping cart" });
    }
  });
});

// Such config info should be stored in another config file.
// process.env.PORT is used because when we deploy, the server may not be using 5000
const PORT = process.env.PORT || 5000;

// listen() is to listen to a port
// Second parameter is a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
