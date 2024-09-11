document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('accordion__item_active');

    // Закрыть все аккордеоны
    document.querySelectorAll('.accordion__item').forEach(i => {
      i.classList.remove('accordion__item_active');
    });

    // Открыть текущий аккордеон, если он не был активен
    if (!isActive) {
      item.classList.add('accordion__item_active');
    }
  });
});
