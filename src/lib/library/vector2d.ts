declare global {
  interface Math {
    clamp(value: number, min: number, max: number): number;
    clamp01(value: number): number;
    repeat(t: number, length: number): number;
    deltaAngle(current: number, target: number): number;
    readonly deg2rad: number;
    readonly rad2deg: number;
    readonly epsilon: number;
  }
}

(Math as any).deg2rad = Math.PI / 180.0;
(Math as any).rad2deg = 180.0 / Math.PI;

Math.clamp = function (value, min, max) {
    return Math.min(max, Math.max(value, min));
};
Math.clamp01 = function (value) {
    return Math.clamp(value, 0, 1);
};

// https://github.com/Unity-Technologies/UnityCsReference/blob/e740821767d2290238ea7954457333f06e952bad/Runtime/Export/Math/Mathf.cs#L357
Math.repeat = function(t, length) {
    return Math.clamp(t - Math.floor(t / length) * length, 0, length);
};
Math.deltaAngle = function(current, target) {
    let delta = Math.repeat((target - current), 360.0);
    if (delta > 180.0) {
        delta -= 360.0;
    }
    return delta;
};

(Math as any).epsilon = 1e-6;

export { };

export type Vec2 = { x: number, y: number };

export namespace Vec2 {
    export function zero(result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = 0;
        result.y = 0;

        return result;
    }

    export function up(result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = 0;
        result.y = 1;

        return result;
    }

    export function down(result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = 0;
        result.y = -1;

        return result;
    }

    export function equals(a: Vec2, b: Vec2) {
        return a.x === b.x && a.y === b.y;
    }

    export function left(result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = -1;
        result.y = 0;

        return result;
    }

    export function right(result?: Vec2) {
        if (!result) result = {
           x: 0, y: 0 };

        result.x = 1;
        result.y = 0;

        return result;
    }

    export function ones(result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = 1;
        result.y = 1;

        return result;
    }

    export function sqrdMagnitude(v: Vec2) {
        return v.x * v.x + v.y * v.y;
    }

    export function magnitude(v: Vec2) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    export function copy(v: Vec2, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        result.x = v.x;
        result.y = v.y;

        return result;
    }

    export function normalize(v: Vec2, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        const length = magnitude(v);
        if (length !== 0) {
            result.x = v.x / length;
            result.y = v.y / length;
        } else {
            result.x = 0;
            result.y = 0;
        }

        return result;
    }

    export function add(a: Vec2, b: Vec2, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        result.x = a.x + b.x;
        result.y = a.y + b.y;

        return result;
    }

    export function sub(a: Vec2, b: Vec2, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        result.x = a.x - b.x;
        result.y = a.y - b.y;

        return result;
    }

    export function dot(a: Vec2, b: Vec2): number {
        return a.x * b.x + a.y * b.y;
    }

    export function perp(v: Vec2, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        const { x, y } = v;

        result.x = y;
        result.y = -x;

        return result;
    }

    export function rotate(v: Vec2, radians: number, result?: Vec2): Vec2 {
        if (!result) result = { x: 0, y: 0 };

        const c = Math.cos(radians);
        const s = Math.sin(radians);

        const { x, y } = v;

        result.x = x * c - y * s;
        result.y = x * s + y * c;

        return result;
    }

    export function set(x: number, y: number, result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = x;
        result.y = y;

        return result;
    }

    export function scale(v: Vec2, a: number, result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = v.x * a;
        result.y = v.y * a;

        return result;
    }

    export function angle(a: Vec2, b: Vec2) {
        const dot = a.x * b.x + a.y * b.y
        const cross = a.x * b.y - a.y * b.x
        return Math.atan2(cross, dot)
    }

    export function lerp(a: Vec2, b: Vec2, t: number, result?: Vec2) {
        if (!result) result = { x: 0, y: 0 };

        result.x = (b.x - a.x) * t + a.x;
        result.y = (b.y - a.y) * t + a.y;

        return result;
    }
}