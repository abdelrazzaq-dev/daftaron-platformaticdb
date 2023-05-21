/// <reference path="../global.d.ts" />
"use strict";

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  const { db, sql } = app.platformatic;

  async function sumUnpaidWaterInvoices() {
    const data = await db.query(sql`
      SELECT
        SUM(invoice_amount) AS total_unpaid
      FROM
        water_invoices
      WHERE
        payment_status = 'UNPAID';
    `);
    return data[0];
  }

  async function sumUnpaidShartInvoices() {
    const data = await db.query(sql`
      SELECT
        SUM(invoice_amount) AS total_unpaid
      FROM
        shart_invoices
      WHERE
        payment_status = 'UNPAID';
    `);
    return data[0];
  }

  app.graphql.extendSchema(`
    type TotalUnpaid {
      total_unpaid: Float!
    }

    extend type Query {
      sumUnpaidWaterInvoices: TotalUnpaid!
      sumUnpaidShartInvoices: TotalUnpaid!
    }
  `);

  app.graphql.defineResolvers({
    Query: {
      sumUnpaidWaterInvoices,
      sumUnpaidShartInvoices,
    },
  });
};
