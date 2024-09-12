document.addEventListener('DOMContentLoaded', () => {
  // Находим первый аккордеон и делаем его активным
  const firstAccordionItem = document.querySelector('.accordion__item');
  if (firstAccordionItem) {
    firstAccordionItem.classList.add('isActive');
  }

  // Добавляем обработчики событий для всех заголовков аккордеонов
  document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement.parentElement; // Получаем родительский элемент .accordion__item
      const isActive = item.classList.contains('isActive');

      // Если текущий аккордеон уже активен, просто удаляем класс активности
      if (isActive) {
        item.classList.remove('isActive');
      } else {
        // Закрыть все аккордеоны
        document.querySelectorAll('.accordion__item').forEach(i => {
          i.classList.remove('isActive');
        });

        // Добавить класс активности к текущему аккордеону
        item.classList.add('isActive');
      }
    });
  });
});
