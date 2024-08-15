// Renders a cube in ASCII. Some variable names aren't descriptive. Sorry.
// Adapted from Servet Gulnaroglu's cube.c -> https://github.com/servetgulnaroglu/cube.c
"use client";
import { useEffect, useState } from "react";

interface CubeProps {
  size?: number
}

const CubeAnimation = ({ size = 190 }: CubeProps) => {
  const [frame, setFrame] = useState<string>("loading cube2.tsx");

  useEffect(() => {
    const width: number = 130;
    const height: number = 44;
    const backgroundASCIICode: string = " ";
    const distanceFromCam: number = size;
    const K1: number = 60;
    const incrementSpeed: number = 0.6;

    let A: number = 0;
    let B: number = 0;
    let C: number = 0;
    let cubeWidth: number = 20;
    let horizontalOffset: number = -40;

    const zBuffer: number[] = new Array<number>(width * height).fill(0);
    const buffer: string[] = new Array<string>(width * height).fill(
      backgroundASCIICode
    );

    const calculateX = (i: number, j: number, k: number): number => {
      return (
        j * Math.sin(A) * Math.sin(B) * Math.cos(C) -
        k * Math.cos(A) * Math.sin(B) * Math.cos(C) +
        j * Math.cos(A) * Math.sin(C) +
        k * Math.sin(A) * Math.sin(C) +
        i * Math.cos(B) * Math.cos(C)
      );
    };

    const calculateY = (i: number, j: number, k: number): number => {
      return (
        j * Math.cos(A) * Math.cos(C) +
        k * Math.sin(A) * Math.cos(C) -
        j * Math.sin(A) * Math.sin(B) * Math.sin(C) +
        k * Math.cos(A) * Math.sin(B) * Math.sin(C) -
        i * Math.cos(B) * Math.sin(C)
      );
    };

    const calculateZ = (i: number, j: number, k: number): number => {
      return (
        k * Math.cos(A) * Math.cos(B) -
        j * Math.sin(A) * Math.cos(B) +
        i * Math.sin(B)
      );
    };

    const calculateForSurface = (
      cubeX: number,
      cubeY: number,
      cubeZ: number,
      ch: string
    ): void => {
      const x: number = calculateX(cubeX, cubeY, cubeZ);
      const y: number = calculateY(cubeX, cubeY, cubeZ);
      const z: number = calculateZ(cubeX, cubeY, cubeZ) + distanceFromCam;

      const ooz: number = 1 / z;

      const xp: number = Math.floor(
        width / 2 + horizontalOffset + K1 * ooz * x * 2
      );
      const yp: number = Math.floor(height / 2 + K1 * ooz * y);

      const idx: number = xp + yp * width;
      if (idx >= 0 && idx < width * height) {
        if (ooz > zBuffer[idx]) {
          zBuffer[idx] = ooz;
          buffer[idx] = ch;
        }
      }
    };

    const renderFrame = (): void => {
      let output: string = "";
      for (let k: number = 0; k < width * height; k++) {
        output += buffer[k];
        if ((k + 1) % width === 0) {
          output += "\n";
        }
      }
      output = output
        .split("\n")
        .map((line) => line.trimEnd())
        .filter((line) => line !== "")
        .join("\n");
      setFrame(output.trimEnd());
    };

    const intervalId = setInterval(() => {
      for (let k: number = 0; k < width * height; k++) {
        zBuffer[k] = 0;
        buffer[k] = backgroundASCIICode;
      }
      // Draw cube surfaces
      for (
        let cubeX: number = -cubeWidth;
        cubeX < cubeWidth;
        cubeX += incrementSpeed
      ) {
        for (
          let cubeY: number = -cubeWidth;
          cubeY < cubeWidth;
          cubeY += incrementSpeed
        ) {
          calculateForSurface(cubeX, cubeY, -cubeWidth, "@");
          calculateForSurface(cubeWidth, cubeY, cubeX, "$");
          calculateForSurface(-cubeWidth, cubeY, -cubeX, "~");
          calculateForSurface(-cubeX, cubeY, cubeWidth, "#");
          calculateForSurface(cubeX, -cubeWidth, -cubeY, ";");
          calculateForSurface(cubeX, cubeWidth, cubeY, "+");
        }
      }
      renderFrame();

      A += 0.05;
      B += 0.05;
      C += 0.01;
    }, 190); // Adjust the interval for animation speed

    return () => {
      clearInterval(intervalId);
    };
  }, [size]); // Only run once on component mount

  return <pre>{frame}</pre>;
};

export default CubeAnimation;
