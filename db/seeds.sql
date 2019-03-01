insert into users (username, password)
values( ${username}, ${password})

returning username, balance, id;


select *
from users
where username = ${username} and password = ${password};


