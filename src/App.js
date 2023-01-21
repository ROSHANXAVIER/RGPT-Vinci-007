import './App.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';




function App() {
  const [spin,setSpin]=useState(false);
  const [input,setInput]=useState("");
  const [chatlog,setChatlog]=useState([{user:"gpt",message:"Go ahead ask me something?"}]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const i =input;
    setInput("");
    setSpin(true);
    await axios.post(process.env.React_App_RGPT,{prompt:i}).then(res=>{
      setChatlog([...chatlog,{user:"user",message:`${i}`},{user:"gpt",message:`${res.data}`}]);
        setSpin(false);
    })

  }
  return (
    <div className="main">
     <div className="col1">
      <div className="col1-row1">
        <div className="result">
          <div className="heading1">
            <p className="heading2"><strong>ASK ME ANYTHING</strong></p>
            <a href="https://www.linkedin.com/in/roshan-xavier-1ab097214/" target="_blank" rel="noreferrer"><div className="logo"><img className="head-img" src="data:image/png;base64,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" alt="logo"/></div></a>
          </div>
          <div className='chats'>
            {chatlog.map((chat)=>
                {
                  if(chat.user==="gpt"){
                      return( <div className='cha'><span className='avatar'><img className='avatar' alt='avatar' src="https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png"/></span><Card  border="success" className='bot-text' body>{chat.message}</Card></div> )
                  }
                  return(<div className='cha'><span className='avatar'><img className='avatar' alt='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU"/></span><Card  border="success" className='bot-text' body>{chat.message}</Card></div>)
                }

            
            )}
         {/* <div className='cha'><span className='avatar'><img className='avatar' alt='avatar' src="https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png"/></span><Card  border="success" className='bot-text' body>This is some text within a card body.</Card></div> 
         <div className='cha'><span className='avatar'><img className='avatar' alt='avatar' src="https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png"/></span><Card  border="success" className='bot-text' body>This is some text within a card body.</Card></div> 
         {chatlog!=="" && <div className='cha'><span className='avatar'><img className='avatar' alt='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU"/></span><Card  border="success" className='bot-text' body>{chatlog}</Card></div>}         */}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
          <input className="input" type="text-area" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
          {!spin && <span><button className='submit' type='submit'><img alt="n" className='sub' src="https://cdn-icons-png.flaticon.com/512/60/60525.png"/></button></span>}
          {spin && <span className='spinner'><Spinner size="sm" animation="border" variant="light" /></span>}
          </form>
        </div>
      </div>
     </div>
     <div className="col2">
      <div className='col2-c1'>
     <a href="https://github.com/ROSHANXAVIER" target="_blank" rel="noreferrer">
        <img className='git'
          src="https://avatars.githubusercontent.com/u/45807407?v=4"
          alt="git"
        />
      </a>
      </div>
      
      <div className='col2-c1'>
      <a href="https://www.linkedin.com/in/roshan-xavier-1ab097214/" target="_blank" rel="noreferrer">
        <img className='git'
          src="https://s.widget-club.com/samples/BfOoCSLfeIW5hwgmk5yNYU2TFps1/zsgHajqGQ5M71xFjbJ7Z/FC9DE4EC-83D8-4F6C-A340-3FDDAC9C1126.jpg?q=70"
          alt="linkedin"
        />
      </a>
      </div>
     </div>
    </div>
  );
}

export default App;
