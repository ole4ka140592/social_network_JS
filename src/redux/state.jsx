export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 15},
                {id: 2, message: 'It is my first post', like: 20}
            ],
            newPostText: ""
        },

        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'}, {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'}
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("State changed")
    },

    rerenderEntireTree() {
        console.log('State changed')
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         like: 0
    //     }
    //
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-POST") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    subscriber(observer) {
        this._callSubscriber = observer
    }
}

export default store
window.store = store