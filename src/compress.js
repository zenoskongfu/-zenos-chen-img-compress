const sharp = require("sharp");
const path = require("path");

async function compressImage(inputPath, outputPath, ratio) {
	const cwd = process.cwd();
	try {
		const metadata = await sharp(path.resolve(cwd, inputPath)).metadata();
		const newWidth = Math.round(metadata.width * ratio);
		const newHeight = Math.round(metadata.height * ratio);
		console.log(`Original Size: ${metadata.width}x${metadata.height}`);
		console.log(`Compressed Size: ${newWidth}x${newHeight}`);
		await sharp(inputPath).resize(newWidth).toFile(path.resolve(cwd, outputPath));
		console.log("Compressed!");
	} catch (error) {
		console.log(error);
	}
}

exports.compressImage = compressImage;
