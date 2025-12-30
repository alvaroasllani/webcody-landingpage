import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WireframeSphere = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Generate sphere wireframe lines
    const generateLines = () => {
        const lines = [];
        const segments = 12;
        const radius = 120;

        // Latitude lines
        for (let i = 1; i < segments; i++) {
            const lat = (i / segments) * Math.PI - Math.PI / 2;
            const r = Math.cos(lat) * radius;
            const y = Math.sin(lat) * radius;

            lines.push(
                <ellipse
                    key={`lat-${i}`}
                    cx="150"
                    cy={150 + y}
                    rx={r}
                    ry={r * 0.3}
                    fill="none"
                    stroke="url(#wireGradient)"
                    strokeWidth="0.5"
                    opacity={0.6}
                />
            );
        }

        // Longitude lines
        for (let i = 0; i < segments; i++) {
            const angle = (i / segments) * Math.PI;

            lines.push(
                <ellipse
                    key={`lon-${i}`}
                    cx="150"
                    cy="150"
                    rx={radius * Math.cos(angle)}
                    ry={radius}
                    fill="none"
                    stroke="url(#wireGradient)"
                    strokeWidth="0.5"
                    opacity={0.5}
                    transform={`rotate(${(i / segments) * 180}, 150, 150)`}
                />
            );
        }

        return lines;
    };

    return (
        <motion.div
            ref={containerRef}
            className="relative w-72 h-72 md:w-96 md:h-96"
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-2xl" />

            {/* Rotating SVG sphere */}
            <motion.svg
                viewBox="0 0 300 300"
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <defs>
                    <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f2ff" />
                        <stop offset="50%" stopColor="#bd00ff" />
                        <stop offset="100%" stopColor="#00f2ff" />
                    </linearGradient>
                </defs>

                {generateLines()}

                {/* Center glow circle */}
                <circle
                    cx="150"
                    cy="150"
                    r="5"
                    fill="url(#wireGradient)"
                    filter="blur(2px)"
                />
            </motion.svg>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    style={{
                        left: `${30 + Math.random() * 40}%`,
                        top: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}
        </motion.div>
    );
};

export default WireframeSphere;
