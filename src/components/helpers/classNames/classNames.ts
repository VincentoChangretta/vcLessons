type Mode = Record<string, string | boolean>;

export const classNames = (cls: string, mode: Mode, additional: string[]): string => {
    return [
        cls,
        ...additional,
        Object.entries(mode)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) => classNames)
    ].join(" ")
};
