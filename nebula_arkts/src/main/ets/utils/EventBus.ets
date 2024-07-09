import emitter from '@ohos.events.emitter';

export default class EventBus {
  private static instance: EventBus;

  private constructor() {

  }

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  // event subscription
  on(name: number, callback:(eventData: emitter.EventData) => void) {
    let event: emitter.InnerEvent = {
      eventId: name,
      priority: emitter.EventPriority.IMMEDIATE // level
    }
    emitter.on(event, callback);
  }

  // event unsubscription
  unregister(name: number) {
    emitter.off(name);
  }

  // emit event
  emit(name: number, data?: emitter.EventData) {
    let event: emitter.InnerEvent = {
      eventId: name,
      priority: emitter.EventPriority.IMMEDIATE
    };

    let eventData: emitter.EventData = {
      data: data
    };

    emitter.emit(event, eventData);
  }
}