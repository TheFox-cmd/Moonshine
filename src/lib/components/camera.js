import { Vec2 } from "../library/vector2d.js";
export class Camera {
    constructor(renderer) {
        this.position = Vec2.zero();
        this.size = Vec2.set(640, 360);
        this.scaleFactor = 1;
        this.renderer = renderer;
    }
    start() {
        const ctx = this.renderer.ctx;
        const canvas = this.renderer.canvas;
        const aspectRatio = this.size.x / this.size.y;
        if (canvas.width / canvas.height > aspectRatio) {
            this.scaleFactor = canvas.height / this.size.y;
        }
        else {
            this.scaleFactor = canvas.width / this.size.x;
        }
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(this.scaleFactor, -this.scaleFactor);
        ctx.translate(-this.position.x, -this.position.y);
    }
    end() {
        const ctx = this.renderer.ctx;
        ctx.restore();
    }
}
export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.resizeToScreen();
        window.addEventListener("resize", () => this.resizeToScreen());
    }
    resizeToScreen() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
//# sourceMappingURL=camera.js.map