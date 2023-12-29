import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {StoreState, StoreActions} from './interface';

const initState: StoreState = {
    modalVisiable:false,
    modalContent:'',
    token:'',
    userInfo:'',
    tab:'home',

};

const useStore = create<StoreState & StoreActions>()(
  devtools(
      immer((set) => ({
        ...initState,
          setModalVisiable:(modalVisiable:boolean)=>set(()=>({modalVisiable})),
          setModalContent:(modalContent:any)=>set(()=>({modalContent})),
          setToken:(token:any)=>set(()=>({token})),
          setUserInfo:(userInfo:any)=>set(()=>({userInfo})),
          setTab:(tab:any)=>set(()=>({tab})),
      })),
      {
        name: 'global-store',
      },
  ),
);
export default useStore;
