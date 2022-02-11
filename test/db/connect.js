const chai = require('chai')

const { MongoClient } = require('mongodb')

const should = chai.should();
const { expect } = chai

const configProd = require('../../server/config').production;

describe('The DSN', () => {
    it('should be configured for production', async () => {
        expect(configProd.database.dsn).to.be.a('string')
    })
})

describe('The database', () => {
    it('production should be reachable', async () => {
        const db = await MongoClient.connect(configProd.database.dsn)
        expect(db).to.not.be.null
        await db.close()
    })
})