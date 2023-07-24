import { ripplesVs, ripplesFs, renderFs } from '@lib/curtains/fs';
//@ts-ignore
import { PingPongPlane, Vec2, ShaderPass } from 'curtainsjs';

interface Bg {
  r: number;
  v: number;
  b: number;
}

export default function handleCurtainSuccess(
  curtainWhite: any,
  canvaId: string,
  hue: number,
  saturation: number,
  bg: Bg = {
    r: 0,
    v: 0,
    b: 0,
  }
) {
  return () => {
    // track the mouse position
    const mouse = {
      last: new Vec2(),
      current: new Vec2(),
      velocity: new Vec2(),
      updateVelocity: false,
      lastTime: 0,
    };

    // used for resolution uniform
    const curtainsBBox = curtainWhite.getBoundingRect();

    // our ripples ping pong fbo
    const ripples = new PingPongPlane(
      curtainWhite,
      document.getElementById(canvaId),
      {
        vertexShader: ripplesVs,
        fragmentShader: ripplesFs,
        autoloadSources: false,
        watchScroll: false,
        sampler: 'uRipples',
        texturesOptions: {
          floatingPoint: 'half-float',
        },
        uniforms: {
          mousePosition: {
            name: 'uMousePosition',
            type: '2f',
            value: mouse.current,
          },
          // our velocity
          velocity: {
            name: 'uVelocity',
            type: '2f',
            value: mouse.velocity,
          },
          // window aspect ratio to draw a circle
          resolution: {
            name: 'uResolution',
            type: '2f',
            value: new Vec2(curtainsBBox.width, curtainsBBox.height),
          },
          pixelRatio: {
            name: 'uPixelRatio',
            type: '1f',
            value: curtainWhite.pixelRatio,
          },
          time: {
            name: 'uTime',
            type: '1i',
            value: -1,
          },

          viscosity: {
            name: 'uViscosity',
            type: '1f',
            value: 10.75,
          },
          speed: {
            name: 'uSpeed',
            type: '1f',
            value: 6.75,
          },
          size: {
            name: 'uSize',
            type: '1f',
            value: 2,
          },
          dissipation: {
            name: 'uDissipation',
            type: '1f',
            value: 0.9875,
          },
        },
      }
    );

    ripples
      .onRender(() => {
        mouse.velocity.set(
          curtainWhite.lerp(mouse.velocity.x, 0, 0.05),
          curtainWhite.lerp(mouse.velocity.y, 0, 0.1)
        );

        ripples.uniforms.velocity.value = mouse.velocity.clone();

        ripples.uniforms.time.value++;
      })
      .onAfterResize(() => {
        // update our window aspect ratio uniform
        const boundingRect = ripples.getBoundingRect();
        ripples.uniforms.resolution.value.set(
          boundingRect.width,
          boundingRect.height
        );
      });

    // handle mouse move
    const onMouseMove = (e: any) => {
      if (ripples) {
        const mousePos = {
          x: e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
          y: e.targetTouches ? e.targetTouches[0].clientY : e.clientY,
        };

        mouse.last.copy(mouse.current);

        mouse.updateVelocity = true;

        if (!mouse.lastTime) {
          mouse.lastTime = (performance || Date).now();
        }

        if (
          mouse.last.x === 0 &&
          mouse.last.y === 0 &&
          mouse.current.x === 0 &&
          mouse.current.y === 0
        ) {
          mouse.updateVelocity = false;
        }

        mouse.current.set(mousePos.x, mousePos.y);

        const webglCoords = ripples.mouseToPlaneCoords(mouse.current);
        ripples.uniforms.mousePosition.value = webglCoords;

        // divided by a frame duration (roughly)
        if (mouse.updateVelocity) {
          const time = (performance || Date).now();
          const delta = Math.max(14, time - mouse.lastTime);
          mouse.lastTime = time;

          mouse.velocity.set(
            (mouse.current.x - mouse.last.x) / delta,
            (mouse.current.y - mouse.last.y) / delta
          );
        }
      }
    };

    // handle mouse move
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onMouseMove);

    // render pass (display the effect)
    const renderPassUniforms = {
      resolution: {
        name: 'uResolution',
        type: '2f',
        value: new Vec2(curtainsBBox.width, curtainsBBox.height),
      },
      hue: {
        name: 'uHue',
        type: '1f',
        value: hue,
      },
      saturation: {
        name: 'uSaturation',
        type: '1f',
        value: saturation,
      },
      bgColor: {
        name: 'uBgColor',
        type: '3f',
        value: [bg.r, bg.v, bg.b],
      },
    };

    const params = {
      fragmentShader: renderFs,
      depth: false,
      uniforms: renderPassUniforms,
    };

    // post pro
    const renderPass = new ShaderPass(curtainWhite, params);

    renderPass.onAfterResize(() => {
      // update our window aspect ratio uniform
      const boundingRect = renderPass.getBoundingRect();
      renderPass.uniforms.resolution.value.set(
        boundingRect.width,
        boundingRect.height
      );
    });

    // add our ripple texture to the render pass
    renderPass.createTexture({
      sampler: 'uRipplesTexture',
      fromTexture: ripples.getTexture(),
    });
  };
}
