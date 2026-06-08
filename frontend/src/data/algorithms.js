const PLL = [
	{
		id: "Aa-perm",
		alg: "x' R2 D2 (R' U' R) D2 R' U R' x",
		notes:
			"3 corner cycle, solved corner in the top left, headlights on the right",
	},
	{
		id: "Ab-perm",
		alg: "x' (R U' R) D2 (R' U R) D2 R2 x",
		notes:
			"3 corner cycle, solved corner in the top left, headlights on the bottom",
	},
	{
		id: "E-perm",
		alg: "x (R U' R') D (R U R') D' (R U R') D (R U' R') D' x",
		notes:
			"left ring finger does all of the D moves, focus on the U moves and the rest falls in place",
	},
	{
		id: "F-perm",
		alg: "(R' U' F') R U R' U' R' F R2 U' R' U' R U R' (U R)",
		notes:
			"The first 3 moves set you up into a T-perm without the F at the end because that cancels out with the F for undoing the setup moves",
	},
	{
		id: "Ga-perm",
		alg: "R2 U R' U R' U' R U' R2 D U' R' U R D'",
		notes: "JUST PRACTICE IT",
	},
	{
		id: "Gb-perm",
		alg: "R' U' R U D' R2 U R' U R U' R U' R2 D",
		notes: "JUST PRACTICE IT",
	},
	{
		id: "Gc-perm",
		alg: "R2 U' R U' R U R' U R2 D' U R U' R' D",
		notes: "JUST PRACTICE IT",
	},
	{
		id: "Gd-perm",
		alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
		notes: "JUST PRACTICE IT",
	},
	{
		id: "H-perm",
		alg: "M2 U M2 U2 M2 U M2",
		notes:
			"Try to do the M2's with your ring finger and middle finger together",
	},
	{
		id: "Ja-perm",
		alg: "x R2 F R F' R U2 r' U r U2 x'",
		notes: "start from home grip and there's almost no rotation",
	},
	{
		id: "Jb-perm",
		alg: "R U R' F' R U R' U' R' F R2 U' R' U'",
		notes:
			"Similar to a T-perm but the 4 moves at the end of a T-perm are moved to the start to make a Jb-perm",
	},
	{
		id: "Na-perm",
		alg: "(R U R' U) R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
		notes: "Setup into a Ja-perm and then undo the setup moves",
	},
	{
		id: "Nb-perm",
		alg: "(R' U' R U') x R2 F R F' R U2 r' U r U2 x' (U R' U R)",
		notes: "Setup into a Jb-perm and then undo the setup moves",
	},
	{
		id: "Ra-perm",
		alg: "R U' R' U' R U R D R' U' R D' R' U2 R'",
		notes: "",
	},
	{
		id: "Rb-perm",
		alg: "R' U2 R U2 R' F R U R' U' R' F' R2 U'",
		notes: "Do the last F' with your left index finger",
	},
	{
		id: "T-perm",
		alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
		notes:
			"As said in the Jb-perm notes just a rearangement, it is also commonly used for solving the edges while blindfolded in the Old Pochmann method",
	},
	{
		id: "Ua-perm",
		alg: "M2 U M U2 M' U M2",
		notes: "Do the M move with either your ring or middle finger and push",
	},
	{
		id: "Ub-perm",
		alg: "M2 U' M U2 M' U' M2",
		notes: "Do the M move with either your ring or middle finger and push",
	},
	{
		id: "V-perm",
		alg: "R' U R' d' R' F' R2 U' R' U R' F R F",
		notes:
			"As you do the d' with a push from your left hand re-adjust your right hand for the rest of the algorithm",
	},
	{
		id: "Y-perm",
		alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
		notes: "This is also just a rearanged T-perm",
	},
	{
		id: "Z-perm",
		alg: "M' U M2 U M2 U M' U2 M2 U'",
		notes:
			"Make sure to do the M2's with double flicks and do the U' at the end with a push from your finger",
	},
];
const OLL = [
	{
		id: "Sune",
		alg: "R U R' U R U2 R'",
		notes:
			"One of the most common OLL cases, it is also the first one that most people learn. It is also the only OLL case that can be solved in 7 moves or less",
	},
];

const COLL = [
	{
		id: "A-perm",
		alg: "x R' U R' D2 R U' R' D2 R2 x'",
		notes:
			"One of the most common CMLL cases, it is also the first one that most people learn. It is also the only CMLL case that can be solved in 8 moves or less",
	},
];

const CLL = [
	{
		id: "A-perm",
		alg: "x R' U R' D2 R U' R' D2 R2 x'",
		notes:
			"One of the most common CLL cases, it is also the first one that most people learn. It is also the only CLL case that can be solved in 8 moves or less",
	},
];

const Algorithms = {
	PLL: PLL,
	OLL: OLL,
	COLL: COLL,
	CLL: CLL,
};

export default Algorithms;
