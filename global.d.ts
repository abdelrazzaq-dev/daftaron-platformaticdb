import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, BillingPeriod,Customer,Meter,Reading,ShartInvoice,ShartInvoiceItem,ShartPayment,WaterInvoice,WaterInvoiceItem,WaterPayment } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'BillingPeriod' | 'Customer' | 'Meter' | 'Reading' | 'ShartInvoice' | 'ShartInvoiceItem' | 'ShartPayment' | 'WaterInvoice' | 'WaterInvoiceItem' | 'WaterPayment'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

declare module '@platformatic/sql-mapper' {
  interface Entities {
    billingPeriod: Entity<BillingPeriod>,
    customer: Entity<Customer>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    shartInvoice: Entity<ShartInvoice>,
    shartInvoiceItem: Entity<ShartInvoiceItem>,
    shartPayment: Entity<ShartPayment>,
    waterInvoice: Entity<WaterInvoice>,
    waterInvoiceItem: Entity<WaterInvoiceItem>,
    waterPayment: Entity<WaterPayment>,
  }
}
