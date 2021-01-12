import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../context';

const FilterProducts = () => {
  const { search, min, max, company, price, shipping, handleChange, storeProducts } = useContext(ProductContext)

  let companies = new Set()
  companies.add('all')
  storeProducts.forEach(product => {
    companies.add(product.company)
  });
  companies = [...companies]

  return (
    <div className="row my-5">
      <div className="col-10 mx-auto">
        <FilterWrapper>
          <div>
            <label htmlFor="search">Search Products</label>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleChange}
              value={search}
              className='filter-item'
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <select
              name="company"
              id="company"
              onChange={handleChange}
              value={company}
              className='filter-item'
            >
              {
                companies.map((company, i) => (
                  <option key={i} value={company}>{company}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="price">
              <p className="mb-2">
                Product price: <span>${price}</span>
              </p>
            </label>
            <input
              type="range"
              name="price"
              id="price"
              min={min}
              max={max}
              onChange={handleChange}
              value={price}
              className='filter-price'
            />
          </div>
          <div>
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={handleChange}
              checked={shipping && true}
            />
          </div>
        </FilterWrapper>
      </div>
    </div>
  );
};

const FilterWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px, 1fr));
  gap: 2rem;
  label{
    font-weight:bold;
    text-transform: capitalize;
  }
  .filter-item,.filter-price{
    display:block;
    width:100%;
    background:transparent;
    border-radius:0.5rem;
    border: 1px solid var(--darkGrey);
    :focus{
      outline:0;
    }
  }
`;
export default FilterProducts;
