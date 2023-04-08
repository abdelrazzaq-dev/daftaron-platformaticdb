import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, ShartInvoice,Customer,Meter,Reading,BillingPeriod,WaterInvoice,WaterInvoiceItem,WaterPayment,ShartInvoiceItem,ShartPayment } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'ShartInvoice' | 'Customer' | 'Meter' | 'Reading' | 'BillingPeriod' | 'WaterInvoice' | 'WaterInvoiceItem' | 'WaterPayment' | 'ShartInvoiceItem' | 'ShartPayment'>(schemaId: T): {
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
    shartInvoice: Entity<ShartInvoice>,
    customer: Entity<Customer>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    billingPeriod: Entity<BillingPeriod>,
    waterInvoice: Entity<WaterInvoice>,
    waterInvoiceItem: Entity<WaterInvoiceItem>,
    waterPayment: Entity<WaterPayment>,
    shartInvoiceItem: Entity<ShartInvoiceItem>,
    shartPayment: Entity<ShartPayment>,
  }
}
