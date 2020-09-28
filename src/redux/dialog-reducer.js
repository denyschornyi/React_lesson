const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATED_MESSAGE_TEXT = 'UPDATED-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

    switch (action.type){
        case ADD_MESSAGE:
                let newMessage = {
                    id: 4,
                    message: state.newMessage
                  }
                
                  state.messageData.push(newMessage);
                  state.newMessage = '';
                  return state;
        case UPDATED_MESSAGE_TEXT:
                state.newMessage = action.updatedMessageText;
                return state;
        default: 
                  return state;

    }
}

export default dialogReducer;


export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updatedMessageActionCreator = (text) => ({type: UPDATED_MESSAGE_TEXT, updatedMessageText: text });