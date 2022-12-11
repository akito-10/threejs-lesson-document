const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // ディスプレイ上のシーンの範囲
  window.innerWidth / window.innerHeight, // アスペクト比
  0.1, // near: この値より近いオブジェクトは表示されない
  1000 // far: この値より遠いオブジェクトは表示されない
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
