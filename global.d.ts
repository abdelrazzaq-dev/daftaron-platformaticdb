import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, Invoice,InvoiceItem,InvoiceItemWater,Member,Meter,Reading,Service } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Invoice' | 'InvoiceItem' | 'InvoiceItemWater' | 'Member' | 'Meter' | 'Reading' | 'Service'>(schemaId: T): {
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
    invoice: Entity<Invoice>,
    invoiceItem: Entity<InvoiceItem>,
    invoiceItemWater: Entity<InvoiceItemWater>,
    member: Entity<Member>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    service: Entity<Service>,
  }
}
