declare module '*.svg' {
    const content: string | {
        src: string;
        width: number;
        height: number;
    };
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}
