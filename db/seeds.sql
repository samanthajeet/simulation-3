insert into users (username, password)
values( ${username}, ${password})

returning username, balance, id;


select *
from users
where username = ${username} and password = ${password};


create table posts(
    post_id serial primary key,
    user_id integer references users(id),
    post_title varchar(255),
    post text
);

insert into posts(user_id, post_title, post)
values(14, 'Am I Beyonce?', 'I am');


select posts.post_title, posts.post, users.username, users.user_image
from posts 
join users 
on users.id = posts.user_id;

select posts.post_title, posts.post, users.username, users.user_image 
from posts 
join users 
on users.id = posts.user_id
where posts.post ilike '%I%'