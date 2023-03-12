import { Member } from './Member'
import { Meter } from './Meter'
import { Reading } from './Reading'
import { Invoice } from './Invoice'
import { Rate } from './Rate'
import { Payment } from './Payment'
  
  interface EntityTypes  {
    Member:Member
    Meter:Meter
    Reading:Reading
    Invoice:Invoice
    Rate:Rate
    Payment:Payment
  }
  
  export { EntityTypes ,Member,Meter,Reading,Invoice,Rate,Payment }