import { useState, useEffect } from 'react';

export const useOnScreen = (ref, threshhold = 0.5) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
			root: null,
			rootMargin: '-96px 0px -48% 0px',
			threshold: threshhold,
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, threshhold]);

	return isIntersecting;
};

export default useOnScreen;
