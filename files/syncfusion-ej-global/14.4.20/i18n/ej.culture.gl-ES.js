ej.addCulture( "gl-ES", {
	name: "gl-ES",
	englishName: "Galician (Galician)",
	nativeName: "galego (galego)",
	language: "gl",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NéN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["domingo","luns","martes","mércores","xoves","venres","sábado"],
				namesAbbr: ["dom","luns","mar","mér","xov","ven","sáb"],
				namesShort: ["do","lu","ma","mé","xo","ve","sá"]
			},
			months: {
				names: ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro",""],
				namesAbbr: ["xan","feb","mar","abr","maio","xuño","xul","ago","set","out","nov","dec",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});
