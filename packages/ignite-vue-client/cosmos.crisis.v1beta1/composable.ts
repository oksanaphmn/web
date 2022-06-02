// Generated by Ignite ignite.com/cli
import Module from 'ignite-ts-client/cosmos.crisis.v1beta1/module'
import { unref } from 'vue'

import useIgnite from '../use'

type SendMsgVerifyInvariantType = typeof Module.prototype.sendMsgVerifyInvariant

type Response = {
  sendMsgVerifyInvariant: SendMsgVerifyInvariantType
}

function useModule(): Response {
  let { ignite } = useIgnite()

  let { sendMsgVerifyInvariant } = unref(ignite.cosmosCrisisV1Beta1)

  sendMsgVerifyInvariant = sendMsgVerifyInvariant.bind(
    ignite.cosmosCrisisV1Beta1
  )

  return {
    sendMsgVerifyInvariant
  }
}

export { useModule }
