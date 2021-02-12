const fileValidator = (data) => {

    const filteredArr = (arr) => {
        return arr.filter(el => el != null && el !== '')
    }

    const firstRowLength = data[0].data.length

    const noEmptyFields = []

    const validData = data.map(item => {
        if (!item.data) {
            return console.error(item)
        }

        if (item.data.length === firstRowLength) {
            noEmptyFields.push(item.data)
        }

        const data = filteredArr(item.data)

        return data.length === firstRowLength ? data : null
    })

    const newValidData = filteredArr(validData)

    if (newValidData.length !== noEmptyFields.length) {
        return {error: true, formattedData: []}
    }

    const fieldNames = newValidData[0];
    const formattedData = newValidData.map((item, index) => {
        let data;
        if (index !== 0) {

            data = newValidData[0].reduce((obj, el, index) => ({
                ...obj,
                [fieldNames[index].toLowerCase()]: item[index],
            }), {});

        }
        return data;
    })

    return {
        error: false,
        formattedData: filteredArr(formattedData)
    }
}


export default fileValidator
