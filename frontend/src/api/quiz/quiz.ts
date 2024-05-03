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
  GetAllQuizQuizzesGetParams,
  HTTPValidationError,
  QuizCreate,
  QuizPublic,
  QuizQuestions,
  QuizQuestionsCreate,
  QuizzesPublic
} from '.././model'


  
  /**
 * Get all quiz related to the current teacher
Return: list of quizzes that created by the current user
 * @summary Get All Quiz
 */
export const getAllQuizQuizzesGet = (
    params?: GetAllQuizQuizzesGetParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuizzesPublic>> => {
    return axios.default.get(
      `/quizzes`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetAllQuizQuizzesGetKey = (params?: GetAllQuizQuizzesGetParams,) => [`/quizzes`, ...(params ? [params]: [])] as const;


export type GetAllQuizQuizzesGetQueryResult = NonNullable<Awaited<ReturnType<typeof getAllQuizQuizzesGet>>>
export type GetAllQuizQuizzesGetQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get All Quiz
 */
export const useGetAllQuizQuizzesGet = <TError = AxiosError<HTTPValidationError>>(
  params?: GetAllQuizQuizzesGetParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getAllQuizQuizzesGet>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetAllQuizQuizzesGetKey(params) : null);
  const swrFn = () => getAllQuizQuizzesGet(params, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Create a quiz
Param: quiz_in: QuizCreate Object contain information needed to create a quiz
Return:  quiz with information
 * @summary Create Quiz Id
 */
export const createQuizIdQuizPost = (
    quizCreate: QuizCreate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuizPublic>> => {
    return axios.default.post(
      `/quiz`,
      quizCreate,options
    );
  }



export const getCreateQuizIdQuizPostMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<QuizPublic>> => {
    return createQuizIdQuizPost(arg as QuizCreate, options);
  }
}
export const getCreateQuizIdQuizPostMutationKey = () => `/quiz` as const;

export type CreateQuizIdQuizPostMutationResult = NonNullable<Awaited<ReturnType<typeof createQuizIdQuizPost>>>
export type CreateQuizIdQuizPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Create Quiz Id
 */
export const useCreateQuizIdQuizPost = <TError = AxiosError<HTTPValidationError>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof createQuizIdQuizPost>>, TError, string, Arguments, Awaited<ReturnType<typeof createQuizIdQuizPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getCreateQuizIdQuizPostMutationKey();
  const swrFn = getCreateQuizIdQuizPostMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Get a quiz by it ID
Param: quiz_id: id of quiz
Return:  QuizQuestions object - contain quiz and related questions information.
 * @summary Get Quiz Questions
 */
export const getQuizQuestionsQuizQuizIdGet = (
    quizId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuizQuestions>> => {
    return axios.default.get(
      `/quiz/${quizId}`,options
    );
  }



export const getGetQuizQuestionsQuizQuizIdGetKey = (quizId: number,) => [`/quiz/${quizId}`] as const;


export type GetQuizQuestionsQuizQuizIdGetQueryResult = NonNullable<Awaited<ReturnType<typeof getQuizQuestionsQuizQuizIdGet>>>
export type GetQuizQuestionsQuizQuizIdGetQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get Quiz Questions
 */
export const useGetQuizQuestionsQuizQuizIdGet = <TError = AxiosError<HTTPValidationError>>(
  quizId: number, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getQuizQuestionsQuizQuizIdGet>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(quizId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetQuizQuestionsQuizQuizIdGetKey(quizId) : null);
  const swrFn = () => getQuizQuestionsQuizQuizIdGet(quizId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Update Quiz Questions
 */
export const updateQuizQuestionsQuizQuizIdPatch = (
    quizId: unknown, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuizQuestions>> => {
    return axios.default.patch(
      `/quiz/${quizId}`,undefined,options
    );
  }



export const getUpdateQuizQuestionsQuizQuizIdPatchMutationFetcher = (quizId: unknown, options?: AxiosRequestConfig) => {
  return (_: string, __: { arg: Arguments }): Promise<AxiosResponse<QuizQuestions>> => {
    return updateQuizQuestionsQuizQuizIdPatch(quizId, options);
  }
}
export const getUpdateQuizQuestionsQuizQuizIdPatchMutationKey = (quizId: unknown,) => `/quiz/${quizId}` as const;

export type UpdateQuizQuestionsQuizQuizIdPatchMutationResult = NonNullable<Awaited<ReturnType<typeof updateQuizQuestionsQuizQuizIdPatch>>>
export type UpdateQuizQuestionsQuizQuizIdPatchMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Update Quiz Questions
 */
export const useUpdateQuizQuestionsQuizQuizIdPatch = <TError = AxiosError<HTTPValidationError>>(
  quizId: unknown, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof updateQuizQuestionsQuizQuizIdPatch>>, TError, string, Arguments, Awaited<ReturnType<typeof updateQuizQuestionsQuizQuizIdPatch>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUpdateQuizQuestionsQuizQuizIdPatchMutationKey(quizId);
  const swrFn = getUpdateQuizQuestionsQuizQuizIdPatchMutationFetcher(quizId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Create a quiz with list of questions and answers. This is an another version of quiz
Param: quiz_in: QuizCreate Object contain information needed to create a quiz
Return:  quiz with questions and answers
 * @summary Create Quiz Questions Api
 */
export const createQuizQuestionsApiQuizVer2Post = (
    quizQuestionsCreate: QuizQuestionsCreate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuizQuestions>> => {
    return axios.default.post(
      `/quiz_ver2`,
      quizQuestionsCreate,options
    );
  }



export const getCreateQuizQuestionsApiQuizVer2PostMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<QuizQuestions>> => {
    return createQuizQuestionsApiQuizVer2Post(arg as QuizQuestionsCreate, options);
  }
}
export const getCreateQuizQuestionsApiQuizVer2PostMutationKey = () => `/quiz_ver2` as const;

export type CreateQuizQuestionsApiQuizVer2PostMutationResult = NonNullable<Awaited<ReturnType<typeof createQuizQuestionsApiQuizVer2Post>>>
export type CreateQuizQuestionsApiQuizVer2PostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Create Quiz Questions Api
 */
export const useCreateQuizQuestionsApiQuizVer2Post = <TError = AxiosError<HTTPValidationError>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof createQuizQuestionsApiQuizVer2Post>>, TError, string, Arguments, Awaited<ReturnType<typeof createQuizQuestionsApiQuizVer2Post>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getCreateQuizQuestionsApiQuizVer2PostMutationKey();
  const swrFn = getCreateQuizQuestionsApiQuizVer2PostMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
