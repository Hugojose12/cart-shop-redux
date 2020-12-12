import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { filterByCategories } from '../../../actions/filter';

export const CategoriesFilter = () => {

    const dispatch = useDispatch();

    const categories = [
        "all",
        "men clothing",
        "jewelery",
        "electronics",
        "women clothing"
    ]

    const categoryFilter = (category) => {
        dispatch( filterByCategories(category) )
    }

    const Comp = ({category}) => (
        <li onClick={() => categoryFilter(category)}>
          {`${category.charAt(0).toUpperCase() + category.slice(1)}`}
        </li>
    );

    return (
        <div>
            <p><strong>Categories</strong></p>
            <ul className="list-categories">
                {categories.map((category) => <Comp key={`${category}`} category={category}/>)}
            </ul>
        </div>
    )
}
