import { InactiveMeterPayment } from './InactiveMeterPayment'
import { Customer } from './Customer'
import { Meter } from './Meter'
import { Reading } from './Reading'
import { BillingPeriod } from './BillingPeriod'
import { WaterInvoice } from './WaterInvoice'
import { WaterPayment } from './WaterPayment'
import { InactiveMeterCharge } from './InactiveMeterCharge'
import { ShartInvoice } from './ShartInvoice'
import { ShartInvoiceItem } from './ShartInvoiceItem'
import { ShartPayment } from './ShartPayment'
  
  interface EntityTypes  {
    InactiveMeterPayment:InactiveMeterPayment
    Customer:Customer
    Meter:Meter
    Reading:Reading
    BillingPeriod:BillingPeriod
    WaterInvoice:WaterInvoice
    WaterPayment:WaterPayment
    InactiveMeterCharge:InactiveMeterCharge
    ShartInvoice:ShartInvoice
    ShartInvoiceItem:ShartInvoiceItem
    ShartPayment:ShartPayment
  }
  
  export { EntityTypes ,InactiveMeterPayment,Customer,Meter,Reading,BillingPeriod,WaterInvoice,WaterPayment,InactiveMeterCharge,ShartInvoice,ShartInvoiceItem,ShartPayment }