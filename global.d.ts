/// <reference types="@platformatic/db" />
import { EntityHooks } from '@platformatic/sql-mapper'
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

declare module '@platformatic/types' {
  interface PlatformaticApp {
    addEntityHooks(entityName: 'invoice', hooks: EntityHooks<Invoice>): any
    addEntityHooks(entityName: 'invoiceItem', hooks: EntityHooks<InvoiceItem>): any
    addEntityHooks(entityName: 'invoiceItemWater', hooks: EntityHooks<InvoiceItemWater>): any
    addEntityHooks(entityName: 'member', hooks: EntityHooks<Member>): any
    addEntityHooks(entityName: 'meter', hooks: EntityHooks<Meter>): any
    addEntityHooks(entityName: 'meterSetting', hooks: EntityHooks<MeterSetting>): any
    addEntityHooks(entityName: 'operation', hooks: EntityHooks<Operation>): any
    addEntityHooks(entityName: 'payment', hooks: EntityHooks<Payment>): any
    addEntityHooks(entityName: 'project', hooks: EntityHooks<Project>): any
    addEntityHooks(entityName: 'reading', hooks: EntityHooks<Reading>): any
    addEntityHooks(entityName: 'service', hooks: EntityHooks<Service>): any
    addEntityHooks(entityName: 'serviceSubscription', hooks: EntityHooks<ServiceSubscription>): any
  }
}
