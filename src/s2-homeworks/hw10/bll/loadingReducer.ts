export type InstateType = {
    isLoading: boolean;
};

const initState: InstateType = {
    isLoading: false,
};

export const loadingReducer = (
    state = initState,
    action: LoadingActionType
): InstateType => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

type LoadingActionType = {
    type: "CHANGE_LOADING";
    payload: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: "CHANGE_LOADING",
    payload: isLoading,
});