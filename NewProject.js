const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
scene.background = new THREE.Color(0x6A84CD);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Mouse control
let controls = new THREE.OrbitControls( camera, renderer.domElement );
//let clock = new THREE.Clock();
//let controls = new THREE.FirstPersonControls(camera, renderer.domElement);
//controls.lockSpeed = 1;

//Keyboard control
document.body.onkeydown = function(evt) {
    if (evt.key == 'a') {
        camera.position.x += 0.1;
    }
    else if (evt.key == 'd') {
        camera.position.x -= 0.1;
    }
    else if (evt.key == 'w') {
        camera.position.z += 0.1;
    }
    else if (evt.key == 's') {
        camera.position.z -= 0.1;
    }
}
//controls.update() must be called after any manual changes to the camera's transform

const grid = new THREE.GridHelper( 100, 100, 0xffffff, 0xffffff);
grid.position.set(0, -2.0, 0);
scene.add( grid );


//const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
//scene.add( directionalLight );

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

const light1 = new THREE.PointLight( 0xffffff, 1);
light1.position.set( 3, 5, 0 );
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 1);
light2.position.set( -3, 5, 0 );
scene.add( light2 );


//Texture
const grass_texture = new THREE.TextureLoader().load('./texture/grass.jpg');
const brick1 = new THREE.TextureLoader().load('./texture/brick.jpeg');
const brick2 = new THREE.TextureLoader().load('./texture/brick2.png');
const roof = new THREE.TextureLoader().load('./texture/roof3.jpg');
const wood = new THREE.TextureLoader().load('./texture/wood.jpg');
const leaves = new THREE.TextureLoader().load('./texture/leaves.jpg');
const ground = new THREE.TextureLoader().load('./texture/tanah2.jpg');
const road = new THREE.TextureLoader().load('./texture/aspal3.jpg');
const busDepan = new THREE.TextureLoader().load('./texture/busDepan.jpg');
const busBelakang = new THREE.TextureLoader().load('./texture/busBelakang.jpg');
const busKanan = new THREE.TextureLoader().load('./texture/busKanan.jpg');
const busKiri = new THREE.TextureLoader().load('./texture/busKiri.jpg');
const busRoof1 = new THREE.TextureLoader().load('./texture/busRoof1.jpg');
const busRoof2 = new THREE.TextureLoader().load('./texture/busRoof2.jpg');
//const light4 = new THREE.AmbientLight( 0xffffff ); // soft white light
//scene.add( light4 );

//tanah
const planeGeo1 = new THREE.PlaneGeometry( 100, 100, 30, 30);
const planeMat1 = new THREE.MeshBasicMaterial( {
    color: 0xe6ac00, 
    map: ground, 
    side: THREE.DoubleSide
} );
const plane1 = new THREE.Mesh( planeGeo1, planeMat1 );
plane1.rotation.x -= Math.PI/2;
plane1.position.y -= 0.5;
plane1.position.set(0, -0.65, 0);
scene.add( plane1 );

//jalan
const planeGeo2 = new THREE.PlaneGeometry( 100, 3, 30, 30);
const planeMat2 = new THREE.MeshLambertMaterial( {
    //color: 0x00ff00, 
    map: road, 
    //side: THREE.DoubleSide
} );
const plane2 = new THREE.Mesh( planeGeo2, planeMat2 );
plane2.rotation.x -= Math.PI/2;
plane2.position.y -= 0.5;
plane2.position.set(0, -0.64, 0);
scene.add( plane2 );

//RUMAH 1
//box1
const geometry1 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material1 = new THREE.MeshPhongMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_array1 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 }),
    new THREE.MeshPhongMaterial({map: brick1 })
];
const box = new THREE.Mesh( geometry1, mat_array1 );
box.position.set(0, 0, -3.5);
scene.add( box );

//cone1
const geometry2 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material2 = new THREE.MeshPhongMaterial( {
    color: 0x006699,
    map: roof
} );
const cone1 = new THREE.Mesh( geometry2, material2 );
cone1.position.set(0, 1, -3.5);
scene.add( cone1 );

//tabung1
const geometry3 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material3 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder1 = new THREE.Mesh( geometry3, material3 );
cylinder1.position.set(1.5, -0.35, -2);
scene.add( cylinder1 );

//cone2
const geometry4 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material4 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone2 = new THREE.Mesh( geometry4, material4 );
cone2.position.set(1.5, 0.4, -2);
scene.add( cone2 );

//tabung2
const geometry5 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material5 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder2 = new THREE.Mesh( geometry5, material5 );
cylinder2.position.set(-1.5, -0.35, -2);
scene.add( cylinder2 );

//cone3
const geometry6 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material6 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone3 = new THREE.Mesh( geometry6, material6 );
cone3.position.set(-1.5, 0.4, -2);
scene.add( cone3 );


