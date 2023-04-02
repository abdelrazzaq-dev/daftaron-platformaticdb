import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, InactiveMeterPayment,Customer,Meter,Reading,BillingPeriod,WaterInvoice,WaterPayment,InactiveMeterCharge,ShartInvoice,ShartInvoiceItem,ShartPayment } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'InactiveMeterPayment' | 'Customer' | 'Meter' | 'Reading' | 'BillingPeriod' | 'WaterInvoice' | 'WaterPayment' | 'InactiveMeterCharge' | 'ShartInvoice' | 'ShartInvoiceItem' | 'ShartPayment'>(schemaId: T): {
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
    inactiveMeterPayment: Entity<InactiveMeterPayment>,
    customer: Entity<Customer>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    billingPeriod: Entity<BillingPeriod>,
    waterInvoice: Entity<WaterInvoice>,
    waterPayment: Entity<WaterPayment>,
    inactiveMeterCharge: Entity<InactiveMeterCharge>,
    shartInvoice: Entity<ShartInvoice>,
    shartInvoiceItem: Entity<ShartInvoiceItem>,
    shartPayment: Entity<ShartPayment>,
  }
}
