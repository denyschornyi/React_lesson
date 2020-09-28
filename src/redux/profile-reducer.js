const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 3,
                    postMessage: state.newPostText,
                    like: 0
                  }
                  state.postData.push(newPost);
                  state.newPostText = '';
                  return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.postTextData;
                return state;
        default:
            return state;

    }

}

export default profileReducer;


export const addPostActionCreator = () => ({type: ADD_POST});

export const onChangeHandlerActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postTextData: text});