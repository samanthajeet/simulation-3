select posts.post_title, posts.post, users.username, users.user_image, users.id
from posts 
join users 
on users.id = posts.user_id
where posts.post_id = ${post_id}