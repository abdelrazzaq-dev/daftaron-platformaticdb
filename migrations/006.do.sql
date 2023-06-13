CREATE TABLE IF NOT EXISTS service_subscriptions (
    id SERIAL PRIMARY KEY,
    member_id INTEGER NOT NULL REFERENCES members(id),
    paying_member_id INTEGER NOT NULL REFERENCES members(id),
    service_id INTEGER NOT NULL REFERENCES services(id),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
