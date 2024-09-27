"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const zod_1 = require("zod");
function validate(zodSchema) {
    return (req, res, next) => {
        try {
            zodSchema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `Invalid ${issue.path.join('.')}: ${issue.message}`,
                }));
                res.status(400).json({ error: 'Invalid data', details: errorMessages });
            }
            else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}
