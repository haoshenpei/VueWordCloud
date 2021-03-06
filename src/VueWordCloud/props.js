import Function_constant from '/utils/Function/constant';
import Function_stubArray from '/utils/Function/stubArray';

export default {
	words: {
		type: Array,
		default: Function_stubArray,
	},

	text: {
		type: [String, Function],
		default: '',
	},

	weight: {
		type: [Number, Function],
		default: 1,
	},

	rotation: {
		type: [Number, Function],
		default: 0,
	},

	rotationUnit: {
		type: [String, Function],
		default: 'turn',
	},

	fontFamily: {
		type: [String, Function],
		default: 'serif',
	},

	fontStyle: {
		type: [String, Function],
		default: 'normal',
	},

	fontVariant: {
		type: [String, Function],
		default: 'normal',
	},

	fontWeight: {
		type: [String, Function],
		default: 'normal',
	},

	color: {
		type: [String, Function],
		default: 'Black',
	},

	spacing: {
		type: Number,
		default: 0,
	},

	fontSizeRatio: {
		type: Number,
		default: 0,
	},

	enterAnimation: {
		type: [Object, String],
		default: Function_constant({opacity: 0}),
	},

	leaveAnimation: {
		type: [Object, String],
		default: Function_constant({opacity: 0}),
	},

	animationDuration: {
		type: Number,
		default: 1000,
	},

	animationOverlap: {
		type: Number,
		default: 1,
	},

	animationEasing: {
		type: String,
		default: 'ease',
	},

	createCanvas: {
		type: Function,
		default() {
			return document.createElement('canvas');
		},
	},

	loadFont: {
		type: Function,
		default(fontFamily, fontStyle, fontWeight, text) {
			return document.fonts.load([fontStyle, fontWeight, '1px', fontFamily].join(' '), text);
		},
	},

	createWorker: {
		type: Function,
		default(code) {
			return new Worker(URL.createObjectURL(new Blob([code])));
		},
	},
};
