import React, { ChangeEvent, FormEvent, useState } from 'react'

const SelectAllForms:React.FC = () => {
    const INIT_VALUE = [
        { id: 1, ingredients: "Kosher", checked: false },
        { id: 2, ingredients: "No Celery(inc celeriac)", checked: false },
        { id: 3, ingredients: "No Egg", checked: false }
    ]

    const [formData, setFormData] = useState(INIT_VALUE)

    const handleSelectAll = (e:ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        setFormData(formData.map((ingredient) => ({...ingredient, checked})))
    }

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFormData(formData.map((ingredient) => name === ingredient.ingredients ? {...ingredient, checked} : {...ingredient}))
    }

    const handleClearAll = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setFormData(formData.map((ingredient) => ({...ingredient, checked: false})))
    }

  return (
    <div>
        <div>Select Value: 
            {formData.map((ingredient:any) => 
            <span key={ingredient.ingredients}>
                {ingredient.checked && ingredient.ingredients}
            </span>
            )}
        </div>
        <form>
            <div>
                <input 
                type="checkbox"
                onChange={handleSelectAll}
                />
                <label>Select All</label>
            </div>

            {formData.map((ingredient) => 
            <div key={ingredient.ingredients}>
                <input
                type="checkbox"
                name={ingredient.ingredients}
                checked={ingredient.checked}
                onChange={handleCheck}
                />
                <label>{ingredient.ingredients}</label>
            </div>
            )}

            <div>
                <button onClick={handleClearAll}>Clear All</button>
            </div>
        </form>
    </div>
  )
}

export default SelectAllForms