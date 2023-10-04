import {
    getLocalesEN,
    getLocalesDE,
    getLocalesES
} from "../model/locale.model.js"

const httpGetLocalesEN = async (req, res, next) => {
    try {
        const locale = await getLocalesEN()
        res.json(
            locale.translation
        )
    } catch (error) {
        next(error)
    }
}

const httpGetLocalesDE = async (req, res, next) => {
    try {
        const locale = await getLocalesDE()
        res.json(
            locale.translation
        )
    } catch (error) {
        next(error)
    }
}

const httpGetLocalesES = async (req, res, next) => {
    try {
        const locale = await getLocalesES()
        res.json(
            locale.translation
        )
    } catch (error) {
        next(error)
    }
}

export { httpGetLocalesEN, httpGetLocalesDE, httpGetLocalesES }