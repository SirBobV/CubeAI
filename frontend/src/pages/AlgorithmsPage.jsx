import AlgorithmNav from "../components/AlgorithmNav";
import Algorithms from "../data/algorithms.js";

function AlgorithmsPage({ category }) {
	alert(Algorithms[category]);
	return (
		<main className="main-panel">
			<AlgorithmNav />
		</main>
	);
}

export default AlgorithmsPage;
