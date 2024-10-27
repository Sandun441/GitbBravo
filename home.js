new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 1, title: 'Feeling lost in life', content: 'I don’t know what to do with my career.' },
            { id: 2, title: 'Relationship troubles', content: 'My partner and I have been arguing a lot.' },
        ],
        newPost: {
            title: '',
            content: ''
        }
    },
    methods: {
        addPost() {
            if (this.newPost.title && this.newPost.content) {
                const newId = this.posts.length + 1;
                this.posts.push({ id: newId, title: this.newPost.title, content: this.newPost.content });
                this.newPost.title = '';
                this.newPost.content = '';
            }
        }
    }
});