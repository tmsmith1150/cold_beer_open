const db = require("../models");

module.exports = {
    showAllEvent: async function() {
        const user = await Identifier.find().populate("customer");
      
        console.log("> All Identifiers\n", identifiers);
      },

      createEvent: function(req, res) {
        db.Event
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}
