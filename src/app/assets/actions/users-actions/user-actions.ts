import {Action} from '@ngrx/store';
import {UsersActionTypes} from '../../shared/enum/users.enum.types';




// being used as an interface
export class ActionParent implements Action{
    type: any;
    payload:any;    
}




export class UsersSelect implements ActionParent{
    type= UsersActionTypes.Select;
    

    constructor(public payload:any){

    }


}