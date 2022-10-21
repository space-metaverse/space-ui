type Rgb = {
    r: number | null,
    g: number | null,
    b: number | null,
};

export type HexProps = (hex: string) => Rgb;

export type RgbaProps = (hex: string, alpha: string) => string;
