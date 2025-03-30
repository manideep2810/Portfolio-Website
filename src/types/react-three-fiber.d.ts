import { Object3DNode } from '@react-three/fiber';
import { Mesh, Group } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<Group, typeof Group>;
      mesh: Object3DNode<Mesh, typeof Mesh>;
      ambientLight: any;
      spotLight: any;
      planeGeometry: any;
      cylinderGeometry: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      directionalLight: any;
    }
  }
} 