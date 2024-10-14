import { useEffect } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const Cube = () => {

     useEffect(() => {
          const scene = new THREE.Scene();
      
          const camera = new THREE.PerspectiveCamera(
            50,
            500 / 500,
            1,
            1000
          );
      
          camera.position.z = 96;
      
          const canvas = document.getElementById('myThreeJsCanvas');
          const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true
          })
          renderer.setSize(300, 300);
          renderer.setClearColor( 0x0e090d, 1 );
          
          const container = document.getElementById('cube-container'); // Your target div
          container.appendChild(renderer.domElement);
          // document.body.appendChild(renderer.domElement);
      
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          ambientLight.castShadow = true;
          scene.add(ambientLight);
      
          const spotLight = new THREE.SpotLight(0xffffff, 1);
          spotLight.castShadow = true;
          spotLight.position.set(0, 64, 32);
          scene.add(spotLight);
      
          const boxGeometry = new THREE.BoxGeometry(45, 45, 45);
          const boxMaterial = new THREE.MeshNormalMaterial();
          const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
          scene.add(boxMesh);
      
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.enableZoom = false;
          const stats = Stats();
      
          const animate = () => {
            boxMesh.rotation.x += 0.01;
            boxMesh.rotation.y += 0.01;
            stats.update()
            controls.update()
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
          };
      
          animate()
      
        }, []);

        

     return(
          <div>
          <canvas id='myThreeJsCanvas'/>
        </div>
     );
}

export default Cube;