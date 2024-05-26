import avatar from '../images/meo-meo.jpg';
export default function ChatPage() {
    return (
        <div className="chat-page">
            <div className="list-contact">
                <div className="title">
                    <h3>Chat</h3>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="title">
                    <p>List Friend</p>
                </div>
                <div className="list-friend">
                    <div className="friend active">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                    <div className="friend">
                        <img src={avatar} className='avatar' alt="" />
                        <p className='name'>Ndkkey It</p>
                    </div>
                </div>
                <div className='my-account'>
                    <img src={avatar} alt="" className='avatar' />
                    <p className='name'>Nguyễn Đăng Khoa</p>
                </div>
            </div>
            <div className="chat-window">
                <div className="contact-menu">
                    <div className="info">
                        <img src={avatar} alt="" className='avatar'/>
                        <div>
                            <p className='name'>Ndkkey It</p>
                            <p className='active-now'>Active now</p>
                        </div>
                    </div>
                    <div className='menu'>
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-video"></i>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="messages-display">
                    <p className="message other">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit nam? Soluta perspiciatis harum provident natus ab magnam, unde dolores nemo similique porro temporibus culpa iure ad ea debitis reiciendis!</p>
                    <p className="message own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda atque fugit dicta. Asperiores debitis perspiciatis saepe ipsam magnam, repudiandae est!
                    </p>
                    <p className="message other">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit nam? Soluta perspiciatis harum provident natus ab magnam, unde dolores nemo similique porro temporibus culpa iure ad ea debitis reiciendis!</p>
                    <p className="message other">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit nam? Soluta perspiciatis harum provident natus ab magnam, unde dolores nemo similique porro temporibus culpa iure ad ea debitis reiciendis!</p>
                    <p className="message own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda atque fugit dicta. Asperiores debitis perspiciatis saepe ipsam magnam, repudiandae est!
                    </p>
                    <p className="message own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda atque fugit dicta. Asperiores debitis perspiciatis saepe ipsam magnam, repudiandae est!
                    </p>
                </div>
                <div className="message-input">
                    <input type="text" placeholder="Type a message" />
                </div>
                
            </div>
        </div>
    )
}

