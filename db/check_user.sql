select username, user_image, id
from users
where username = ${username} and password = ${password};
