import { Injectable } from '@angular/core';
const adminRoot = '/app';

interface IMenuItem {
    id?: string;
    icon?: string;
    label: string;
    to: string;
    newWindow?: boolean;
    subs?: IMenuItem[];
    roles?: string[];
  }
@Injectable({ providedIn: 'root' })
export class MenuService {
    constructor(){}
    GetCustomeMenus(){
        const data: IMenuItem[]=[];
        var Modules=[]=JSON.parse(localStorage.getItem("Modules"));
          let role = localStorage.getItem("role");
          for (let mo of Modules) {
            const IteratedataMain={
              label: `${mo.mainMenuItems}`,
              to: `${adminRoot}/${mo.mainMenuItems}`,
              roles: [role],
              subs: mo.subMenu.map(f=> {
                return{
                label: `${f.subMenuItems}`,
                to: `${adminRoot}/${mo.mainMenuItems}/${f.subMenuItems}`,
                roles: [role]
                }
              })
            }
            data.push(IteratedataMain)
        }
        return data;
  }
}