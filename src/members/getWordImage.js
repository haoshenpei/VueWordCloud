import Array_fill from '../helpers/Array/fill';
import Math_turnToRad from '../helpers/Math/turnToRad';

export default function(
	text,
	fontStyle,
	fontVariant,
	fontWeight,
	fontSize,
	fontFamily,
	imageWidth,
	imageHeight,
	rotation,
) {
	rotation = Math_turnToRad(rotation);
	let font = [fontStyle, fontVariant, fontWeight, `${fontSize}px`, fontFamily].join(' ');
	let ctx = document.createElement('canvas').getContext('2d');
	ctx.canvas.width = imageWidth;
	ctx.canvas.height = imageHeight;
	ctx.translate(imageWidth / 2, imageHeight / 2);
	ctx.rotate(rotation);
	ctx.font = font;
	ctx.shadowColor = '#000000';
	ctx.shadowBlur = fontSize / 32;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(text, 0, 0);
	let image = Array_fill(new Array(imageWidth * imageHeight), 0);
	let imageData = ctx.getImageData(0, 0, imageWidth, imageHeight).data;
	for (let i = 0, ii = image.length; i < ii; ++i) {
		image[i] = imageData[i * 4 + 3];
	}
	return image;
}