type Rgb = {
    r: number | null,
    g: number | null,
    b: number | null,
};

type HexProps = (hex: string) => Rgb;

type RgbaProps = (hex: string, alpha: string) => string;

const rgb: HexProps = hex => {
    const short = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    const value = hex.replace(short, (_, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

    return {
        r: result && parseInt(result[1], 16),
        g: result && parseInt(result[2], 16),
        b: result && parseInt(result[3], 16),
    };
};

/**
 * Change hex to rgba.
 */
const rgba: RgbaProps = (hex, alpha) => {
    const color = rgb(hex);

    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export default rgba;
