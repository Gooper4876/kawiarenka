function handleClick(type) {
    console.log("#" + type);
    document.querySelectorAll('#' + type).forEach(item => {
        item.style.display = (item.style.display === 'none' ? '' : 'none');
    });
    document.querySelectorAll('#' + type+'-button').forEach(button => {
        button.style.backgroundColor = (button.style.backgroundColor === 'red' ? '' : 'red');
    });
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