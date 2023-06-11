import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, AnyAction>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
