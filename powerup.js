var t = window.TrelloPowerUp.iframe();

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      text: '👋 Say Hello',
      callback: function (t) {
        return t.alert({
          message: 'Hello from your Trello Power-Up!',
          duration: 3
        });
      }
    }];
  },

  'card-buttons': function (t, options) {
    return [{
      text: '📋 Card Info',
      callback: async function (t) {
        const card = await t.card('name', 'id');
        t.alert({ message: `Card: ${card.name}`, duration: 4 });
      }
    }];
  }
});
