import { Resolver, Query, Mutation, Args, Int, Subscription} from '@nestjs/graphql';
import { ListenersService } from './listeners.service';
import { Listener } from './entities/listener.entity';
import { CreateListenerInput } from './dto/create-listener.input';
import { UpdateListenerInput } from './dto/update-listener.input';
import { PubSub } from 'graphql-subscriptions';
import { genId } from '../../support/random-uuid.generator';
import { EventListenObject } from './types/eventListenObject.type';
import { GraphQLBoolean } from 'graphql';
import { Public } from 'src/auth/decorators/publicDecorator';

@Resolver(() => Listener)
export class ListenersResolver {

  private pubSub:PubSub;

  constructor(private readonly listenersService: ListenersService) {

    this.pubSub = new PubSub();
  }

  @Query(() => EventListenObject)
  sendToEvent() {
    const obj  = {
      message: `random message (${genId()})`
    };

    this.pubSub.publish('event', obj)
    return obj;
    // return this.listenersService.create(createListenerInput);
  }



  @Public()
  @Subscription(() => EventListenObject,
  {resolve: (payload) => payload})
  listenToEvent(){
    return this.pubSub.asyncIterator('event');
  }

  @Query(() => [Listener], { name: 'listeners' })
  findAll() {
    return this.listenersService.findAll();
  }

  @Query(() => Listener, { name: 'listener' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.listenersService.findOne(id);
  }

  @Mutation(() => Listener)
  updateListener(@Args('updateListenerInput') updateListenerInput: UpdateListenerInput) {
    return this.listenersService.update(updateListenerInput.id, updateListenerInput);
  }

  @Mutation(() => Listener)
  removeListener(@Args('id', { type: () => Int }) id: number) {
    return this.listenersService.remove(id);
  }
}
