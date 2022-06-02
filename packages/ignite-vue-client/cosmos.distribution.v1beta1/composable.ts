// Generated by Ignite ignite.com/cli
import Module from 'ignite-ts-client/cosmos.distribution.v1beta1/module'
import { unref } from 'vue'

import useIgnite from '../use'

type SendMsgFundCommunityPoolType =
  typeof Module.prototype.sendMsgFundCommunityPool
type SendMsgSetWithdrawAddressType =
  typeof Module.prototype.sendMsgSetWithdrawAddress
type SendMsgWithdrawDelegatorRewardType =
  typeof Module.prototype.sendMsgWithdrawDelegatorReward
type SendMsgWithdrawValidatorCommissionType =
  typeof Module.prototype.sendMsgWithdrawValidatorCommission

type QueryParamsType = typeof Module.prototype.queryParams
type QueryValidatorOutstandingRewardsType =
  typeof Module.prototype.queryValidatorOutstandingRewards
type QueryValidatorCommissionType =
  typeof Module.prototype.queryValidatorCommission
type QueryValidatorSlashesType = typeof Module.prototype.queryValidatorSlashes
type QueryDelegationRewardsType = typeof Module.prototype.queryDelegationRewards
type QueryDelegationTotalRewardsType =
  typeof Module.prototype.queryDelegationTotalRewards
type QueryDelegatorValidatorsType =
  typeof Module.prototype.queryDelegatorValidators
type QueryDelegatorWithdrawAddressType =
  typeof Module.prototype.queryDelegatorWithdrawAddress
type QueryCommunityPoolType = typeof Module.prototype.queryCommunityPool

type Response = {
  sendMsgFundCommunityPool: SendMsgFundCommunityPoolType
  sendMsgSetWithdrawAddress: SendMsgSetWithdrawAddressType
  sendMsgWithdrawDelegatorReward: SendMsgWithdrawDelegatorRewardType
  sendMsgWithdrawValidatorCommission: SendMsgWithdrawValidatorCommissionType

  queryParams: QueryParamsType
  queryValidatorOutstandingRewards: QueryValidatorOutstandingRewardsType
  queryValidatorCommission: QueryValidatorCommissionType
  queryValidatorSlashes: QueryValidatorSlashesType
  queryDelegationRewards: QueryDelegationRewardsType
  queryDelegationTotalRewards: QueryDelegationTotalRewardsType
  queryDelegatorValidators: QueryDelegatorValidatorsType
  queryDelegatorWithdrawAddress: QueryDelegatorWithdrawAddressType
  queryCommunityPool: QueryCommunityPoolType
}

function useModule(): Response {
  let { ignite } = useIgnite()

  let {
    sendMsgFundCommunityPool,

    sendMsgSetWithdrawAddress,

    sendMsgWithdrawDelegatorReward,

    sendMsgWithdrawValidatorCommission,

    queryParams,

    queryValidatorOutstandingRewards,

    queryValidatorCommission,

    queryValidatorSlashes,

    queryDelegationRewards,

    queryDelegationTotalRewards,

    queryDelegatorValidators,

    queryDelegatorWithdrawAddress,

    queryCommunityPool
  } = unref(ignite.cosmosDistributionV1Beta1)

  sendMsgFundCommunityPool = sendMsgFundCommunityPool.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgSetWithdrawAddress = sendMsgSetWithdrawAddress.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgWithdrawDelegatorReward = sendMsgWithdrawDelegatorReward.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgWithdrawValidatorCommission = sendMsgWithdrawValidatorCommission.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryParams = queryParams.bind(ignite.cosmosDistributionV1Beta1)

  queryValidatorOutstandingRewards = queryValidatorOutstandingRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryValidatorCommission = queryValidatorCommission.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryValidatorSlashes = queryValidatorSlashes.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegationRewards = queryDelegationRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegationTotalRewards = queryDelegationTotalRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegatorValidators = queryDelegatorValidators.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegatorWithdrawAddress = queryDelegatorWithdrawAddress.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryCommunityPool = queryCommunityPool.bind(ignite.cosmosDistributionV1Beta1)

  return {
    sendMsgFundCommunityPool,

    sendMsgSetWithdrawAddress,

    sendMsgWithdrawDelegatorReward,

    sendMsgWithdrawValidatorCommission,

    queryParams,

    queryValidatorOutstandingRewards,

    queryValidatorCommission,

    queryValidatorSlashes,

    queryDelegationRewards,

    queryDelegationTotalRewards,

    queryDelegatorValidators,

    queryDelegatorWithdrawAddress,

    queryCommunityPool
  }
}

export { useModule }
