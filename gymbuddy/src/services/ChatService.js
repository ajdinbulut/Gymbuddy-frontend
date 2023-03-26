import axios from "axios";
const ChatService = {
    getChat: async(userSender,userReceiver) =>{
        const response = await axios.get("https://localhost:7010/api/Chat/getChat",{ params: {userSender:userSender,userReceiver:userReceiver}}, { 
                headers: 
                { 'Content-Type': 'application/json' } });
        return response.data;
    }   
}
export default ChatService