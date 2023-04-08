import { ShartInvoice } from './ShartInvoice'
import { Customer } from './Customer'
import { Meter } from './Meter'
import { Reading } from './Reading'
import { BillingPeriod } from './BillingPeriod'
import { WaterInvoice } from './WaterInvoice'
import { WaterInvoiceItem } from './WaterInvoiceItem'
import { WaterPayment } from './WaterPayment'
import { ShartInvoiceItem } from './ShartInvoiceItem'
import { ShartPayment } from './ShartPayment'
  
  interface EntityTypes  {
    ShartInvoice:ShartInvoice
    Customer:Customer
    Meter:Meter
    Reading:Reading
    BillingPeriod:BillingPeriod
    WaterInvoice:WaterInvoice
    WaterInvoiceItem:WaterInvoiceItem
    WaterPayment:WaterPayment
    ShartInvoiceItem:ShartInvoiceItem
    ShartPayment:ShartPayment
  }
  
  export { EntityTypes ,ShartInvoice,Customer,Meter,Reading,BillingPeriod,WaterInvoice,WaterInvoiceItem,WaterPayment,ShartInvoiceItem,ShartPayment }