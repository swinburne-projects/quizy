/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import useSwr from 'swr'
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  HTTPValidationError,
  TeacherCreate,
  TeacherPassword,
  TeacherPublic
} from '.././model'


  
  /**
 * @summary Read Teacher
 */
export const readTeacherMeInfoGet = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TeacherPublic>> => {
    return axios.default.get(
      `/me/info`,options
    );
  }



export const getReadTeacherMeInfoGetKey = () => [`/me/info`] as const;


export type ReadTeacherMeInfoGetQueryResult = NonNullable<Awaited<ReturnType<typeof readTeacherMeInfoGet>>>
export type ReadTeacherMeInfoGetQueryError = AxiosError<unknown>

/**
 * @summary Read Teacher
 */
export const useReadTeacherMeInfoGet = <TError = AxiosError<unknown>>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof readTeacherMeInfoGet>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getReadTeacherMeInfoGetKey() : null);
  const swrFn = () => readTeacherMeInfoGet(axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Register Teacher
 */
export const registerTeacherSignupPost = (
    teacherCreate: TeacherCreate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TeacherPublic>> => {
    return axios.default.post(
      `/signup`,
      teacherCreate,options
    );
  }



export const getRegisterTeacherSignupPostMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<TeacherPublic>> => {
    return registerTeacherSignupPost(arg as TeacherCreate, options);
  }
}
export const getRegisterTeacherSignupPostMutationKey = () => `/signup` as const;

export type RegisterTeacherSignupPostMutationResult = NonNullable<Awaited<ReturnType<typeof registerTeacherSignupPost>>>
export type RegisterTeacherSignupPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Register Teacher
 */
export const useRegisterTeacherSignupPost = <TError = AxiosError<HTTPValidationError>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof registerTeacherSignupPost>>, TError, string, Arguments, Awaited<ReturnType<typeof registerTeacherSignupPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getRegisterTeacherSignupPostMutationKey();
  const swrFn = getRegisterTeacherSignupPostMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Change Teacher Password
 */
export const changeTeacherPasswordMePasswordPatch = (
    teacherPassword: TeacherPassword, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.default.patch(
      `/me/password`,
      teacherPassword,options
    );
  }



export const getChangeTeacherPasswordMePasswordPatchMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<unknown>> => {
    return changeTeacherPasswordMePasswordPatch(arg as TeacherPassword, options);
  }
}
export const getChangeTeacherPasswordMePasswordPatchMutationKey = () => `/me/password` as const;

export type ChangeTeacherPasswordMePasswordPatchMutationResult = NonNullable<Awaited<ReturnType<typeof changeTeacherPasswordMePasswordPatch>>>
export type ChangeTeacherPasswordMePasswordPatchMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Change Teacher Password
 */
export const useChangeTeacherPasswordMePasswordPatch = <TError = AxiosError<HTTPValidationError>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof changeTeacherPasswordMePasswordPatch>>, TError, string, Arguments, Awaited<ReturnType<typeof changeTeacherPasswordMePasswordPatch>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getChangeTeacherPasswordMePasswordPatchMutationKey();
  const swrFn = getChangeTeacherPasswordMePasswordPatchMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
