import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store'

export const useLobbyListSelector: TypedUseSelectorHook<RootState> = useSelector