import { Invoice } from './Invoice'
import { InvoiceItem } from './InvoiceItem'
import { InvoiceItemWater } from './InvoiceItemWater'
import { Member } from './Member'
import { Meter } from './Meter'
import { MeterSetting } from './MeterSetting'
import { Payment } from './Payment'
import { Reading } from './Reading'
import { Service } from './Service'
import { ServiceSubscription } from './ServiceSubscription'
  
  interface EntityTypes  {
    Invoice:Invoice
    InvoiceItem:InvoiceItem
    InvoiceItemWater:InvoiceItemWater
    Member:Member
    Meter:Meter
    MeterSetting:MeterSetting
    Payment:Payment
    Reading:Reading
    Service:Service
    ServiceSubscription:ServiceSubscription
  }
  
  export { EntityTypes ,Invoice,InvoiceItem,InvoiceItemWater,Member,Meter,MeterSetting,Payment,Reading,Service,ServiceSubscription }