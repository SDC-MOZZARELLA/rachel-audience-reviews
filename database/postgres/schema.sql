DROP TABLE IF EXISTS reviews CASCADE;
DROP SCHEMA IF EXISTS reviews CASCADE;
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE SCHEMA reviews;

CREATE TABLE reviews (review_id SERIAL NOT NULL,review_movie_id INT NOT NULL,review_movie_name VARCHAR(100) NOT NULL,review_rating INT NOT NULL,review_date VARCHAR(40),review_text VARCHAR(225),reviewer_name VARCHAR(40));

COPY reviews FROM '/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv' WITH CSV;

-- psql -d reviews -c “\copy reviews FROM '/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv' WITH CSV

-- use psql postgres < database/postgres/schema.sql