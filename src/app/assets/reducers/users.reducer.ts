import { ActionParent } from '../actions/users-actions/user-actions';
import { UsersActionTypes } from '../shared/enum/users.enum.types';
import { Users } from '../../users';


const initialState: any = {
    users: [
        {
            id: "1",
            employee_name: "Tiger Nixon",
            employee_salary: "320800",
            employee_age: "61",
            profile_image: ""
        },
        {
            id: "2",
            employee_name: "Garrett Winters",
            employee_salary: "170750",
            employee_age: "63",
            profile_image: ""
        },
        {
            id: "3",
            employee_name: "Ashton Cox",
            employee_salary: "86000",
            employee_age: "66",
            profile_image: ""
        },
        {
            id: "4",
            employee_name: "Cedric Kelly",
            employee_salary: "433060",
            employee_age: "22",
            profile_image: ""
        }
    ],
    selectedUser: null

}

export function UserReducer(state = initialState, action: ActionParent) {


    switch (action.type) {
        case UsersActionTypes.Select:
            console.log('triggered*********')
            let tempState={...state};
            state=null;
            state=tempState;
            state.selectedUser = action.payload;
            console.log(state);
            return state;
        default: return state;
    }


}