//RUMAH 2
//box1
const geometry7 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material7 = new THREE.MeshBasicMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_array2 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 }),
    new THREE.MeshPhongMaterial({map: brick1 })
];
const box2 = new THREE.Mesh( geometry7, mat_array2 );
box2.position.set(4, 0, -3.5);
scene.add( box2 );

//cone1
const geometry8 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material8 = new THREE.MeshPhongMaterial( {
    color: 0x660000,
    map: roof
} );
const cone4 = new THREE.Mesh( geometry8, material8 );
cone4.position.set(4, 1, -3.5);
scene.add( cone4 );

//tabung1
const geometry9 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material9 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder3 = new THREE.Mesh( geometry9, material9 );
cylinder3.position.set(5.5, -0.35, -2);
scene.add( cylinder3 );

//cone2
const geometry10 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material10 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone5 = new THREE.Mesh( geometry10, material10 );
cone5.position.set(5.5, 0.4, -2);
scene.add( cone5 );

//tabung2
const geometry11 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material11 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder4 = new THREE.Mesh( geometry11, material11 );
cylinder4.position.set(2.5, -0.35, -2);
scene.add( cylinder4 );

//cone3
const geometry12 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material12 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone6 = new THREE.Mesh( geometry12, material12 );
cone6.position.set(2.5, 0.4, -2);
scene.add( cone6 );

//RUMAH 3
//box1
const geometry13 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material13 = new THREE.MeshBasicMaterial({
    //color: 0x006600, 
    map: brick2
});
const mat_array3 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 }),
    new THREE.MeshPhongMaterial({map: brick1 })
];
const box3 = new THREE.Mesh( geometry13, mat_array3 );
box3.position.set(-4, 0, -3.5);
scene.add( box3 );

//cone1
const geometry14 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material14 = new THREE.MeshPhongMaterial( {
    color: 0x006600,
    map: roof
} );
const cone7 = new THREE.Mesh( geometry14, material14 );
cone7.position.set(-4, 1, -3.5);
scene.add( cone7 );

//tabung1
const geometry15 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material15 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder5 = new THREE.Mesh( geometry15, material15 );
cylinder5.position.set(-2.5, -0.35, -2);
scene.add( cylinder5 );

//cone2
const geometry16 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material16 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone8 = new THREE.Mesh( geometry16, material16 );
cone8.position.set(-2.5, 0.4, -2);
scene.add( cone8 );

//tabung2
const geometry17 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material17 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder6 = new THREE.Mesh( geometry17, material17 );
cylinder6.position.set(-5.5, -0.35, -2);
scene.add( cylinder6 );

//cone3
const geometry18 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material18 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone9 = new THREE.Mesh( geometry18, material18 );
cone9.position.set(-5.5, 0.4, -2);
scene.add( cone9 );

//RUMAH 4
//box1
const geometry19 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material19 = new THREE.MeshPhongMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_array4 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 })
];
const box4 = new THREE.Mesh( geometry19, mat_array4 );
box4.position.set(0, 0, 3.5);
scene.add( box4 );

//cone1
const geometry20 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material20 = new THREE.MeshPhongMaterial( {
    color: 0x006699,
    map: roof
} );
const cone10 = new THREE.Mesh( geometry20, material20 );
cone10.position.set(0, 1, 3.5);
scene.add( cone10 );

//tabung1
const geometry21 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material21 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder7 = new THREE.Mesh( geometry21, material21 );
cylinder7.position.set(1.5, -0.35, 2);
scene.add( cylinder7 );

//cone2
const geometry22 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material22 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone11 = new THREE.Mesh( geometry22, material22 );
cone11.position.set(1.5, 0.4, 2);
scene.add( cone11 );

//tabung2
const geometry23 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material23 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder8 = new THREE.Mesh( geometry23, material23 );
cylinder8.position.set(-1.5, -0.35, 2);
scene.add( cylinder8 );

//cone3
const geometry24 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material24 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone12 = new THREE.Mesh( geometry24, material24 );
cone12.position.set(-1.5, 0.4, 2);
scene.add( cone12 );


//RUMAH 5
//box1
const geometry25 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material25 = new THREE.MeshBasicMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_array5 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 })
];
const box5 = new THREE.Mesh( geometry25, mat_array5 );
box5.position.set(4, 0, 3.5);
scene.add( box5 );

//cone1
const geometry26 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material26 = new THREE.MeshPhongMaterial( {
    color: 0x660000,
    map: roof
} );
const cone13 = new THREE.Mesh( geometry26, material26 );
cone13.position.set(4, 1, 3.5);
scene.add( cone13 );

