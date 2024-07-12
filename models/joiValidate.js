const rawJoi = require("joi")
const ExpressErrors = require("../utils/expressErrors")
const sanitizeHtml = require("sanitize-html")

const extension = {
    type: 'string',
    base: rawJoi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not contain disallowed HTML tags',
    },
    rules: {
        escapeHTML: {
            method() {
                return this.$_addRule({ name: 'escapeHTML' });
            },
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) {
                    return helpers.error('string.escapeHTML', { value });
                }
                return clean;
            }
        }
    }
}

const Joi = rawJoi.extend(extension)


const validateRestaurant = (req, res, next) => {

    const RestaurantSchema = Joi.object({
        name: Joi.string().required().escapeHTML(),
        cuisine: Joi.string().required().escapeHTML(),
        price: Joi.string().required().escapeHTML(),
        description: Joi.string().required().escapeHTML(),
        // image: Joi.string().required(),
        location: Joi.string().required().escapeHTML(),
        deleted: Joi.array()

    })

    const JoiResult = RestaurantSchema.validate(req.body)

    const { error } = JoiResult

    if (error)
        throw new ExpressErrors(error.message, 500)

    next()

}

const validateReview = (req, res, next) => {
    const ReviewSchema = Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        body: Joi.string().required().escapeHTML()
    })
    const JoiResult = ReviewSchema.validate(req.body)

    const { error } = JoiResult
    if (error)
        throw new ExpressErrors(error.message, 500)
    next()
}

module.exports = { validateRestaurant, validateReview }