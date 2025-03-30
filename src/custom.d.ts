declare module 'react-parallax-tilt' {
  import * as React from 'react';

  export interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    tiltReverse?: boolean;
    tiltEnable?: boolean;
    tiltAngleXInitial?: number;
    tiltAngleYInitial?: number;
    glareEnable?: boolean;
    glareMaxOpacity?: number;
    glareColor?: string;
    glarePosition?: string;
    glareReverse?: boolean;
    scale?: number;
    perspective?: number;
    transitionSpeed?: number;
    trackOnWindow?: boolean;
    gyroscope?: boolean;
    onMove?: (values: { tiltAngleX: number; tiltAngleY: number; tiltAngleXPercentage: number; tiltAngleYPercentage: number; glareAngle: number; glareOpacity: number }) => void;
    onEnter?: () => void;
    onLeave?: () => void;
  }

  const Tilt: React.FC<TiltProps>;
  export default Tilt;
}

declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(array: Float32Array, options?: { radius?: number }): Float32Array;
} 