
function Pasteis(arr){
    
    return (
        <>{
            arr.props.map((pastel)=>(
                <div key={pastel['_id']}>{Object.keys(pastel)[1]}</div>
            ))
        }</>
    )
};

export default Pasteis;