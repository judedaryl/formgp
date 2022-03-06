
# FormGP

The simplest React form handler you can ever use. No components, just a simple hook that handles changes to your form values. 


> Wanted to use Formula1 or formgp or Formula-One but those was taken. i cry 😭 😭 😭

## Getting Started


### Installing

```sh
# using npm
npm install formgp

# using yarn
yarn add formgp
```
### Using

formgp exports a simple useForm hook that accepts an ``initialValue`` and some ``validators`` that you want to use. It then provides you with a ``values`` object that has everything you need for that particular value:

* ``value``: The actual value
* ``error``: Was there an error
* ``dirty``: Is the value dirty or touched

And some event handlers so that anything you type gets reflected. The main change handler, aptly named ``handleChange`` doesn't work on magic glue where it reads a property on the element like ``name``. Instead when you use it, you have to specify what field you want changed. For example:

```tsx
<input onChange={handleChange('someprop')}>
```

Nice thing about this is that everything is typed, so you get that nice auto complete when you run write ``handleChange``

Let's go ahead with some examples.

### Simple form

```tsx
import { useForm } from 'formgp'

const MyForm = () => {
    const { values, handleChange } = useForm({ name: 'Daryl', nickName: 'Iceman'})
    return (
        <>
            <input 
                value={values.name.value} 
                onChange={handleChange('name')}
            />
            <br/>
            <input 
                value={values.nickName.value} 
                onChange={handleChange('nickName')}
            />
        </>
    )

}
```


### Handling other events apart from change

The ``Simple Form`` example only uses the ``onChange`` event, but if you want to handle other events like ``onBlur`` (we still only support this hehe, teehee), you can use the ``eventHandlers`` function instead. Uses the same concept as ``handleChange`` where you have to explicitly specify what property you want to handle.

Under the hood, we're really just appending an ``onChange`` and ``onBlur`` handler to your input.

```tsx
import { useForm } from 'formgp'

const MyForm = () => {
    const { values, handleChange } = useForm({ name: 'Daryl', nickName: 'Iceman'})
    return (
        <>
            <input 
                value={values.name.value} 
                {...eventHandlers('name')}
            />
            <br/>
            <input 
                value={values.nickName.value} 
                {...eventHandlers('nickName')}
            />
        </>
    )

}
```


### Handling other events apart from change

The ``Simple Form`` example only uses the ``onChange`` event, but if you want to handle other events like ``onBlur`` (we still only support this hehe, teehee), you can use the ``eventHandlers`` function instead. Uses the same concept as ``handleChange`` where you have to explicitly specify what property you want to handle.

Under the hood, we're really just appending an ``onChange`` and ``onBlur`` handler to your input.

```tsx
import { useForm } from 'formgp'

const MyForm = () => {
    const { values, handleChange } = useForm({ name: 'Daryl', nickName: 'Iceman'})
    return (
        <>
            <input 
                value={values.name.value} 
                {...eventHandlers('name')}
            />
            <br/>
            <input 
                value={values.nickName.value} 
                {...eventHandlers('nickName')}
            />
        </>
    )

}
```

### Running validations

You can inject some validators to your form properties via the ``validator`` parameter in ``useForm``. Unlike other libraries that lets you validate the entire form, with ``formgp`` it's done per property.

```ts
const initialValue = {
    name: 'Daryl',
    favoriteNumber: 0
} 

const validators = {
    // If for some reason you hate someone named Glenn, let's do some validation on that
    name: (val) => val === 'Glenn' ? 'No Glenn allowed' : undefined
    // If you insist they provide their favorite number
    favoriteNumber: (val) => !val ? 'Required' : undefined
}

const { values, handleChange } = useForm(initialValue, validators)

```

Let's use the snippet above, and show the errors below the input. Preferrably, you may want to check if the form is dirty first before you show the error, but hey if you don't wanna do that, the world is your oyster.

```tsx
import { useForm } from 'formgp'

const MyForm = () => {
    const initialValue = {
        name: 'Daryl',
        favoriteNumber: 0
    } 

    const validators = {
        // If for some reason you hate someone named Glenn, let's do some validation on that
        name: (val) => val === 'Glenn' ? 'No Glenn allowed' : undefined
        // If you insist they provide their favorite number
        favoriteNumber: (val) => !val ? 'Required' : undefined
    }

    const { values, handleChange } = useForm(initialValue, validators)
    return (
        <>
            <input 
                value={values.name.value} 
                {...eventHandlers('name')}
            />
            <br/>
                {values.name.dirty && values.name.error && <label>{values.name.error}</label>}
            <br/>
            <br/>
            <input 
                type={'number'}
                value={values.favoriteNumber.value} 
                {...eventHandlers('favoriteNumber')}
            />
            <br/>
                {values.favoriteNumber.dirty && values.favoriteNumber.error && <label>{values.favoriteNumber.error}</label>}
        </>
    )

}
```



## SEO

Some SEO to help me get searched on the wEbZ

#react
#formgp
#form
#formhandler
#deadsimple
#simple
#pleaseuseme
#imuseful
#imsimple

#BlazinglyFast (not actually but this is a hype word)