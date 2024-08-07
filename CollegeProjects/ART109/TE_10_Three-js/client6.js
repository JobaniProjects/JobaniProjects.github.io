// Art 109 Three.js Demo Site
// client6.js
// A three.js scene which loads a static and animated model.

// The pink model is static (contains no animation data in the file)
// It is animated manually in Three.js

// The green model is preanimated (contains animation data created in blender)
// 3D model is from Blender default

// Implements Orbit controls and font loader

// Import required source code
// Import three.js core

// edit

import * as THREE from "./build/three.module.js";

// Import add-ons for glTF models, orbit controls, and font loader
import {
  OrbitControls
} from "./src/OrbitControls.js";
import {
  GLTFLoader
} from "./src/GLTFLoader.js";
import {
  FontLoader
} from "./src/FontLoader.js"

let container, scene, camera, renderer, mesh, mesh2, mesh3, mesh4, mixer, mixer2, controls, clock;

let ticker = 0;

// Call init and animate functions (defined below)
init();
animate();

function init() {

  //Identify div in HTML to place scene
  container = document.getElementById("space");

  //Crate clock for animation
  clock = new THREE.Clock();

  //Create scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  //renderer.setClearColor("rgb(130, 114, 51)");
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  // Add scene to gltf.html
  container.appendChild(renderer.domElement);

  // Load preanimated model, add material, and add it to the scene
  const loader = new GLTFLoader().load(
    "./assets/David_Dancing.glb",
    function(gltf) {
      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          //child.material = newMaterial;
        }
      });
      // set position and scale
      mesh = gltf.scene;
      mesh.position.set(-3, -1, 0); //-0.15, 1.6, 2.5
      mesh.rotation.set(0, 0.2, 0);   //6.7, 9.5, 0
      mesh.scale.set(1.3, 1.3, 1.3);  //2.5, 2.5, 2.5
      // Add model to scene
      scene.add(mesh);
      //Check for and play animation frames
      mixer = new THREE.AnimationMixer(mesh);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

    },
    undefined,
    function(error) {
      console.error(error);
    }
  );



  // Load preanimated model, add material, and add it to the scene
  const loader2 = new GLTFLoader().load(
    "./assets/planetAnimatedRE_03.glb",
    function(gltf) {
      gltf.scene.traverse(function(child2) {
        if (child2.isMesh) {
          //child.material = newMaterial;
        }
      });
      // set position and scale
      mesh2 = gltf.scene;
      mesh2.position.set(3.5, -1, 0);   //-0.15, 1.6, 2.5
      mesh2.rotation.set(0, 0, 0);    //6.7, 9.5, 0
      mesh2.scale.set(60, 60, 60);  //2.5, 2.5, 2.5
      // Add model to scene
      scene.add(mesh2);
      //Check for and play animation frames
      mixer2 = new THREE.AnimationMixer(mesh2);
      gltf.animations.forEach((clip) => {
        mixer2.clipAction(clip).play();
      });

    },
    undefined,
    function(error) {
      console.error(error);
    }
  );
  // Load static model, add material, and add it to the scene
  /**

  const loader2 = new GLTFLoader().load(
    "./assets/ParadisePlanet_02.glb",
    function(gltf) {
      // set position and scale
      mesh2 = gltf.scene;
      mesh2.position.set(-0.2, 0, 0);
      mesh2.rotation.set(0.7, 12, 0);
      mesh2.scale.set(0.5, 0.5, 0.5);
      // Add model to scene
      scene.add(mesh2);

    },
    undefined,
    function(error) {
      console.error(error);
    }
  );
  */

  // Add Orbit Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 25;   //8
  controls.target.set(0, 0, -0.2);    //0,3,0

  // Position our camera so we can see the shape
  camera.position.z = 7;    //5.8

  // Add a directional light to the scene
  const directionalLight = new THREE.DirectionalLight("rgb(247, 204, 30)", 1.5);
  scene.add(directionalLight);

  // Add an ambient light to the scene
  const ambientLight = new THREE.AmbientLight("rgb(219, 144, 0)", 0.85);
  scene.add(ambientLight);

  // Add Text under models


}

// Define animate loop
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  if (mixer2) mixer2.update(delta);
  render();
}

// Define the render loop
function render() {
  renderer.render(scene, camera);
}

// Respond to Window Resizing
window.addEventListener("resize", onWindowResize);

// Window resizing function
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  render();
}
