"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorCircleRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${e.clientX}px`;
                cursorDotRef.current.style.top = `${e.clientY}px`;
            }

            // Global hover check on move to ensure state is caught if DOM changes under cursor
            checkHoverState(e.target as HTMLElement);
        };

        const checkHoverState = (target: HTMLElement | null) => {
            if (!target) return;

            const hoverable = target.closest('a, button, input, textarea, .hover-target, [role="button"]');

            if (hoverable && !isHoveringRef.current) {
                isHoveringRef.current = true;
                cursorCircleRef.current?.classList.add("hovered");
            } else if (!hoverable && isHoveringRef.current) {
                isHoveringRef.current = false;
                cursorCircleRef.current?.classList.remove("hovered");
            }
        };

        // Add global mouseover to catch element entries quickly
        const onMouseOver = (e: MouseEvent) => {
            checkHoverState(e.target as HTMLElement);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);

        const animate = () => {
            // Smooth follow for circle
            const dx = mouseRef.current.x - cursorRef.current.x;
            const dy = mouseRef.current.y - cursorRef.current.y;

            cursorRef.current.x += dx * 0.15;
            cursorRef.current.y += dy * 0.15;

            if (cursorCircleRef.current) {
                cursorCircleRef.current.style.left = `${cursorRef.current.x}px`;
                cursorCircleRef.current.style.top = `${cursorRef.current.y}px`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
            <div ref={cursorCircleRef} className="cursor-outline hidden md:block" />
        </>
    );
}
