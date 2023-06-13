import { Reading } from './Reading'
import { InvoiceItemWater } from './InvoiceItemWater'
import { Member } from './Member'
import { ServiceSubscription } from './ServiceSubscription'
import { Service } from './Service'
import { Meter } from './Meter'
import { Invoice } from './Invoice'
import { InvoiceItem } from './InvoiceItem'
  
  interface EntityTypes  {
    Reading:Reading
    InvoiceItemWater:InvoiceItemWater
    Member:Member
    ServiceSubscription:ServiceSubscription
    Service:Service
    Meter:Meter
    Invoice:Invoice
    InvoiceItem:InvoiceItem
  }
  
  export { EntityTypes ,Reading,InvoiceItemWater,Member,ServiceSubscription,Service,Meter,Invoice,InvoiceItem }