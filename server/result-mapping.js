const toResult = (filteredData, size) => {
    const queriedData = filteredData.slice(0, size);

    return {
        res: queriedData,
        totals: {
            shown: queriedData.length,
            total: filteredData.length
        }
    };
};

exports.toJSONResult =
    (filteredData, size) =>
        JSON.stringify(
            toResult(filteredData, size)
        );
