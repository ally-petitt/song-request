import React, { useState } from 'react'
import { Link } from "react-router-dom"
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ChatModal from './chat/ChatModal';

function Navbar() {
    const [chatOpen, setChatOpen] = useState(false)

    return (
        <div>
            <Link to="/join/group">HOME</Link>
            <QuestionAnswerRoundedIcon onClick={() => setChatOpen(!chatOpen)} />

            {chatOpen ? <ChatModal /> : null}
        </div>
    )
}

export default Navbar
