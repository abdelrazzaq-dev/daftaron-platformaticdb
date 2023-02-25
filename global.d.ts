import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Member } from './types/Member'
import { Meter } from './types/Meter'
import { Reading } from './types/Reading'
import { Invoice } from './types/Invoice'
import { Rate } from './types/Rate'
import { Payment } from './types/Payment'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    member: Entity<Member>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    invoice: Entity<Invoice>,
    rate: Entity<Rate>,
    payment: Entity<Payment>,
  }
}
