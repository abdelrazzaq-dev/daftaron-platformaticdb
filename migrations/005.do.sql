CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    invoice_hash UUID NOT NULL,
    member_id INTEGER NOT NULL REFERENCES members(id),
    paying_member_id INTEGER NOT NULL REFERENCES members(id),
    invoice_date DATE NOT NULL,
    invoice_due_date DATE NOT NULL,
    invoice_total INTEGER NOT NULL,
    invoice_status TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoice_items (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL REFERENCES invoices(id),
    service_id INTEGER NOT NULL REFERENCES services(id),
    item_name TEXT NOT NULL,
    item_description TEXT NOT NULL,
    item_quantity INTEGER NOT NULL,
    item_price INTEGER NOT NULL,
    item_total INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoice_item_waters (
    id SERIAL PRIMARY KEY,
    invoice_item_id INTEGER NOT NULL REFERENCES invoice_items(id),
    current_reading_id INTEGER NOT NULL REFERENCES readings(id),
    previous_reading_id INTEGER NULL REFERENCES readings(id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
