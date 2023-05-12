export function getStats(_, res) {
    res.send([{ "period": 1999, "province": "granada" }])
}

export function findByid(_, res) {
    res.send({ "period": "1999", "province": "granada" })
}

