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
		rootMargin: '-20% 0px -20% 0px',
		threshold,
	}), [threshold]);

	useEffect(() => {
		if (!ref?.current) {
			console.warn('useOnScreen: ref is not set');
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setIntersecting(entry.isIntersecting),
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