//tabung1
const geometry27 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material27 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder9 = new THREE.Mesh( geometry27, material27 );
cylinder9.position.set(5.5, -0.35, 2);
scene.add( cylinder9 );

//cone2
const geometry28 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material28 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone14 = new THREE.Mesh( geometry28, material28 );
cone14.position.set(5.5, 0.4, 2);
scene.add( cone14 );

//tabung2
const geometry29 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material29 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder10 = new THREE.Mesh( geometry29, material29 );
cylinder10.position.set(2.5, -0.35, 2);
scene.add( cylinder10 );

//cone3
const geometry30 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material30 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone15 = new THREE.Mesh( geometry30, material30 );
cone15.position.set(2.5, 0.4, 2);
scene.add( cone15 );

//RUMAH 6
//box1
const geometry31 = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
let material31 = new THREE.MeshBasicMaterial({
    //color: 0x006600, 
    map: brick2
});
const mat_array6 = [
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick1 }),
    new THREE.MeshPhongMaterial({map: brick2 })
];
const box6 = new THREE.Mesh( geometry31, mat_array6 );
box6.position.set(-4, 0, 3.5);
scene.add( box6 );

//cone1
const geometry32 = new THREE.ConeGeometry( 1.2, 1, 4, 1, false, 0.8 );
const material32 = new THREE.MeshPhongMaterial( {
    color: 0x006600,
    map: roof
} );
const cone16 = new THREE.Mesh( geometry32, material32 );
cone16.position.set(-4, 1, 3.5);
scene.add( cone16 );

//tabung1
const geometry33 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material33 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder11 = new THREE.Mesh( geometry33, material33 );
cylinder11.position.set(-2.5, -0.35, 2);
scene.add( cylinder11 );

//cone2
const geometry34 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material34 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone17 = new THREE.Mesh( geometry34, material34 );
cone17.position.set(-2.5, 0.4, 2);
scene.add( cone17 );

//tabung2
const geometry35 = new THREE.CylinderGeometry( 0.1, 0.1, 0.6, 32 );
const material35 = new THREE.MeshBasicMaterial( {color: 0xffff00, map: wood} );
const cylinder12 = new THREE.Mesh( geometry35, material35 );
cylinder12.position.set(-5.5, -0.35, 2);
scene.add( cylinder12 );

//cone3
const geometry36 = new THREE.ConeGeometry( 0.3, 0.9,30 );
const material36 = new THREE.MeshBasicMaterial( {
    //color: 0x006699,
    map: leaves
} );
const cone18 = new THREE.Mesh( geometry36, material36 );
cone18.position.set(-5.5, 0.4, 2);
scene.add( cone18 );

//MOBIL 1
const mobilGeo1 = new THREE.BoxGeometry( 1.4, 0.7, 0.7 );
let mobilMat1 = new THREE.MeshPhongMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_arrayM1 = [
    new THREE.MeshBasicMaterial({map: busBelakang }),
    new THREE.MeshBasicMaterial({map: busDepan }),
    new THREE.MeshBasicMaterial({map: busRoof2 }),
    new THREE.MeshBasicMaterial({map: brick1 }),
    new THREE.MeshBasicMaterial({map: busKiri }),
    new THREE.MeshBasicMaterial({map: busKanan })
];
const mobil1 = new THREE.Mesh( mobilGeo1, mat_arrayM1 );
mobil1.position.set(20, -0.3, -0.7);
scene.add( mobil1 );

//MOBIL 2
const mobilGeo2 = new THREE.BoxGeometry( 1.4, 0.7, 0.7 );
let mobilMat2 = new THREE.MeshPhongMaterial({
    //color: 0xff0000, 
    map: brick2
});
const mat_arrayM2 = [
    new THREE.MeshBasicMaterial({map: busDepan }),
    new THREE.MeshBasicMaterial({map: busBelakang }),
    new THREE.MeshBasicMaterial({map: busRoof1 }),
    new THREE.MeshBasicMaterial({map: brick1 }),
    new THREE.MeshBasicMaterial({map: busKanan }),
    new THREE.MeshBasicMaterial({map: busKiri })
];
const mobil2 = new THREE.Mesh( mobilGeo2, mat_arrayM2 );
mobil2.position.set(-20, -0.3, 0.7);
scene.add( mobil2 );

camera.position.x = 6;
camera.position.y = 3;




function animate() {
    requestAnimationFrame( animate );
     mobil1.position.x -= 0.02;
     mobil2.position.x += 0.02;

    //controls.update(clock.getDelta());
    //torus.rotation.x += 0.02;
    //torus.rotation.y += 0.02;
    //torus.rotation.z += 0.01;
    
    //box.rotation.x += 0.01;
    //box.rotation.y += 0.03;
    //box.rotation.z += 0.03;

    renderer.render( scene, camera );
};

animate();
