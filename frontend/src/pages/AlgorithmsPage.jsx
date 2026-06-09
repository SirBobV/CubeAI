import AlgorithmNav from "../components/AlgorithmNav";
import Algorithms from "../data/algorithms.js";

function AlgorithmsPage({ category }) {
	return (
		<main className="main-panel algsmain">
			<AlgorithmNav />
			<div className="algorithms-container">
				{Algorithms[category].map((algcase) => (
					<div className="algorithm-card" key={algcase.id}>
						<div>
							<h1>{algcase.id}</h1>
							<h4>{algcase.alg}</h4>
							<p>{algcase.notes}</p>
						</div>
						<img
							src={"/algorithmImg/" + category + "imgs/" + algcase.id + ".png"}
						></img>
					</div>
				))}
			</div>
		</main>
	);
}

export default AlgorithmsPage;
