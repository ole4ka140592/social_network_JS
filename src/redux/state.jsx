let rerenderEntireTree = () => {
    console.log('state')
}

export let state = {
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
}

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}