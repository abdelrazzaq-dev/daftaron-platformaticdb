import { Invoice } from './Invoice'
import { InvoiceItem } from './InvoiceItem'
import { InvoiceItemWater } from './InvoiceItemWater'
import { Member } from './Member'
import { Meter } from './Meter'
import { MeterSetting } from './MeterSetting'
import { Operation } from './Operation'
import { Payment } from './Payment'
import { Project } from './Project'
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
    Operation:Operation
    Payment:Payment
    Project:Project
    Reading:Reading
    Service:Service
    ServiceSubscription:ServiceSubscription
  }
  
  export { EntityTypes ,Invoice,InvoiceItem,InvoiceItemWater,Member,Meter,MeterSetting,Operation,Payment,Project,Reading,Service,ServiceSubscription }