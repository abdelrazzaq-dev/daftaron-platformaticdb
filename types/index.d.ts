import { Reading } from './Reading'
import { InvoiceItemWater } from './InvoiceItemWater'
import { Member } from './Member'
import { Service } from './Service'
import { Meter } from './Meter'
import { Invoice } from './Invoice'
import { InvoiceItem } from './InvoiceItem'
  
  interface EntityTypes  {
    Reading:Reading
    InvoiceItemWater:InvoiceItemWater
    Member:Member
    Service:Service
    Meter:Meter
    Invoice:Invoice
    InvoiceItem:InvoiceItem
  }
  
  export { EntityTypes ,Reading,InvoiceItemWater,Member,Service,Meter,Invoice,InvoiceItem }