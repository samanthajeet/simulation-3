insert into users (username, password, balance, user_image)
values( ${username}, ${password})

returning username, balance, id;


