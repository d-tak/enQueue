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

app.post('/api/business', (req, res, next) => {
  const { businessLocation, businessEmail, businessHours, businessName, hashedPassword } = req.body;
  if (!businessLocation || !businessEmail || !businessHours || !businessName || !hashedPassword) {
    throw new ClientError(400, 'please complete required fields');
  }

  argon2.hash(hashedPassword)
    .then(hashedPassword => {
      const params = [businessLocation, businessEmail, businessHours, businessName, hashedPassword];
      const sql = `
    insert into "business" ("businessLocation", "businessEmail", "businessHours", "businessName", "hashedPassword")
    values ($1, $2, $3, $4, $5)
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

app.post('/api/patron-info', (req, res, next) => {
  const { businessId, patronETA, patronPartySize, patronFirstName, patronLastName, patronMobile, patronComments } = req.body;
  if (!businessId || !patronETA || !patronPartySize || !patronFirstName || !patronLastName || !patronMobile || !patronComments) {
    throw new ClientError(400, 'please complete required fields');
  }

  const params = [businessId, patronETA, patronPartySize, patronFirstName, patronLastName, patronMobile, patronComments];
  const sql = `
    insert into "waitList" ("businessId", "patronETA", "patronPartySize", "patronFirstName", "patronLastName", "patronMobile", "patronComments")
    values ($1, $2, $3, $4, $5, $6, $7)
    returning "patronWaitId", "patronFirstName";
    `;

  db.query(sql, params)
    .then(result => {
      const [firstElement] = result.rows;
      return res.status(201).send(firstElement);
    })
    .catch(err => next(err));
});

app.get('/api/business/:businessId', (req, res, next) => {
  const { businessId } = req.params;
  const sql = `
    select  "businessName",
            "businessLocation",
            "businessEmail",
            "businessHours"
      from  "business"
     where  "businessId" = $1
  `;

  const params = [businessId];

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
