const PLL = [
	{
		id: "Jb-perm",
		alg: "R U R' F' R U R' U' R' F R2 U' R' U'",
		visual: "/algorithmImg/PLLimgs/Jb-perm.png",
		notes:
			"Similar to a T-perm but the 4 moves at the end of a T-perm are moved to the start to make a Jb-perm",
	},
	{
		id: "T-perm",
		alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
		visual: "/algorithmImg/PLLimgs/T-perm.png",
		notes:
			"As said in the Jb-perm notes just a rearangement, it is also commonly used for solving the edges while blindfolded in the Old Pochmann method",
	},
];

const OLL = [
	{
		id: "Sune",
		alg: "R U R' U R U2 R'",
		visual: "img",
		notes:
			"One of the most common OLL cases, it is also the first one that most people learn. It is also the only OLL case that can be solved in 7 moves or less",
	},
];

const F2L = [
	{
		id: "F2L case 1",
		alg: "U R U' R'",
		visual: "img",
		notes:
			"One of the most basic F2L cases, it is also the first one that most people learn. It is also the only F2L case that can be solved in 4 moves or less",
	},
];

const CMLL = [
	{
		id: "A-perm",
		alg: "x R' U R' D2 R U' R' D2 R2 x'",
		visual: "img",
		notes:
			"One of the most common CMLL cases, it is also the first one that most people learn. It is also the only CMLL case that can be solved in 8 moves or less",
	},
];

const LSE = [
	{
		id: "H-perm",
		alg: "M2 U M2 U2 M2 U M2",
		visual: "img",
		notes:
			"One of the most common LSE cases, it is also the first one that most people learn. It is also the only LSE case that can be solved in 6 moves or less",
	},
];

const CLL = [
	{
		id: "A-perm",
		alg: "x R' U R' D2 R U' R' D2 R2 x'",
		visual: "img",
		notes:
			"One of the most common CLL cases, it is also the first one that most people learn. It is also the only CLL case that can be solved in 8 moves or less",
	},
];

const Ortega = [
	{
		id: "Ortega case 1",
		alg: "R U R' U R U2 R'",
		visual: "img",
		notes:
			"One of the most common Ortega cases, it is also the first one that most people learn. It is also the only Ortega case that can be solved in 7 moves or less",
	},
];

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
