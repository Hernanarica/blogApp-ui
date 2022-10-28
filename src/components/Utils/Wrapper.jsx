export function Wrapper({ children }) {
	return (
		<section className="max-w-7xl md:mx-auto overflow-hidden">
      { children }
		</section>
	);
}