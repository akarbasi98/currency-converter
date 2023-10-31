swapBtn.addEventListener('click', () => {
    let fromIndex = fromCurrencyOptions.selectedIndex;
    let toIndex = toCurrencyOptions.selectedIndex;
    fromCurrencyOptions.querySelectorAll('option')[toIndex].selected = 'selected';
    toCurrencyOptions.querySelectorAll('option')[fromIndex].selected = 'selected';
});