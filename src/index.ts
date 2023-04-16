import { assert } from 'typia'

interface IPerson {
  id: string
  value: number
}

assert<IPerson>({ id: 2 })
