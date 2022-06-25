import React, { ReactElement } from "react";

interface Props {
    name: string;
}

function FristComponent(props: Props): ReactElement {
    return (
        <div>
            <p>Olá, {props.name}!</p>
        </div>
    );
}

export default FristComponent;
