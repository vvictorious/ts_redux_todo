
export interface NotesState {
    notes: any[]
}

const initialState = {
    notes: []
}

type Action = {
    type: string,
    payload: string
}

export const notesReducer = (state:NotesState = initialState, action:Action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case "DELETE_NOTE":
            return {
                ...state,
                notes: [...state.notes.filter(note => note !== action.payload)]
            }
        case "EDIT_NOTE":
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    return note === action.payload ? action.payload : note
                })]
            }
        default:
            return state
    }
}