const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000,
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(0, 0, 0);
scene.add(light);

const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

function createPlanet(radius, distance, color) {
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color });
  const planet = new THREE.Mesh(geometry, material);
  planet.position.x = distance;
  scene.add(planet);
  return planet;
}

const mercury = createPlanet(0.3, 4, 0xaaaaaa);
const venus = createPlanet(0.5, 6, 0xffcc66);
const earth = createPlanet(0.6, 8, 0x3399ff);
const mars = createPlanet(0.4, 10, 0xff3300);
const jupiter = createPlanet(1.2, 13, 0xff9966);
const saturn  = createPlanet(1.1, 16, 0xffcc99);
const uranus  = createPlanet(0.9, 19, 0x66ffff);
const neptune = createPlanet(0.8, 22, 0x6666ff);


let angle = 0;
function animate() {
  requestAnimationFrame(animate);
  
  angle += 0.01;

  mercury.position.x = 4 * Math.cos(angle * 4);
  mercury.position.z = 4 * Math.sin(angle * 4);
  
  venus.position.x = 6 * Math.cos(angle * 2);
  venus.position.z = 6 * Math.sin(angle * 2);
  
  earth.position.x = 8 * Math.cos(angle);
  earth.position.z = 8 * Math.sin(angle);
  
  mars.position.x = 10 * Math.cos(angle * 0.8);
  mars.position.z = 10 * Math.sin(angle * 0.8);


  jupiter.position.x = 13 * Math.cos(angle * 0.4);
  jupiter.position.z = 13 * Math.sin(angle * 0.4);

  saturn.position.x = 16 * Math.cos(angle * 0.3);
  saturn.position.z = 16 * Math.sin(angle * 0.3);

  uranus.position.x = 19 * Math.cos(angle * 0.2);
  uranus.position.z = 19 * Math.sin(angle * 0.2);

  neptune.position.x = 22 * Math.cos(angle * 0.1);
  neptune.position.z = 22 * Math.sin(angle * 0.1);


  renderer.render(scene, camera);
}

camera.position.z = 25; 

animate();

function addStars() {
  for (let i = 0; i < 1000; i++) {
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(0.05),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    star.position.set(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );
    scene.add(star);
  }
}
addStars();


