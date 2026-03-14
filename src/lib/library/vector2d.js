Math.deg2rad = Math.PI / 180.0;
Math.rad2deg = 180.0 / Math.PI;
Math.clamp = function (value, min, max) {
    return Math.min(max, Math.max(value, min));
};
Math.clamp01 = function (value) {
    return Math.clamp(value, 0, 1);
};
// https://github.com/Unity-Technologies/UnityCsReference/blob/e740821767d2290238ea7954457333f06e952bad/Runtime/Export/Math/Mathf.cs#L357
Math.repeat = function (t, length) {
    return Math.clamp(t - Math.floor(t / length) * length, 0, length);
};
Math.deltaAngle = function (current, target) {
    let delta = Math.repeat((target - current), 360.0);
    if (delta > 180.0) {
        delta -= 360.0;
    }
    return delta;
};
Math.epsilon = 1e-6;
export var Vec2;
(function (Vec2) {
    function zero(result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = 0;
        result.y = 0;
        return result;
    }
    Vec2.zero = zero;
    function up(result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = 0;
        result.y = 1;
        return result;
    }
    Vec2.up = up;
    function down(result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = 0;
        result.y = -1;
        return result;
    }
    Vec2.down = down;
    function equals(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    Vec2.equals = equals;
    function left(result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = -1;
        result.y = 0;
        return result;
    }
    Vec2.left = left;
    function right(result) {
        if (!result)
            result = {
                x: 0, y: 0
            };
        result.x = 1;
        result.y = 0;
        return result;
    }
    Vec2.right = right;
    function ones(result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = 1;
        result.y = 1;
        return result;
    }
    Vec2.ones = ones;
    function sqrdMagnitude(v) {
        return v.x * v.x + v.y * v.y;
    }
    Vec2.sqrdMagnitude = sqrdMagnitude;
    function magnitude(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    Vec2.magnitude = magnitude;
    function copy(v, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = v.x;
        result.y = v.y;
        return result;
    }
    Vec2.copy = copy;
    function normalize(v, result) {
        if (!result)
            result = { x: 0, y: 0 };
        const length = magnitude(v);
        if (length !== 0) {
            result.x = v.x / length;
            result.y = v.y / length;
        }
        else {
            result.x = 0;
            result.y = 0;
        }
        return result;
    }
    Vec2.normalize = normalize;
    function add(a, b, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = a.x + b.x;
        result.y = a.y + b.y;
        return result;
    }
    Vec2.add = add;
    function sub(a, b, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = a.x - b.x;
        result.y = a.y - b.y;
        return result;
    }
    Vec2.sub = sub;
    function dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }
    Vec2.dot = dot;
    function perp(v, result) {
        if (!result)
            result = { x: 0, y: 0 };
        const { x, y } = v;
        result.x = y;
        result.y = -x;
        return result;
    }
    Vec2.perp = perp;
    function rotate(v, radians, result) {
        if (!result)
            result = { x: 0, y: 0 };
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        const { x, y } = v;
        result.x = x * c - y * s;
        result.y = x * s + y * c;
        return result;
    }
    Vec2.rotate = rotate;
    function set(x, y, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = x;
        result.y = y;
        return result;
    }
    Vec2.set = set;
    function scale(v, a, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = v.x * a;
        result.y = v.y * a;
        return result;
    }
    Vec2.scale = scale;
    function angle(a, b) {
        const dot = a.x * b.x + a.y * b.y;
        const cross = a.x * b.y - a.y * b.x;
        return Math.atan2(cross, dot);
    }
    Vec2.angle = angle;
    function lerp(a, b, t, result) {
        if (!result)
            result = { x: 0, y: 0 };
        result.x = (b.x - a.x) * t + a.x;
        result.y = (b.y - a.y) * t + a.y;
        return result;
    }
    Vec2.lerp = lerp;
})(Vec2 || (Vec2 = {}));
//# sourceMappingURL=vector2d.js.map