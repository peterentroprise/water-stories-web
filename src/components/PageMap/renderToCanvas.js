import { renderToStaticMarkup } from "react-dom/server";
import createCanvas from "./createCanvas";
import loadImage from "./loadImage";
import fontFacePayload from "./fontFacePayload";

export default async function renderToCanvas(content, { width, height }) {
  const canvas = createCanvas(width, height, true);
  const ctx = canvas.getContext("2d");

  const alternativeCss = `    ${
    [...document.querySelectorAll("[data-s]")]
      .map((i) => (i = i.innerHTML))
      .join(" ") || ""
  }`;

  const inlineCss = `.map-node {
    padding: 0 8px 0 8px;
    width: 128px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    font-family: Mulish;
    background-color: cyan;
  }
  `;

  const bareSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <style type="text/css">
  <![CDATA[
${fontFacePayload}
  ]]>
</style>
  <style type="text/css">
  <![CDATA[
${inlineCss}
  ]]>
</style>
      <foreignObject width="${width}" height="${height}">
      ${renderToStaticMarkup(content)}
      </foreignObject>
      </svg>`;

  const encodedSVG = encodeURIComponent(bareSVG);
  const encodedUrl = `data:image/svg+xml,${encodedSVG}`;

  console.log(bareSVG);
  console.log(renderToStaticMarkup(content));

  const image = await loadImage(encodedUrl);
  ctx.drawImage(image, 0, 0);
  return canvas;
}
