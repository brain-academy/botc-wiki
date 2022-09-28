export interface MarkdownDocument { path: string }

export function MarkdownDocument<T>(base: T & { filename: string, _base_url: string }): Omit<T, '_base_url'> & MarkdownDocument {
    return {
        path: `${base._base_url}/${base.filename}`,
        ...base
    }
}

export interface Iconised { iconPath: string }

export function Iconised<T>(base: T & { filename: string, _base_image_path: string }): Omit<T, '_base_image_path'> & Iconised {
    return {
        iconPath: `${base._base_image_path}/${base.filename}.png`,
        ...base
    }
}

export interface Theme {
    color: string,
    darkBackgroundColor: string,
    lightBackgroundColor: string
}
