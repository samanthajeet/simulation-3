select posts.post_title, posts.post, users.username, users.user_image
from posts 
join users 
on users.id = posts.user_id;