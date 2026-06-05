import AlgorithmNav from "../components/AlgorithmNav";
import Algorithms from "../data/algorithms.js";

function AlgorithmsPage({ category }) {
	return (
		<main className="main-panel">
			<AlgorithmNav />
			<div className="algorithms-container">
				{Algorithms[category].map((algcase) => (
					<div className="algorithm-card">
						<h2>{algcase.id}</h2>
						<h4>{algcase.alg}</h4>
					</div>
				))}
			</div>
		</main>
	);
}

export default AlgorithmsPage;
