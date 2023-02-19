import { Entity } from '@platformatic/sql-mapper';
import { Member } from './types/Member'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    member: Entity<Member>,
  }
}
