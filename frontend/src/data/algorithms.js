const PLL = [
	{
		id: "Jb-perm",
		alg: "R U R' F' R U R' U' R' F R2 U' R' U'",
		visual: "img",
		notes:
			"Similar to a T-perm but the 4 moves at the end of a T-perm are moved to the start to make a Jb-perm",
	},
	{
		id: "T-perm",
		alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
		visual: "img2",
		notes:
			"As said in the Jb-perm notes just a rearangement, it is also commonly used for solving the edges while blindfolded in the Old Pochmann method",
	},
];

const OLL = [];
const F2L = [];
const CMLL = [];
const LSE = [];
const CLL = [];
const Ortega = [];

const Algorithms = {
	PLL: PLL,
	OLL: OLL,
	F2L: F2L,
	CMLL: CMLL,
	LSE: LSE,
	CLL: CLL,
	Ortega: Ortega,
};

export default Algorithms;
