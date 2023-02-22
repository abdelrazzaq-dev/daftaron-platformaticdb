import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Meter } from './types/Meter'
import { Reading } from './types/Reading'
import { Member } from './types/Member'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    meter: Entity<Meter>,
    reading: Entity<Reading>,
    member: Entity<Member>,
  }
}
