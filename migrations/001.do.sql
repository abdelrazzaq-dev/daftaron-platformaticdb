CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    id_number TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    main_address TEXT NOT NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
