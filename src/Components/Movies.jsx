import { Movs } from "./Movs";

function Movies(props) {
    const { movs = [] } = props;

    return (
        <div className='movies'>
            {movs.length ? (
                movs.map((movs) => <Movs key={movs.imdbID} {...movs} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
export { Movies };