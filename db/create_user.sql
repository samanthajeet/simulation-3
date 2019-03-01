insert into users (username, password, user_image)
values( ${username}, ${password}, 'https://researchbreeder.com/images/Samoyed-puppy-picture.jpg')

returning username, id, user_image