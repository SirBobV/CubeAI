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
	{ id: "Sune", alg: "R U R' U R U2' R'", notes: "Dopest alg of them all 😎" },
	{
		id: "Cross",
		alg: "(R U2 R') (U' R U R') (U' R U' R')",
		notes: "Begins and ends the same as (anti-)sune",
	},
	{
		id: "Chameleon",
		alg: "(r U R' U') (r' F R F')",
		notes:
			"Sexy-move followed by sledge-hammer starting with r's instead of R's",
	},
	{
		id: "Headlights",
		alg: "R2 D (R' U2 R) D' (R' U2 R')",
		notes:
			"Try to push the D' with ringfinger. Probably hardest of this group 😥",
	},
	{
		id: "Bruno",
		alg: "R U2' R2' U' R2 U' R2' U2' R",
		notes: "Never release the R face! and do the U-moves with left hand",
	},
	{
		id: "Anti-Sune",
		alg: "R U2 R' U' R U' R'",
		notes: "Inverse of the dopest alg of them all",
	},
	{
		id: "Bowtie",
		alg: "F' (r U R' U') r' F R",
		notes: "Same as Chameleon with the last F' in front",
	},

	{ id: "T", alg: "F (R U R' U') F'", notes: "easy right?" },
	{
		id: "Key",
		alg: "(R U R' U') (R' F R F')",
		notes: "(sexy) (sledge), I'll take it",
	},

	{
		id: "Righty-Square",
		alg: "r U2 R' U' R U' r'",
		notes: "Anti-Sune beginning and ending with wide moves",
	},
	{
		id: "Lefty-Square",
		alg: "r' U2' R U R' U r",
		notes: "Mirror of Righty-Square",
	},

	{
		id: "Arrow",
		alg: "(r U R' U') M (U R U' R')",
		notes: "(wide sexy) M (insert)",
	},
	{
		id: "H",
		alg: "(R U R' U') M' (U R U' r')",
		notes: "(sexy) M' (wide insert)",
	},
	{
		id: "Lightning",
		alg: "r U R' U R U2' r'",
		notes: "Wide Sune, easy right?",
	},
	{
		id: "Reverse Lightning",
		alg: "r' U' R U' R' U2 r",
		notes: "Mirror of Lightning",
	},
	{
		id: "Downstairs",
		alg: "r' (R2 U R' U R U2 R') U M'",
		notes: "M (Sune) U M'",
	},
	{
		id: "Upstairs",
		alg: "M' (R' U' R U' R' U2 R) U' M",
		notes: "M' (Sune-mirror) U' M",
	},
	{ id: "Big Lightning", alg: "R' F (R U R' U') F' U R", notes: "" },
	{
		id: "Lefty Big Lightning",
		alg: "L F' (L' U' L U) F U' L'",
		notes: "Mirror of Big Lightning",
	},

	{
		id: "P",
		alg: "f (R U R' U') f'",
		notes: "f (sexy) f' , F (inverse-sexy) F’",
	},
	{
		id: "Couch",
		alg: "R' U' F (U R U' R') F' R",
		notes: "Inverse of Big Lightning",
	},
	{
		id: "Inverse P",
		alg: "f' (L' U' L U) f",
		notes: "Mirror of P, second alg if you hate L moves",
	},
	{
		id: "Anti-Couch",
		alg: "R U B' (U' R' U) R B R'",
		notes: "Look up fingertrick, it's pretty dope",
	},

	{
		id: "Seein' Headlights",
		alg: "R' U' (R' F R F') U R",
		notes: "C and Headlights",
	},
	{ id: "City", alg: "(R U R' U') B' (R' F R F') B", notes: "C and T" },
	{
		id: "Mounted Fish",
		alg: "F (R U' R' U') (R U R' F')",
		notes: "One of the fastest",
	},
	{ id: "Fish Salad", alg: "(R U2') (R2' F R F') (R U2' R')", notes: "" },
	{
		id: "Anti-Kite",
		alg: "(R U R' U) (R' F R F') (R U2' R')",
		notes: "(Su)(sledge)(ne)",
	},
	{
		id: "Kite",
		alg: "(R U R' U') R' F (R2 U R' U') F'",
		notes: "Starts as a T-perm",
	},
	{
		id: "Breakneck",
		alg: "F (R U R' U') (R U R' U') F'",
		notes: "F (double Sexy) F'",
	},
	{
		id: "Anti-Breakneck",
		alg: "R' U' (R' F R F') (R' F R F') U R",
		notes: "#1: R' U' (double Sledge) U R #2: for lefties",
	},
	{
		id: "Anti-Frying Pan",
		alg: "(r U R' U) (R U' R' U) R U2' r'",
		notes: "Mirror",
	},
	{
		id: "Frying Pan",
		alg: "(r' U' R U') (R' U R U') R' U2 r",
		notes: "fat double Anti-Sune",
	},
	{
		id: "Back Squeezy",
		alg: "r U' r2' U r2 U r2' U' r",
		notes: "Mirror of Front Squeezy",
	},
	{
		id: "Front Squeezy",
		alg: "r' U r2 U' r2' U' r2 U r'",
		notes: "Never release r!",
	},

	{
		id: "Ant",
		alg: "f (R U R' U') (R U R' U') f'",
		notes: "f 2(sexy) f' , F 2(inverse-sexy) F’",
	},
	{
		id: "Streetlights",
		alg: "r U r' (U R U' R') (U R U' R') r U' r'",
		notes: "#1: long but fast #2: Mirror",
	},
	{
		id: "Highway",
		alg: "R U2 R2 (U' R U' R') U2 F R F'",
		notes: "#1: shorter but shittier #2: longer but fingertrickable",
	},
	{
		id: "Rice Cooker",
		alg: "(R U R' U R U') y (R U' R') F'",
		notes: "Starts like Sune with different insert",
	},
	{
		id: "Mario",
		alg: "(R U R' U) (R U' R' U') (R' F R F')",
		notes: "Sune with sledge insert",
	},
	{
		id: "Wario",
		alg: "(R' U' R U') (R' U R U) l U' R' U x",
		notes: "#1: Mirror of Mario #2: Lefty",
	},

	{
		id: "Anti-Squeegee",
		alg: "(r U r') (R U R' U') (r U' r')",
		notes: "Mirror of Squeegeeeee",
	},
	{
		id: "Squeegee",
		alg: "(r' U' r) (R' U' R U) (r' U r)",
		notes: "Second one for lefty-lovers, or if you want to know both angles",
	},
	{
		id: "Anti-Gun",
		alg: "(R' F R) (U R' F' R) (F U' F')",
		notes: "You might want to look up some fingertricks for this one",
	},
	{
		id: "Gun",
		alg: "F U R U' R2' F' R U (R U' R')",
		notes: "I would say both algs are equally good",
	},

	{
		id: "Poodle",
		alg: "(R U R' U R U2' R') F (R U R' U') F'",
		notes: "(sune) + (T-case), long but fast!",
	},
	{
		id: "WTF",
		alg: "r2 D' (r U r') D r2 (U' r' U' r)",
		notes: "#1: verry fast if you nail the D-move #2: If you suck at D moves",
	},
	{
		id: "Anti-WTF",
		alg: "F U (R U2 R' U') (R U2 R' U') F'",
		notes: "Do the first U with a lefty index push",
	},
	{
		id: "Anti-Poodle",
		alg: "(R' U' R U' R' U2 R) F (R U R' U') F'",
		notes: "(Anti-Sune) + (T)",
	},

	{
		id: "Blank",
		alg: "(R U2') (R2' F R F') U2' (R' F R F')",
		notes: "(R U2' R') (Sledge) U2' (Sledge)",
	},
	{
		id: "Zamboni",
		alg: "F (R U R' U') F' f (R U R' U') f'",
		notes: "F (Sexy) F' f (Sexy) f'",
	},
	{
		id: "Slash",
		alg: "(R U R' U) (R' F R F') U2' (R' F R F')",
		notes: "(R U R' U) (sledge) U2' (sledge)",
	},
	{
		id: "Bunny",
		alg: "M U (R U R' U') M' (R' F R F')",
		notes: "M U (sexy) M' (sledge)",
	},
	{
		id: "Anti-Nazi",
		alg: "f (R U R' U') f' U' F (R U R' U') F'",
		notes: "f (sexy) f' U' (T)",
	},
	{
		id: "X",
		alg: "M U (R U R' U') M2' (U R U' r')",
		notes: "M U (sexy) M2' (fat insert)",
	},
	{
		id: "Crown",
		alg: "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
		notes: "(Righty-Square) (Lefty-Square)",
	},
	{
		id: "Nazi",
		alg: "f (R U R' U') f' U F (R U R' U') F'",
		notes: "f (Sexy) f' U (T)",
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
