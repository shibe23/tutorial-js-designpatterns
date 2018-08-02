var Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: (observer) => {
      this.observers.push(observer);
    },

    unsubscribeObserver: (observer) => {
      //unsubscribeするobserverのindexを取得
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        // index番号の配列を取り除く
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: (observer) => {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: () =>{
      for (var i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      } 
    }
  }
}

var Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2);

subject.notifyAllObservers();