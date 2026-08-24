import { lazy, Suspense, useEffect, useState } from "react";

const Blaze = lazy(() => import("./canvasui/Blaze"));

const GlobalBlaze = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const schedule = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(callback, 700));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = schedule(() => setEnabled(true));
    return () => cancel(handle);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[.64] [mix-blend-mode:screen]"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,.82), black 14%, black 86%, rgba(0,0,0,.84))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,.82), black 14%, black 86%, rgba(0,0,0,.84))",
        }}
      >
        <Suspense fallback={null}>
          <Blaze
            className="h-full w-full"
            style={{ position: "absolute", inset: 0 }}
            pixelRatio={1}
            frameRate={30}
            height={0.92}
            distortion={0.24}
            distortionScale={0.9}
            speed={0.34}
            sparks={0.66}
            sparkDensity={1.72}
            sparkSize={0.9}
            layers={4}
            smoke={0.29}
            glow={1.72}
            sparkColor={[0.38, 0.94, 1]}
            smokeColor={[0.32, 0.22, 1]}
          ><div /></Blaze>
        </Suspense>
      </div>
    </div>
  );
};

export default GlobalBlaze;
