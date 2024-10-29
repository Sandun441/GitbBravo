new Vue({
    el: '#app',
    data: {
        posts: [
            { 
                id: 1, 
                title: 'Welcome to Anonymous Forum', 
                content: 'Feel free to share your thoughts and opinions without fear of judgment.', 
                likes: 0 
            }
        ],
        newPost: {
            title: '',
            content: ''
        }
    },
    methods: {
        likePost(post) {
            post.likes++;
        },
        addPost() {
            this.posts.push({
                id: this.posts.length + 1,
                title: this.newPost.title,
                content: this.newPost.content,
                likes: 0
            });
            this.newPost.title = '';
            this.newPost.content = '';
        }
    }
});