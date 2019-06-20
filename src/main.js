import "./styles/main.scss";
import WebGL from "./utils/webgl";

const app = document.querySelector("#app");
const gl = new WebGL(400, 400);
const canvas = gl.getCanvasElement();
app.appendChild(canvas);
const ctx = gl.getWebGLContext("2d");

ctx.clearColor(0.0, 0.0, 0.0, 1.0); // 黑色
ctx.clear(ctx.COLOR_BUFFER_BIT);

// 顶点着色器
const VSHADER_SOURCE = `void main () {
    gl_Position = vec4(0.0,0.0,0.0,1.0);
    gl_PointSize = 10.0; 
}`;

// 片元着色器
const FSHADER_SOURCE = `void mian () {
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}`;

ctx.drawArrays(ctx.POINTS, 0, 1);
