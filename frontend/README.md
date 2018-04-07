# READABLE

This project is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## How to run the project

### `cd frontend`
Gets you into the frontend directory

### `npm install`
Installs frontend server dependencies from package.json

### `npm start`
Runs the frontend server app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Backend Development Server

This web app requires a [backend development server](https://github.com/udacity/reactnd-project-readable-starter).
After running the api-server check the port its running on http://localhost:3001 if itd different change the api url in /util/api.js file on firt line of the file.

## Why this project?
This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit. By building this project, you will gain an understanding of how Redux can function in a standard type of application.

## How to Use the App

### Root View
On the root view of the app all posts are displayed with title, author, number of comments, current score, and users can upvote or downvote the post. User can also edit or delete a post, and sort by date or by score.

### Category View
All posts for a category are listed at /:category/posts
Category view works same as root, just it lists posts of specific category.

### Post Details View
Post detail is available at /:category/:post_id
Post is displayed with title, body, author, number of comments, current score and users can upvote or downvote the post. User can also edit or delete the post.

All Post comments are displayed with author, current score, and users can upvote or downvote the comment. User can also edit or delete the comment.

#### Add Post View
Add Post is available at /newPost
A form for creating a new post with title, author, category, body.
Post is added to specified category and 

### Navigation
User can navigate between categories, main page and post detail pages without typing address in the address bar.


### License
*This project is licensed under the terms of the MIT license.*