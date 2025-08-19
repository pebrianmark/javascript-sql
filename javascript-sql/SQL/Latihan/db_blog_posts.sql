
-- jawaban soal no 1
create database db_blog_posts;

use db_blog_posts;
drop database db_blog_posts;

-- jawaban no 2
CREATE TABLE USERS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100)
);

-- Tabel BLOG_POSTS
CREATE TABLE BLOG_POSTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    body TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES USERS(id)
);

-- Tabel CATEGORIES
CREATE TABLE CATEGORIES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100)
);

-- Tabel POST_CATEGORIES (tabel relasi many-to-many)
CREATE TABLE POST_CATEGORIES (
    post_id INT,
    category_id INT,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES BLOG_POSTS(id),
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(id)
);

-- jawaban soal no 3
INSERT INTO USERS (nama) VALUES
('John Doe'),
('Robert'),
('Frank'),
('Jane');

select * from users;

INSERT INTO BLOG_POSTS (title, body, author_id) VALUES
('Algorithm', 'this is article for algorithm', 1),
('Lorem Ipsum', 'lorem ipsum dolor sit amet', 1),
('NodeJS', 'Node.js is a JavaScript runtime built on Chrome''s V8 JavaScript engine.', 2),
('ReactJS', 'ReactJS is JavaScript library for building user interfaces', 4),
('Git', 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency', 3),
('Basketball', 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender''s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop', 2);

select * from blog_posts;

INSERT INTO CATEGORIES (nama) VALUES
('Basic'),
('Library'),
('Unknown'),
('Sport');

select * from categories;

INSERT INTO POST_CATEGORIES (post_id, category_id) VALUES
(1, 1),
(2, 3),
(3, 1),
(3, 2),
(4, 2),
(4, 1),
(5, 1),
(6, 4);

select * from post_categories;

-- jawaban soal no 4
SELECT 
    BLOG_POSTS.id AS id,
    BLOG_POSTS.title,
    BLOG_POSTS.body,
    BLOG_POSTS.author_id,
    USERS.id AS id,
    USERS.nama AS author_name
FROM 
BLOG_POSTS
JOIN 
USERS ON BLOG_POSTS.author_id = USERS.id
WHERE 
    USERS.nama = 'John Doe';
    
    -- jawaban soal no 5

select c.nama as category_name, b.title as post_title,

 u.nama as author_name

from categories c

join post_categories p

on c.id = p.category_id

join blog_posts b

on b.id = p.post_id

join users u 
on u.id = b.author_id
where c.nama = 'basic';


-- jawaban no 6

select c.nama as "Category Name", b.title as "Post Title",
body
from categories c

join post_categories p
	on c. id = p.category_id

join blog_posts b
	on p.post_id = b.id
join users u
	on u.id = b.author_id
    
where u.nama IN ('Robert', 'Frank');

-- jawaban no 7

 select u.nama as "author name", c.nama as "category name "
 
 from users u

join blog_posts b

on u.id = b.author_id

join post_categories p

on b.id = p.post_id

join categories c

on p.category_id = c.id

where b.id in (

select p.post_id

from post_categories p

group by post_id

having count(category_id) >= 2);


-- jawaban no 8