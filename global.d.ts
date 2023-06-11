import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, Member,Meter } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Member' | 'Meter'>(schemaId: T): {
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
    member: Entity<Member>,
    meter: Entity<Meter>,
  }
}
