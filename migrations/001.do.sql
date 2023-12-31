CREATE SEQUENCE IF NOT EXISTS member_id_seq START WITH 101;
CREATE TABLE members (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('member_id_seq'),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    father_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    sex VARCHAR(10) NOT NULL,
    address VARCHAR(200) NOT NULL,
    joined_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
