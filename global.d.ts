/// <reference types="@platformatic/db" />
import { EntityTypes, Invoice,InvoiceItem,InvoiceItemWater,Member,Meter,MeterSetting,Operation,Payment,Project,Reading,Service,ServiceSubscription } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Invoice' | 'InvoiceItem' | 'InvoiceItemWater' | 'Member' | 'Meter' | 'MeterSetting' | 'Operation' | 'Payment' | 'Project' | 'Reading' | 'Service' | 'ServiceSubscription'>(schemaId: T): {
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
    meterSetting: Entity<MeterSetting>,
    operation: Entity<Operation>,
    payment: Entity<Payment>,
    project: Entity<Project>,
    reading: Entity<Reading>,
    service: Entity<Service>,
    serviceSubscription: Entity<ServiceSubscription>,
  }
}
