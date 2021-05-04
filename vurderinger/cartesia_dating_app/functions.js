export function getDistance(x0, y0, x1, y1) {
    return Math.round(Math.sqrt((x1-x0)**2 + (y1-y0)**2));
}