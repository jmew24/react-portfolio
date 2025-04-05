import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook to detect if an element is visible on screen
 * @param {React.RefObject} ref - Reference to the element to observe
 * @param {number} threshold - Intersection threshold (0.0 to 1.0)
 * @returns {boolean} - Whether the element is intersecting
 */
export const useOnScreen = (ref, threshold = 0.5) => {
	const [isIntersecting, setIntersecting] = useState(false);

	// Memoize observer options to prevent unnecessary recreations
	const observerOptions = useMemo(() => ({
		root: null,
		rootMargin: '0px',
		threshold: [0, 0.25, 0.3, 0.4, 0.5], // Lower thresholds for better detection
	}), []);

	useEffect(() => {
		if (!ref?.current) {
			console.warn('useOnScreen: ref is not set');
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				const targetHeight = entry.boundingClientRect.height;
				const windowHeight = window.innerHeight;
				const ratio = entry.intersectionRatio;
				
				// For shorter sections (less than 80% of viewport), use stricter thresholds
				if (targetHeight < windowHeight * 0.8) {
					setIntersecting(ratio > 0.4);
				} else {
					// For taller sections, use more lenient thresholds
					setIntersecting(ratio > 0.25);
				}
			},
			observerOptions
		);

		const currentRef = ref.current;
		observer.observe(currentRef);

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
			observer.disconnect();
		};
	}, [ref, observerOptions]);

	return isIntersecting;
};

export default useOnScreen;
