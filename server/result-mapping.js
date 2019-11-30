const toResult = (filteredData, resultSize) => {
    const queriedData = filteredData.slice(0, resultSize);

    return {
        res: queriedData,
        totals: {
            shown: queriedData.length,
            total: filteredData.length
        }
    };
};

exports.toJSONResult =
    (filteredData, resultSize) =>
        JSON.stringify(
            toResult(filteredData, resultSize)
        );
