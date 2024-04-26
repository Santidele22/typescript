"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ALLOWED_ORIGIN = [
    'http://localhost:3000'
];
function corsMiddleware(req, res, next) {
    const origin = req.headers.origin;
    if (ALLOWED_ORIGIN.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
}
exports.default = corsMiddleware;
