// Generated by Ignite ignite.com/cli
import Module from 'ignite-ts-client/cosmos.auth.v1beta1/module'
import { unref } from 'vue'

import useIgnite from '../use'

type QueryAccountsType = typeof Module.prototype.queryAccounts
type QueryAccountType = typeof Module.prototype.queryAccount
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  queryAccounts: QueryAccountsType
  queryAccount: QueryAccountType
  queryParams: QueryParamsType
}

function useModule(): Response {
  let { ignite } = useIgnite()

  let {
    queryAccounts,

    queryAccount,

    queryParams
  } = unref(ignite.cosmosAuthV1Beta1)

  queryAccounts = queryAccounts.bind(ignite.cosmosAuthV1Beta1)

  queryAccount = queryAccount.bind(ignite.cosmosAuthV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosAuthV1Beta1)

  return {
    queryAccounts,

    queryAccount,

    queryParams
  }
}

export { useModule }
