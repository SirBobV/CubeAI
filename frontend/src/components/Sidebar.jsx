import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<aside className="sidebar">
			<h1>CubeAI</h1>
			<nav>
				<NavLink className="nav-btn" to="/timer">
					Timer
				</NavLink>
				<NavLink className="nav-btn" to="/sessions">
					Sessions
				</NavLink>
				<NavLink className="nav-btn" to="/stats">
					Stats
				</NavLink>
				<NavLink className="nav-btn" to="/algorithms">
					Algorithms
				</NavLink>
				<NavLink className="nav-btn" to="/trainer">
					Trainer
				</NavLink>
			</nav>
		</aside>
	);
}

export default Sidebar;
