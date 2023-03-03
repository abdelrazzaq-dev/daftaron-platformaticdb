-- Create meters squences
CREATE SEQUENCE IF NOT EXISTS meters_id_seq
    START WITH 101
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- CREATE METERS TABLE
CREATE TABLE IF NOT EXISTS meters (
    id INTEGER PRIMARY KEY DEFAULT nextval('meters_id_seq'),
    label TEXT NOT NULL,
    serial_id TEXT NOT NULL,
    member_id INTEGER NOT NULL,
    connected_address TEXT NOT NULL,
    connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members(id)
);
