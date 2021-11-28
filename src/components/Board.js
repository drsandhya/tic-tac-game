import React from 'react';
import Square from './Square';

const Board = () => {
    return (
        <div>
            <div>
                <Square valuve={0} />
                <Square valuve={1} />
                <Square valuve={2} />
            </div>
            <div>
                <Square valuve={3} />
                <Square valuve={4}/>
                <Square valuve={5}/>
            </div>
            <div>
                <Square valuve={6}/>
                <Square valuve={7}/>
                <Square valuve={8}/>
            </div>
            
        </div>
    )
}

export default Board
