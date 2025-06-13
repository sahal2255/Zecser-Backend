"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const profile_route_1 = __importDefault(require("./routes/profile.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connect_1 = require("./config/db.connect");
dotenv_1.default.config();
const app = (0, express_1.default)();
console.log('DEBUG MONGO_URL:', process.env.MONGO_URL); // ✅ Must print the URL
(0, db_connect_1.dbConnect)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use('/api', profile_route_1.default);
app.use('/api/auth', auth_route_1.default);
const PORT = process.env.PORT || 3002;
console.log(PORT);
// app.get('/',(req:Request,res:Response)=>{
//     res.send('Zecser first project')
// })
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
