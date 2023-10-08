

var scene = new THREE.scene();
var camera = new THREE.PerspectiveCamera(45,innerWidth/innerHeight, 1,100);


var renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);