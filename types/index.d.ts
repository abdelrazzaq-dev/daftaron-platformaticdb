import { Reading } from './Reading'
import { Member } from './Member'
import { Service } from './Service'
import { Meter } from './Meter'
import { BillingPeriod } from './BillingPeriod'
  
  interface EntityTypes  {
    Reading:Reading
    Member:Member
    Service:Service
    Meter:Meter
    BillingPeriod:BillingPeriod
  }
  
  export { EntityTypes ,Reading,Member,Service,Meter,BillingPeriod }