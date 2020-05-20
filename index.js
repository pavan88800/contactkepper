const express = require('express');
const app = express();

//  PORT
const Port = process.env.PORT || 5000;

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/contact', require('./routes/contact'));
//  Create Server
app.listen(Port, () => {
	console.log(`server is Runing on http://localhost:${Port}`);
});
