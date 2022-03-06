
export type IValidator<T> = { [K in keyof T]?: (val: T[K]) => string | undefined }

export const required =
    (config?: { message: string }) =>
        (value: string) => value ? undefined : config?.message ?? 'Required';
