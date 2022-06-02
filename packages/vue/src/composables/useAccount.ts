import { Account } from '@cosmjs/stargate'
import { useIgnite } from 'ignite-vue-client'
import { Ref, ref, watch } from 'vue'

import { useAddress } from '.'

type Response = {
  acc: Ref<Account | undefined>
}

export default async function (): Promise<Response> {
  // state
  let acc = ref<Account | undefined>()

  // composables
  let { address } = useAddress()

  // ignite
  let { ignite } = useIgnite()

  // watch
  watch(
    () => address.value,
    async () => {
      if (ignite.signer && address.value) {
        acc.value = (await ignite.signer.value.client?.getAccount(
          address.value
        )) as Account
      } else {
        acc.value = undefined
      }
    },
    { immediate: true }
  )

  return {
    acc
  }
}
