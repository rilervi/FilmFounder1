import MovieList from 'components/MovieList/MovieList';
import React, { useState } from 'react';
import {
  CategoryStyled,
  CategoryTitleStyled,
  ShowMoreBtn,
} from './Category.styled';

const Category = ({ moviesFromCategory, categoryTitle }) => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const toggleShowItems = () => {
    if (showAll) {
      setVisibleItems(5); // Повертаємо до 5 елементів
    } else {
      setVisibleItems(moviesFromCategory.length); // Відображаємо всі елементи
    }
    setShowAll(!showAll); // Перемикаємо стан
  };

  return (
    <CategoryStyled>
      <CategoryTitleStyled>{categoryTitle}</CategoryTitleStyled>
      <MovieList topDayMovie={moviesFromCategory.slice(0, visibleItems)} />
      <ShowMoreBtn onClick={toggleShowItems}>
        {showAll ? 'Приховати' : 'Показати більше'}
      </ShowMoreBtn>
    </CategoryStyled>
  );
};

export default Category;
