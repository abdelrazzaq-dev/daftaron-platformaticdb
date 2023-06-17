import { Invoice } from './Invoice'
import { Meter } from './Meter'
import { MeterSetting } from './MeterSetting'
import { Reading } from './Reading'
import { InvoiceItem } from './InvoiceItem'
import { Service } from './Service'
import { InvoiceItemWater } from './InvoiceItemWater'
import { ServiceSubscription } from './ServiceSubscription'
import { Payment } from './Payment'
import { Member } from './Member'
  
  interface EntityTypes  {
    Invoice:Invoice
    Meter:Meter
    MeterSetting:MeterSetting
    Reading:Reading
    InvoiceItem:InvoiceItem
    Service:Service
    InvoiceItemWater:InvoiceItemWater
    ServiceSubscription:ServiceSubscription
    Payment:Payment
    Member:Member
  }
  
  export { EntityTypes ,Invoice,Meter,MeterSetting,Reading,InvoiceItem,Service,InvoiceItemWater,ServiceSubscription,Payment,Member }