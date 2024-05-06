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
  LoaderQuizData,
  QuestionReponsePublic,
  QuestionResponseCreate,
  StudentPublic,
  StudentRegister
} from '.././model'


  
  /**
 * Return QuizzesSession  - Quiz contain list of quiz in different
Params:
    session: SQL session
    student_in: Student information => To ensure student is already in the room
 * @summary Get Room Info
 */
export const getRoomInfoRoomRoomIdInfoGet = (
    roomId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<LoaderQuizData>> => {
    return axios.default.get(
      `/room/${roomId}/info`,options
    );
  }



export const getGetRoomInfoRoomRoomIdInfoGetKey = (roomId: number,) => [`/room/${roomId}/info`] as const;


export type GetRoomInfoRoomRoomIdInfoGetQueryResult = NonNullable<Awaited<ReturnType<typeof getRoomInfoRoomRoomIdInfoGet>>>
export type GetRoomInfoRoomRoomIdInfoGetQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get Room Info
 */
export const useGetRoomInfoRoomRoomIdInfoGet = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getRoomInfoRoomRoomIdInfoGet>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(roomId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetRoomInfoRoomRoomIdInfoGetKey(roomId) : null);
  const swrFn = () => getRoomInfoRoomRoomIdInfoGet(roomId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Return QuizzesSession  - Quiz contain list of quiz in different
Params:
    session: SQL session
    student_in: Student information => To ensure student is already in the room
 * @summary Get Room Quiz
 */
export const getRoomQuizRoomRoomIdQuizGet = (
    roomId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.default.get(
      `/room/${roomId}/quiz`,options
    );
  }



export const getGetRoomQuizRoomRoomIdQuizGetKey = (roomId: number,) => [`/room/${roomId}/quiz`] as const;


export type GetRoomQuizRoomRoomIdQuizGetQueryResult = NonNullable<Awaited<ReturnType<typeof getRoomQuizRoomRoomIdQuizGet>>>
export type GetRoomQuizRoomRoomIdQuizGetQueryError = AxiosError<HTTPValidationError>

/**
 * @summary Get Room Quiz
 */
export const useGetRoomQuizRoomRoomIdQuizGet = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getRoomQuizRoomRoomIdQuizGet>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(roomId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetRoomQuizRoomRoomIdQuizGetKey(roomId) : null);
  const swrFn = () => getRoomQuizRoomRoomIdQuizGet(roomId, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Return: RoomSession - Room info with the random questions list
Params:
    session: SQL session
    Teacher: Teacher info. To ensure teacher is room owner
 * @summary Start Room Quiz
 */
export const startRoomQuizRoomRoomIdStartQuizPost = (
    roomId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<LoaderQuizData>> => {
    return axios.default.post(
      `/room/${roomId}/start_quiz`,undefined,options
    );
  }



export const getStartRoomQuizRoomRoomIdStartQuizPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, __: { arg: Arguments }): Promise<AxiosResponse<LoaderQuizData>> => {
    return startRoomQuizRoomRoomIdStartQuizPost(roomId, options);
  }
}
export const getStartRoomQuizRoomRoomIdStartQuizPostMutationKey = (roomId: number,) => `/room/${roomId}/start_quiz` as const;

export type StartRoomQuizRoomRoomIdStartQuizPostMutationResult = NonNullable<Awaited<ReturnType<typeof startRoomQuizRoomRoomIdStartQuizPost>>>
export type StartRoomQuizRoomRoomIdStartQuizPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Start Room Quiz
 */
export const useStartRoomQuizRoomRoomIdStartQuizPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof startRoomQuizRoomRoomIdStartQuizPost>>, TError, string, Arguments, Awaited<ReturnType<typeof startRoomQuizRoomRoomIdStartQuizPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getStartRoomQuizRoomRoomIdStartQuizPostMutationKey(roomId);
  const swrFn = getStartRoomQuizRoomRoomIdStartQuizPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Teacher move to next question
 * @summary Start Next Ques
 */
export const startNextQuesRoomRoomIdNextQuestionPost = (
    roomId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.default.post(
      `/room/${roomId}/next_question`,undefined,options
    );
  }



export const getStartNextQuesRoomRoomIdNextQuestionPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, __: { arg: Arguments }): Promise<AxiosResponse<unknown>> => {
    return startNextQuesRoomRoomIdNextQuestionPost(roomId, options);
  }
}
export const getStartNextQuesRoomRoomIdNextQuestionPostMutationKey = (roomId: number,) => `/room/${roomId}/next_question` as const;

export type StartNextQuesRoomRoomIdNextQuestionPostMutationResult = NonNullable<Awaited<ReturnType<typeof startNextQuesRoomRoomIdNextQuestionPost>>>
export type StartNextQuesRoomRoomIdNextQuestionPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Start Next Ques
 */
export const useStartNextQuesRoomRoomIdNextQuestionPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof startNextQuesRoomRoomIdNextQuestionPost>>, TError, string, Arguments, Awaited<ReturnType<typeof startNextQuesRoomRoomIdNextQuestionPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getStartNextQuesRoomRoomIdNextQuestionPostMutationKey(roomId);
  const swrFn = getStartNextQuesRoomRoomIdNextQuestionPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Not Implemented yet
End the current room session and return statistics of all user
 * @summary End Room Quiz
 */
export const endRoomQuizRoomRoomIdEndSessionPost = (
    roomId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.default.post(
      `/room/${roomId}/end_session`,undefined,options
    );
  }



