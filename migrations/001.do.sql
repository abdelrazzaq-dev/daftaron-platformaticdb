CREATE SEQUENCE customer_id_seq START WITH 101;

CREATE TABLE customers (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('customer_id_seq'),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    father_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    sex VARCHAR(10) NOT NULL,
    address VARCHAR(200) NOT NULL
);

CREATE TABLE billing_periods (
    id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE SEQUENCE meter_id_seq START WITH 101;

CREATE TABLE meters (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('meter_id_seq'),
    customer_id INTEGER NOT NULL,
    serial_number VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    installation_date DATE NOT NULL,
    installation_address VARCHAR(200) NOT NULL,
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers (id)
);

CREATE TABLE readings (
    id SERIAL PRIMARY KEY,
    meter_id INTEGER NOT NULL,
    period_id INTEGER NOT NULL,
    reading_date DATE NOT NULL,
    reading_value INTEGER NOT NULL,
    CONSTRAINT fk_meter_id FOREIGN KEY (meter_id) REFERENCES meters (id),
    CONSTRAINT fk_period_id FOREIGN KEY (period_id) REFERENCES billing_periods (id)
);

CREATE TABLE water_invoices (
    id SERIAL PRIMARY KEY,
    meter_id INTEGER NOT NULL,
    period_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    invoice_date DATE NOT NULL,
    invoice_amount NUMERIC(10, 2) NOT NULL,
    water_unit_price NUMERIC(10, 2) NOT NULL,
    water_unit_count INTEGER NOT NULL,
    payment_status VARCHAR(50) NOT NULL,
    CONSTRAINT fk_meter_id FOREIGN KEY (meter_id) REFERENCES meters (id),
    CONSTRAINT fk_period_id FOREIGN KEY (period_id) REFERENCES billing_periods (id),
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers (id)
);

CREATE TABLE water_invoice_items (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    item_amount NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_invoice_id FOREIGN KEY (invoice_id) REFERENCES water_invoices (id)
);

CREATE TABLE water_payments (
    id SERIAL PRIMARY KEY,
    period_id INTEGER NOT NULL,
    invoice_id INTEGER NOT NULL,
    payment_date DATE NOT NULL,
    payment_amount NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_invoice_id FOREIGN KEY (invoice_id) REFERENCES water_invoices (id),
    CONSTRAINT fk_period_id FOREIGN KEY (period_id) REFERENCES billing_periods (id)
);

CREATE TABLE shart_invoices (
    id SERIAL PRIMARY KEY,
    period_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    invoice_date DATE NOT NULL,
    invoice_amount NUMERIC(10, 2) NOT NULL,
    payment_status VARCHAR(50) NOT NULL,
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT fk_period_id FOREIGN KEY (period_id) REFERENCES billing_periods (id)
);

CREATE TABLE shart_invoice_items (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    item_amount NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_invoice_id FOREIGN KEY (invoice_id) REFERENCES shart_invoices (id)
);

CREATE TABLE shart_payments (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL,
    period_id INTEGER NOT NULL,
    payment_date DATE NOT NULL,
    payment_amount NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_invoice_id FOREIGN KEY (invoice_id) REFERENCES shart_invoices (id),
    CONSTRAINT fk_period_id FOREIGN KEY (period_id) REFERENCES billing_periods (id)
);
