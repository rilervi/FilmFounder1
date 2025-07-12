export const genreFetcher = ids => {
  const result = ids.map(id => {
    switch (id) {
      case 28:
        return (id = 'Бойовик');

      case 12:
        return 'Пригоди';

      case 16:
        return 'Мультфільм';

      case 35:
        return 'Комедія';

      case 80:
        return 'Кримінал';

      case 99:
        return 'Документальний';

      case 18:
        return 'Драма';

      case 10751:
        return 'Сімейний';

      case 14:
        return 'Фентезі';

      case 36:
        return 'Історичний';

      case 27:
        return 'Жахи';

      case 10402:
        return 'Музика';

      case 9648:
        return 'Детектив';

      case 10749:
        return 'Мелодрама';

      case 878:
        return 'Фантастика';

      case 10770:
        return 'Телефільм';

      case 53:
        return 'Трилер';

      case 10752:
        return 'Військовий';

      case 37:
        return 'Вестерн';

      default:
        return 'Невідомий Жанр';
    }
  });

  return result;
};

export const extractYear = dateString => {
  const parts = dateString.split('-');

  return parts[0];
};
