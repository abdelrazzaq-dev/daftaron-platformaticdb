import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Member } from './types/Member'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    member: Entity<Member>,
  }
}
