exports.getSearchParams =
    (req) => {
        const params = new URLSearchParams(req.url.slice(2));
        const search = params.get("searchText");
        const resultSize = parseInt(params.get("shownProductsSize"));

        return { resultSize, search };
    };
