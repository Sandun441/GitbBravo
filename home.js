// Three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('three-bg').appendChild(renderer.domElement);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x00ff88
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 30;

// Animation
function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.x += 0.0001;
    particlesMesh.rotation.y += 0.0001;
    renderer.render(scene, camera);
}
animate();

// Vue Application
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