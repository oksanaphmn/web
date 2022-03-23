import { computed, ComputedRef } from 'vue'

import { useIgnite } from '@ignt/vue'

type Response = {
  address: ComputedRef<string>
  shortAddress: ComputedRef<string>
}

export default function (): Response {
  // ignite
  let { ignite } = useIgnite()

  // computed
  let address = computed<string>(() => ignite.value?.addr)
  let shortAddress = computed<string>(
    () => address.value.substring(0, 10) + '...' + address.value.slice(-4)
  )

  return {
    address,
    shortAddress
  }
}
