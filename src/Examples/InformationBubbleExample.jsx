import React from 'react';
import InformationBubble from '../Components/InformationBubble';

function InformationBubbleExample(props) {
    return (
        <InformationBubble
                title="Did you know?"
                text="You can also login via the Kids form. However the forgot password link is only available on this login form."
                src="./images/FancyBubble.svg" />
    );
}

export default InformationBubbleExample;