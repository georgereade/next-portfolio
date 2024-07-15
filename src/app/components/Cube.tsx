"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Cube() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    // renderer.setAnimationLoop(animate);

    // Attach the renderer to the mountRef element
    mountRef.current!.appendChild(renderer.domElement);

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 5, 20));
    points.push(new THREE.Vector3(0, 0, -10));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#FBB201",
    });

    const line = new THREE.Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);

    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    renderer.render(scene, camera);

    // camera.position.z = 5;
    // camera.position.x = -1;
    // camera.position.y = 0.2;

    // function animate() {
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.001;

    //   renderer.render(scene, camera);
    // }

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="bg-transparent flex flex-col items-center mx-auto"
    >
      <p className="text-white text-center z-40 top-16 translate-y-8">Line</p>
    </div>
  );
}
