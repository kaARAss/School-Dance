'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // На сенсорных экранах инерционная прокрутка борется с родной прокруткой
        // телефона и даёт рывки, поэтому там её не включаем.
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

        let lenis = null;
        let tickerFn = null;

        if (!isTouch) {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 1.5,
            });

            lenis.on('scroll', ScrollTrigger.update);
            tickerFn = (time) => { lenis.raf(time * 1000); };
            gsap.ticker.add(tickerFn);
            gsap.ticker.lagSmoothing(0);
            window.__lenis = lenis;
        }

        // Пересчёт анимаций при повороте экрана и при появлении панелей браузера
        let resizeTimer = null;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
        };
        window.addEventListener('orientationchange', onResize);
        window.addEventListener('resize', onResize);

        // Dynamic Tab Title Change
        const originalTitle = document.title;
        const handleVisibility = () => {
            document.title = document.hidden ? "Вернись 🥺" : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            if (lenis) {
                if (tickerFn) gsap.ticker.remove(tickerFn);
                lenis.destroy();
                delete window.__lenis;
            }
            clearTimeout(resizeTimer);
            window.removeEventListener('orientationchange', onResize);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, []);

    return null;
}
