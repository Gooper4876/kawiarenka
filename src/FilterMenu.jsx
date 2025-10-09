function handleClick(type) {
    console.log("#" + type);
    document.querySelectorAll('#' + type).forEach(item => {
        item.style.display = (item.style.display === 'none' ? '' : 'none');
    });
    document.querySelectorAll('#' + type+'-button').forEach(button => {
        button.style.backgroundColor = (button.style.backgroundColor === 'red' ? '' : 'red');
    });
    const cardsList = document.querySelector('.coffe-list');
    if (cardsList) {
        const cards = Array.from(cardsList.children);
        const allHidden = cards.every(card => card.style.display === 'none');
        let emptyText = cardsList.querySelector('.empty-text');
        if (allHidden) {
            if (!emptyText) {
                emptyText = document.createElement('div');
                emptyText.className = 'empty-text';
                emptyText.textContent = "sorry we don't have a coffe of that type";
                cardsList.appendChild(emptyText);
            }
        } else {
            if (emptyText) {
                emptyText.remove();
            }
        }
    }
}
function FilterMenu() {
    
    return(
        <div className="buttons">
            <button onClick={() => handleClick("Espresso")} id="Espresso-button">Espresso</button>
            <button onClick={() => handleClick("Przelewy")} id="Przelewy-button">Przelewy</button>
            <button onClick={() => handleClick("Mrożone")} id="Mrożone-button">Mrożone</button>
        </div>
    )
}

export default FilterMenu