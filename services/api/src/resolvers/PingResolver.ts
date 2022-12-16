import { Resolver, Query } from 'type-graphql'
import { Service } from 'typedi'

@Resolver()
@Service()
export class PingResolver {

  @Query(() => String)
  ping() {
    return 'pong'
  }

}
