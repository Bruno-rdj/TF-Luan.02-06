CREATE TABLE IF NOT EXISTS documentos (
    id SERIAL PRIMARY KEY,
    documento VARCHAR(255) NOT NULL,
    id_user INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

-- Inserindo alguns documentos de exemplo
INSERT INTO documentos (documento, id_user) VALUES
('exemplo1.pdf', 1),
('exemplo2.pdf', 2);