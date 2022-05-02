import _ from 'lodash'


export function getSum(transaction, type) {
    let sum = _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            if (!type) return _.sumBy(objs, 'amount')
            return {
                'type': key,
                'color': objs[0].color,
                'total': _.sumBy(objs, 'amount')
            }
        })
        .value()
    return sum
}

export function getLabels(transaction) {
    let amountSum = getSum(transaction, 'type')
    let Total = _.sum(getSum(transaction))
    let percentage = _(amountSum)
        .map(objs => _.assign(objs, { percent: (100 * objs.total) / Total }))
        .value()

    return percentage
}

export function totalMinusExpenses(transaction) {
    //all expense need be remove from total amount
    let expense = _(transaction)
        .filter(obj => obj.type === 'Expense')
        .map(obj => obj.amount)
        .value()
    let total = _.sum(expense)
    return total


}

export function chartData(transaction, custom) {
    let bg = _.map(transaction, a => a.color)
    bg = _.uniq(bg)

    let dataValue = getSum(transaction)
    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bg,
                hoverOffset: 4,
            }]
        },
        options: {
            cutout: 115
        }
    }

    return custom ?? config
}

export function getTotal(transaction) {
    return _.sum(getSum(transaction))
}

//create function remove from total amount if type  is Expense using lodash


