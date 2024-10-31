// home.js
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
        },
        isSidebarOpen: false,  // This controls the sidebar state
        trendingTopics: [
            'Technology',
            'Politics',
            'Science',
            'Entertainment',
            'Sports'
        ],
        notifications: {
            messages: 3,
            alerts: 5
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
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            // Add this line to toggle the class on the sidebar element
            document.querySelector('.sidebar').classList.toggle('sidebar-open');
        }
    }
});