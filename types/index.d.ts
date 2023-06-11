import { Reading } from './Reading'
import { Member } from './Member'
import { Meter } from './Meter'
import { BillingPeriod } from './BillingPeriod'
  
  interface EntityTypes  {
    Reading:Reading
    Member:Member
    Meter:Meter
    BillingPeriod:BillingPeriod
  }
  
  export { EntityTypes ,Reading,Member,Meter,BillingPeriod }