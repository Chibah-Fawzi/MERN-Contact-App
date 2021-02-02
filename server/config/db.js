const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fawzi:azertyuiopqsd@cluster0.m2zyu.mongodb.net/test', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = mongoose;
