function FilterBar({setFilter}){
    return (
        <div className="filters">
            <button onClick={()=>setFilter("all")}>All</button>
            <button onClick={()=>setFilter("completed")}>completed</button>
            <button onClick={()=>setFilter("pending")}>pending</button>
        </div>
    );
}
export default FilterBar;