const { compressImage } = require("./compress");
const cac = require("cac");
const path = require("path");

console.log("This is a image compress script! \n");

const cli = cac();

cli.command("[...args]", "input args")
	.option("-i, --input [input]", "input file name")
	.option("-o, --output [output]", "output file name")
	.option("-r, --ratio [ratio]", "the compress ratio")
	.action((args, options) => {
		const res = {};
		res.input = args[0] || options.input || null;
		res.output =
			args[1] ||
			options.output ||
			(res.input ? res.input.replace(path.extname(res.input), "-low" + path.extname(res.input)) : null);
		res.ratio = args[2] || options.ratio || 0.1;
		const NotArgsOk = Object.values(res).some((value) => !value);
		if (NotArgsOk) {
			console.log("args not ok");
			return;
		} else {
			console.log("input image:", res.input);
			console.log("output image:", res.output);
			console.log("compress ratio:", res.ratio);
			console.log("\n");
			compressImage(res.input, res.output, Number(res.ratio));
		}
	});

cli.help().version("0.0.1");

cli.parse();
