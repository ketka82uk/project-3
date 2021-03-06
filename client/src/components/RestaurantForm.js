import React from 'react'

import restaurantCategories from '../data/restaurants/restaurantCategories'
import restaurantPrice from '../data/restaurants/restaurantPrice'
import Select from 'react-select'

const inputFields = ['name', 'link', 'address1', 'address2', 'city', 'zipcode', 'phone']

export default function RestaurantForm({ formData, handleSubmit, handleChange, handleCategoryChange, handlePriceChange }) {
  return <div>

    <form onSubmit={handleSubmit}>

      <label className="label">
        {'Categories'}
      </label>
      <Select
        defaultValue={[]}
        isMulti
        name="categories"
        options={restaurantCategories}
        className="basic-multi-select mb-2"
        classNamePrefix="select"
        onChange={handleCategoryChange}
        value={formData.category}
      />

      {inputFields.map(field => {
        return <div key={field} className="field">
          <label className="label">
            {field[0].toUpperCase() + field.slice(1)}
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData[field]}
              onChange={handleChange}
              name={field}
            />
          </div>
        </div>
      })}

      <label className="label">
        {'Price'}
      </label>
      <Select
        defaultValue={[]}
        name="price"
        options={restaurantPrice}
        className="basic-single"
        classNamePrefix="select"
        onChange={handlePriceChange}
        value={formData.price}
      />

      <button className="button mt-5 is-warning">Submit</button>
    </form>
  </div>
}