class WebGL {
  constructor(
    width,
    height,
    options = {
      alpha: true, // 表明canvas包含一个alpha缓冲区。
      antialias: true, // 表明是否开启抗锯齿
      depth: true, // 表明绘制缓冲区包含一个深度至少为16位的缓冲区。
      failIfMajorPerformanceCaveat: false, // 表明在一个系统性能低的环境是否创建该上下文。
      powerPreference: "default", // 指示浏览器在运行WebGL上下文时使用相应的GPU电源配置。 可能值如下:
      // "default":自动选择，默认值。      "high-performance": 高性能模式。      "low-power": 节能模式。
      premultipliedAlpha: true, // 表明排版引擎讲假设绘制缓冲区包含预混合alpha通道。
      preserveDrawingBuffer: true, // 如果这个值为true缓冲区将不会被清除，会保存下来，直到被清除或被使用者覆盖。
      stencil: true // 表明绘制缓冲区包含一个深度至少为8位的模版缓冲区
    }
  ) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("webgl", options);
  }

  getCanvasElement() {
    return this.canvas;
  }

  getWebGLContext() {
    return this.ctx;
  }
}

export default WebGL;
