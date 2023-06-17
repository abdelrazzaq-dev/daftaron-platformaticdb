CREATE TABLE IF NOT EXISTS meter_settings (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    unit_price NUMERIC(10, 2) NOT NULL,
    connection_fee NUMERIC(10, 2) NOT NULL,
    max_consumption INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE SEQUENCE IF NOT EXISTS meter_id_seq START WITH 101;
CREATE TABLE meters (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('meter_id_seq'),
    member_id INTEGER NOT NULL REFERENCES members(id),
    meter_no VARCHAR(20) NOT NULL UNIQUE,
    meter_setting_id INTEGER NOT NULL REFERENCES meter_settings(id),
    meter_status VARCHAR(20) NOT NULL,
    meter_address VARCHAR(200) NOT NULL,
    connected_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
