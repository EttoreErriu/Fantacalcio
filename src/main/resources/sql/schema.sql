
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    email VARCHAR(64),
    password VARCHAR(64)

)

CREATE TABLE IF NOT EXISTS championships (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64)
)


CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    user_id INTEGER REFERENCES users (id),
    championship_id INTEGER REFERENCES championships (id)
)

CREATE TABLE IF NOT EXISTS matches (
    id SERIAL PRIMARY KEY,
    homegol INTEGER,
    awaygol INTEGER,
    matchesnumber INTEGER,
    team_id INTEGER REFERENCES teams (id)
)

CREATE TABLE IF NOT EXISTS realPlayers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    surname VARCHAR(64),
    realTeam VARCHAR(64),
    position VARCHAR(64),
    team_id INTEGER REFERENCES teams (id)
)

CREATE TABLE IF NOT EXISTS leagueTables (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams (id),
    game VARCHAR(64),
    win VARCHAR(64),
    draw VARCHAR(64),
    lose VARCHAR(64),
    goalScored VARCHAR(64),
    goalConceded VARCHAR(64),
    point VARCHAR(64),
    championship_id  INTEGER REFERENCES championships (id)
)

CREATE TABLE IF NOT EXISTS formations (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams (id),
    realPlayer_id INTEGER REFERENCES realPlayers (id)
)

