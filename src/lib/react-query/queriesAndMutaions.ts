import { useQueries, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import { createUserAccount } from '@/lib/appwrite/api';
import { INewUser } from '../../types/index';

export const useCreateUserAccountMutation = ()=> {
    return useMutation({mutationFn: (user: INewUser)=> createUserAccount(user)})
}