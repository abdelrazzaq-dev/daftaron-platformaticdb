-- Create Rate table

CREATE TABLE rates (
  id SERIAL PRIMARY KEY,
  rate_name VARCHAR(255) NOT NULL,
  fixed_charge DECIMAL(10, 2) NOT NULL,
  variable_charge DECIMAL(10, 2) NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  max_units INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
