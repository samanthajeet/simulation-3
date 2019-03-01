select posts.post_title, posts.post, users.username, users.user_image, posts.post_id
from posts 
join users 
on users.id = posts.user_id;