import React from 'react'
import { useForm } from './formgp'
import { required } from './validators'

export interface IFormValue {
    name: string
    nickName: string
}
export interface IFormProp {
    values: IFormValue
    onChange?: (value: IFormValue) => void
    withError: boolean
    useEventHandler: boolean
}

const Form: React.FC<IFormProp> = (props) => {
    const { values, handleChange, eventHandlers } = useForm(props.values, { name: required() });

    return (
        <React.Fragment>

            <div>
                {!props.useEventHandler && (
                    <input
                        value={values.name.value}
                        onChange={handleChange('name')}
                    />
                )}
                {props.useEventHandler && (
                    <input
                        value={values.name.value}
                        {...eventHandlers('name')}
                    />
                )}
                <br />
                {props.withError && values.name.error && values.name.dirty && <label style={{ color: 'red' }}>{values.name.error}</label>}
            </div>
            <div>
                {!props.useEventHandler && (
                    <input
                        value={values.nickName.value}
                        onChange={handleChange('nickName')}
                    />
                )}
                {props.useEventHandler && (
                    <input
                        value={values.nickName.value}
                        {...eventHandlers('nickName')}
                    />
                )}
                {props.withError && values.nickName.error && values.nickName.dirty && <label style={{ color: 'red' }}>{values.nickName.error}</label>}
            </div>
        </React.Fragment>
    )
}

export default Form;