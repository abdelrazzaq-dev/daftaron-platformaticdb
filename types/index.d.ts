import { Member } from './Member'
import { Meter } from './Meter'
import { MeterSetting } from './MeterSetting'
import { Reading } from './Reading'
import { Invoice } from './Invoice'
import { ServiceSubscription } from './ServiceSubscription'
import { InvoiceItem } from './InvoiceItem'
import { Service } from './Service'
import { InvoiceItemWater } from './InvoiceItemWater'
import { Payment } from './Payment'
  
  interface EntityTypes  {
    Member:Member
    Meter:Meter
    MeterSetting:MeterSetting
    Reading:Reading
    Invoice:Invoice
    ServiceSubscription:ServiceSubscription
    InvoiceItem:InvoiceItem
    Service:Service
    InvoiceItemWater:InvoiceItemWater
    Payment:Payment
  }
  
  export { EntityTypes ,Member,Meter,MeterSetting,Reading,Invoice,ServiceSubscription,InvoiceItem,Service,InvoiceItemWater,Payment }