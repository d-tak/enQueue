require('dotenv/config');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const argon2 = require('argon2');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());
app.use(staticMiddleware);

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.post('/api/create-profile', (req, res, next) => {
  const { businessLocation, businessEmail, businessHours, businessUserFirstName, businessUserLastName, hashedPassword } = req.body;
  if (!businessLocation || !businessEmail || !businessHours || !businessUserFirstName || !businessUserLastName || !hashedPassword) {
    throw new ClientError(400, 'please complete required fields');
  }

  argon2.hash(hashedPassword)
    .then(hashedPassword => {
      const params = [businessLocation, businessEmail, businessHours, businessUserFirstName, businessUserLastName, hashedPassword];
      const sql = `
    insert into "business" ("businessLocation", "businessEmail", "businessHours", "businessUserFirstName", "businessUserLastName", "hashedPassword")
    values ($1, $2, $3, $4, $5, $6)
    returning "businessId", "businessEmail"
    `;

      db.query(sql, params)
        .then(result => {
          const [firstElement] = result.rows;
          return res.status(201).send(firstElement);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