export const getEndRoomQuizRoomRoomIdEndSessionPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, __: { arg: Arguments }): Promise<AxiosResponse<unknown>> => {
    return endRoomQuizRoomRoomIdEndSessionPost(roomId, options);
  }
}
export const getEndRoomQuizRoomRoomIdEndSessionPostMutationKey = (roomId: number,) => `/room/${roomId}/end_session` as const;

export type EndRoomQuizRoomRoomIdEndSessionPostMutationResult = NonNullable<Awaited<ReturnType<typeof endRoomQuizRoomRoomIdEndSessionPost>>>
export type EndRoomQuizRoomRoomIdEndSessionPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary End Room Quiz
 */
export const useEndRoomQuizRoomRoomIdEndSessionPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof endRoomQuizRoomRoomIdEndSessionPost>>, TError, string, Arguments, Awaited<ReturnType<typeof endRoomQuizRoomRoomIdEndSessionPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getEndRoomQuizRoomRoomIdEndSessionPostMutationKey(roomId);
  const swrFn = getEndRoomQuizRoomRoomIdEndSessionPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Create QuestionResponse for student

Return: QuestionResponsePublic models
 * @summary Submit Question Response
 */
export const submitQuestionResponseRoomRoomIdAnswerPost = (
    roomId: number,
    questionResponseCreate: QuestionResponseCreate, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<QuestionReponsePublic>> => {
    return axios.default.post(
      `/room/${roomId}/answer`,
      questionResponseCreate,options
    );
  }



export const getSubmitQuestionResponseRoomRoomIdAnswerPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<QuestionReponsePublic>> => {
    return submitQuestionResponseRoomRoomIdAnswerPost(roomId, arg as QuestionResponseCreate, options);
  }
}
export const getSubmitQuestionResponseRoomRoomIdAnswerPostMutationKey = (roomId: number,) => `/room/${roomId}/answer` as const;

export type SubmitQuestionResponseRoomRoomIdAnswerPostMutationResult = NonNullable<Awaited<ReturnType<typeof submitQuestionResponseRoomRoomIdAnswerPost>>>
export type SubmitQuestionResponseRoomRoomIdAnswerPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Submit Question Response
 */
export const useSubmitQuestionResponseRoomRoomIdAnswerPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof submitQuestionResponseRoomRoomIdAnswerPost>>, TError, string, Arguments, Awaited<ReturnType<typeof submitQuestionResponseRoomRoomIdAnswerPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getSubmitQuestionResponseRoomRoomIdAnswerPostMutationKey(roomId);
  const swrFn = getSubmitQuestionResponseRoomRoomIdAnswerPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Student join room
 * @summary Student Join Room
 */
export const studentJoinRoomRoomRoomIdJoinPost = (
    roomId: number,
    studentRegister: StudentRegister, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<StudentPublic>> => {
    return axios.default.post(
      `/room/${roomId}/join`,
      studentRegister,options
    );
  }



export const getStudentJoinRoomRoomRoomIdJoinPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<StudentPublic>> => {
    return studentJoinRoomRoomRoomIdJoinPost(roomId, arg as StudentRegister, options);
  }
}
export const getStudentJoinRoomRoomRoomIdJoinPostMutationKey = (roomId: number,) => `/room/${roomId}/join` as const;

export type StudentJoinRoomRoomRoomIdJoinPostMutationResult = NonNullable<Awaited<ReturnType<typeof studentJoinRoomRoomRoomIdJoinPost>>>
export type StudentJoinRoomRoomRoomIdJoinPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Student Join Room
 */
export const useStudentJoinRoomRoomRoomIdJoinPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof studentJoinRoomRoomRoomIdJoinPost>>, TError, string, Arguments, Awaited<ReturnType<typeof studentJoinRoomRoomRoomIdJoinPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getStudentJoinRoomRoomRoomIdJoinPostMutationKey(roomId);
  const swrFn = getStudentJoinRoomRoomRoomIdJoinPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * Not Implemented yet
Get statistics for the whole group
 * @summary Get Room Stats
 */
export const getRoomStatsRoomRoomIdStatsPost = (
    roomId: number,
    studentPublic: StudentPublic, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<unknown>> => {
    return axios.default.post(
      `/room/${roomId}/stats`,
      studentPublic,options
    );
  }



export const getGetRoomStatsRoomRoomIdStatsPostMutationFetcher = (roomId: number, options?: AxiosRequestConfig) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<AxiosResponse<unknown>> => {
    return getRoomStatsRoomRoomIdStatsPost(roomId, arg as StudentPublic, options);
  }
}
export const getGetRoomStatsRoomRoomIdStatsPostMutationKey = (roomId: number,) => `/room/${roomId}/stats` as const;

export type GetRoomStatsRoomRoomIdStatsPostMutationResult = NonNullable<Awaited<ReturnType<typeof getRoomStatsRoomRoomIdStatsPost>>>
export type GetRoomStatsRoomRoomIdStatsPostMutationError = AxiosError<HTTPValidationError>

/**
 * @summary Get Room Stats
 */
export const useGetRoomStatsRoomRoomIdStatsPost = <TError = AxiosError<HTTPValidationError>>(
  roomId: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof getRoomStatsRoomRoomIdStatsPost>>, TError, string, Arguments, Awaited<ReturnType<typeof getRoomStatsRoomRoomIdStatsPost>>> & { swrKey?: string }, axios?: AxiosRequestConfig }
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getGetRoomStatsRoomRoomIdStatsPostMutationKey(roomId);
  const swrFn = getGetRoomStatsRoomRoomIdStatsPostMutationFetcher(roomId,axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
