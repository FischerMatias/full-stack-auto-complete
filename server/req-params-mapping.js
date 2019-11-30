exports.getSearchParams =
    (req) => {
        const params = new URLSearchParams(req.url.slice(2));
        const search = params.get("searchText");
        const size = parseInt(params.get("size"));

        return { size, search };
    };
