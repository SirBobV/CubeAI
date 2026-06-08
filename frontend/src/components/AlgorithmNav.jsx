import { NavLink } from "react-router-dom";

function AlgorithmNav() {
	return (
		<div className="topbar">
			<h1>Algorithm groups</h1>
			<nav className="topbar-nav">
				<NavLink className="alg-tab" to="/algorithms/pll">
					PLL
				</NavLink>
				<NavLink className="alg-tab" to="/algorithms/oll">
					OLL
				</NavLink>
				<NavLink className="alg-tab" to="/algorithms/coll">
					COLL
				</NavLink>
				<NavLink className="alg-tab" to="/algorithms/cll">
					CLL
				</NavLink>
			</nav>
		</div>
	);
}

export default AlgorithmNav;
