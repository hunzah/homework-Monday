import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': // by name
            return action.payload === 'up'
                ? [...state.sort((a, b) => a.name.localeCompare(b.name))]
                : action.payload === 'down'
                    ? [...state.sort((a, b) => b.name.localeCompare(a.name))]
                    : state;
        case 'check': {
            return [...state.filter((user) => user.age > 18).sort((a, b) => a._id - b._id)];
        }
        default:
            return state;
    }
}



