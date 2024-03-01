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
    activityParams:{},
    loading:true,
};

const useStore = create<StoreState & StoreActions>()(
  devtools(
      immer((set) => ({
        ...initState,
          setModalVisiable:(modalVisiable:boolean)=>set(()=>({modalVisiable})),
          setModalContent:(modalContent:any)=>set(()=>({modalContent})),
          setActivityParams:(activityParams:any)=>set(()=>({activityParams})),
          setToken:(token:any)=>set(()=>({token})),
          setUserInfo:(userInfo:any)=>set(()=>({userInfo})),
          setLoading:(loading:any)=>set(()=>({loading})),
          setTab:(tab:any)=>set(()=>({tab})),
      })),
      {
        name: 'global-store',
      },
  ),
);
export default useStore;
