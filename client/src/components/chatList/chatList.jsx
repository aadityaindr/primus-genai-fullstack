import { Link } from 'react-router-dom'
import './chatList.css'
import { useQuery } from '@tanstack/react-query'

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to='/dashboard'>Create a new Chat</Link>
        <Link to='/'>Explore Primus AI</Link>
        <a href="mailto:aaaditya199@gmail.com">Contact</a>

        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className='List'>
            {isPending 
            ? 'Loading...'
             : error 
             ? 'Something went wrong, try creating a new chat!!'
             : data?.map((chat)=>(
             <Link to= {`/dashboard/chats/${chat._id}`} key={chat._id}>
               {chat.title}</Link>
              
            ))
          }
            </div>
        <hr/>
        <div className="upgrade">
        <img src="/logo1.png" alt="" />
        <div className="texts">
            <span>Upgrade to Autobots</span>
            <span>Get ultimate access to all features</span>
        </div>
        </div>
    </div>
  )
}

export default ChatList