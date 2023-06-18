"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const services_1 = __importDefault(require("./services"));
const mongoose = require("mongoose");
const config_1 = __importDefault(require("config"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const router = (0, express_1.default)();
router.set('views', path_1.default.join(__dirname, 'views'));
router.set("view engine", "ejs");
const storage = multer_1.default.diskStorage({
    destination: 'temp',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path_1.default.extname(file.originalname)}`);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 200 * 1024 * 1024
    },
    dest: "temp"
});
router.use(upload.any());
router.use(express_1.default.static('./public'));
//router.use(express.static(path.resolve('./public/')));
(0, utils_1.applyMiddleware)(middleware_1.default, router);
(0, utils_1.applyRoutes)(services_1.default, router);
(0, utils_1.applyMiddleware)(errorHandlers_1.default, router);
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(router);
mongoose
    .connect(`${config_1.default.get("MONGO_CRED.MONGO_PATH")}/${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {
    server.listen(PORT);
    console.log(`Server is running http://localhost:${PORT}...`);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=server.js.map