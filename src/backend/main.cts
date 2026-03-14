import express from 'express';
import path from 'path';
 
const app = express();
app.use('/game', express.static(path.join(__dirname, "../../game/@dist"), {index: "../index.html"}));
app.use('/editor', express.static(path.join(__dirname, "../../editor/@dist"), {index: "../index.html"}));
app.use('/lib', express.static(path.join(__dirname, "../../lib/@dist"), {index: false}));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
