import { Member } from './Member'
import { Meter } from './Meter'
import { MeterSetting } from './MeterSetting'
import { Reading } from './Reading'
import { Invoice } from './Invoice'
import { InvoiceItem } from './InvoiceItem'
import { Service } from './Service'
import { InvoiceItemWater } from './InvoiceItemWater'
import { ServiceSubscription } from './ServiceSubscription'
import { Payment } from './Payment'
  
  interface EntityTypes  {
    Member:Member
    Meter:Meter
    MeterSetting:MeterSetting
    Reading:Reading
    Invoice:Invoice
    InvoiceItem:InvoiceItem
    Service:Service
    InvoiceItemWater:InvoiceItemWater
    ServiceSubscription:ServiceSubscription
    Payment:Payment
  }
  
  export { EntityTypes ,Member,Meter,MeterSetting,Reading,Invoice,InvoiceItem,Service,InvoiceItemWater,ServiceSubscription,Payment }