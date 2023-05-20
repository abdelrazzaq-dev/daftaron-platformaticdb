/// <reference path="../global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
    const {db, sql} = app.platformatic
    async function getMonthlyWaterConsumption() {
        return await db.query(sql`
            SELECT
                DATE_TRUNC('month', reading_date) AS month,
                SUM(reading_value) AS total_consumption
            FROM
                readings
            GROUP BY
                month
            ORDER BY
                month ASC;
        `)
    }

    app.get('/monthly-water-consumption', async function () {
        return {data: await getMonthlyWaterConsumption()}
    })
}
