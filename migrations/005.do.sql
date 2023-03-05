-- invoice table

CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_date DATE NOT NULL,
  meter_id INTEGER NOT NULL,
  rate_id INTEGER NOT NULL,
  member_id INTEGER NOT NULL,
  previous_reading_id INTEGER NOT NULL,
  current_reading_id INTEGER NOT NULL,
  invoice_amount DECIMAL(10, 2) NOT NULL,
  payment_status VARCHAR(255),
  due_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (meter_id) REFERENCES meters(id),
  FOREIGN KEY (rate_id) REFERENCES rates(id),
  FOREIGN KEY (previous_reading_id) REFERENCES readings(id),
  FOREIGN KEY (current_reading_id) REFERENCES readings(id),
  FOREIGN KEY (member_id) REFERENCES members(id)
);
