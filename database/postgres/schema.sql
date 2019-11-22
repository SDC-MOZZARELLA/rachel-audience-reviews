DROP TABLE IF EXISTS reviews CASCADE;
-- DROP SCHEMA IF EXISTS reviews CASCADE;
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE SCHEMA reviews;

CREATE TABLE reviews (review_id INT NOT NULL,review_movie_id INT NOT NULL,review_movie_name VARCHAR(100) NOT NULL,review_rating INT NOT NULL,review_date VARCHAR(40),review_text VARCHAR(500),reviewer_name VARCHAR(40));

\COPY reviews FROM '/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv' WITH CSV HEADER;

\q

--to copy the csv file from the command line:
-- psql -d reviews -c "\copy public.reviews FROM '/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv' WITH CSV HEADER"

--to load this file:
-- psql postgres < database/postgres/schema.sql

-- to load data to a remote host (doesn't work)
-- psql -h ec2-52-12-83-255.us-west-2.compute.amazonaws.com -d reviews -U power_user -c "\copy reviews from '/Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/reviews.csv' WITH CSV HEADER"

-- scp -i 'postgres.pem' /Users/rachnovo/Desktop/HRR41/SDC/rachel-audience-reviews/database/csv/reviews1.csv ec2-user@ec2-52-12-83-255.us-west-2.compute.amazonaws.com:~/data/reviews.csv

-- psql -d reviews -c "\copy public.reviews FROM '~/data/reviews.csv' WITH CSV HEADER"