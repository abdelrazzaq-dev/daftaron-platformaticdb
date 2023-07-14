CREATE TYPE operation_type AS ENUM ('INCOME', 'EXPENSE');

CREATE TABLE IF NOT EXISTS operations (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL REFERENCES projects(id),
    operation_date DATE NOT NULL,
    operation_hash UUID UNIQUE NOT NULL,
    operation_description TEXT NOT NULL,
    operation_amount DECIMAL(10, 2) NOT NULL,
    operation_type operation_type NOT NULL,
    operation_status TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
