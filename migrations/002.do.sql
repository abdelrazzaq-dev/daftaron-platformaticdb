CREATE SEQUENCE IF NOT EXISTS meter_id_seq START WITH 101;
CREATE TABLE meters (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('meter_id_seq'),
    member_id INTEGER NOT NULL REFERENCES members(id),
    meter_no VARCHAR(20) NOT NULL UNIQUE,
    meter_type VARCHAR(20) NOT NULL,
    meter_status VARCHAR(20) NOT NULL,
    meter_address VARCHAR(200) NOT NULL,
    connected_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
