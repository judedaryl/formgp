import React, { useEffect, useState } from 'react'
import { IValidator } from './validators'

export interface IFormProperty<T> {
    value: T
    error?: string
    dirty: boolean
}

export type IFormValue<TValue> = {
    [K in keyof TValue]: IFormProperty<TValue[K]>
}

export function useForm<T>(initialValue: T, validator?: IValidator<T>) {

    const buildProperties = (value: T) => Object.keys(value).map(q => q as keyof T).reduce((p: any, k: keyof T) => ({ ...p, [k]: { value: initialValue[k], dirty: false } }), {})
    const properties = buildProperties(initialValue)
    const [values, setValues] = useState<IFormValue<T>>(properties);

    useEffect(() => {
        setValues(buildProperties(initialValue))
    }, [initialValue])

    const handleChange = (prop: keyof T) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.currentTarget;
        let error: string | undefined = undefined;
        const dirty = true;
        if (validator && validator[prop]) {
            error = validator[prop]!(value as any)
        }
        setValues(v => ({ ...v, [prop]: { value, error, dirty } }))
    }

    const eventHandlers = (prop: keyof T) => ({
        onChange: handleChange(prop),
        onBlur: handleChange(prop)
    })
    
    return { values, handleChange, eventHandlers }

}