function PriceFilter({maxPriceChild, setMaxPriceChild}){

    return (
        <div>
            <label>Filtru Pret Maxim</label>
            <input
                type="range"
                min='0'
                max='200'
                value={maxPriceChild}
                onChange={(e) => setMaxPriceChild(Number(e.target.value))}
            />
            <span>{maxPriceChild} RON</span>
        </div>
    )
}

export default PriceFilter