import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawMeshGradient = () => {
            const width = canvas.width;
            const height = canvas.height;

            // Deep Navy base
            ctx.fillStyle = '#0a0a1f';
            ctx.fillRect(0, 0, width, height);

            // Animated gradient blobs
            const blobs = [
                {
                    x: width * 0.3 + Math.sin(time * 0.0003) * 100,
                    y: height * 0.3 + Math.cos(time * 0.0004) * 80,
                    radius: 400,
                    color: 'rgba(0, 242, 255, 0.15)', // Electric Cyan
                },
                {
                    x: width * 0.7 + Math.cos(time * 0.0002) * 120,
                    y: height * 0.6 + Math.sin(time * 0.0003) * 100,
                    radius: 350,
                    color: 'rgba(189, 0, 255, 0.12)', // Neon Purple
                },
                {
                    x: width * 0.5 + Math.sin(time * 0.00025) * 80,
                    y: height * 0.8 + Math.cos(time * 0.00035) * 60,
                    radius: 300,
                    color: 'rgba(0, 242, 255, 0.1)', // Electric Cyan
                },
                {
                    x: width * 0.2 + Math.cos(time * 0.00015) * 150,
                    y: height * 0.7 + Math.sin(time * 0.0002) * 90,
                    radius: 280,
                    color: 'rgba(189, 0, 255, 0.08)', // Neon Purple
                },
            ];

            blobs.forEach((blob) => {
                const gradient = ctx.createRadialGradient(
                    blob.x, blob.y, 0,
                    blob.x, blob.y, blob.radius
                );
                gradient.addColorStop(0, blob.color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            });

            time += 16;
        };

        const animate = () => {
            drawMeshGradient();
            animationId = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener('resize', resize);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 w-full h-full -z-20"
                style={{ background: '#0a0a1f' }}
            />

            {/* Noise Overlay */}
            <div
                className="fixed inset-0 -z-10 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />
        </>
    );
};

export default AnimatedBackground;
