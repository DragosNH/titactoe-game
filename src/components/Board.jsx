import Square from "./Square";

const Board = () => {
    return (
        <div className="board">
            <div className="board-row">
                <Square vlaue = {0}/>
                <Square vlaue = {1}/>
                <Square vlaue = {2}/>
            </div>
            <div className="board-row">
                <Square vlaue = {3}/>
                <Square vlaue = {4}/>
                <Square vlaue = {5}/>
            </div>
            <div className="board-row">
                <Square vlaue = {6}/>
                <Square vlaue = {7}/>
                <Square vlaue = {8}/>
            </div>
        </div>
    );
};

export default Board;