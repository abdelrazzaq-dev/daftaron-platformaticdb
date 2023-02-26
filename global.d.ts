import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Member } from './types/Member'
import { Meter } from './types/Meter'
import { Reading } from './types/Reading'
import { Rate } from './types/Rate'
import { Invoice } from './types/Invoice'
import { Payment } from './types/Payment'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    member: Entity<Member>,
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    rate: Entity<Rate>,
    invoice: Entity<Invoice>,
    payment: Entity<Payment>,
  }
}
