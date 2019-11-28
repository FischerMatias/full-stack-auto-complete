const isActive =
    ({ isActive }) =>
        isActive === "true";

const lowerCaseIncludes =
    (s1, s2) =>
        s1.toLowerCase().includes(s2.toLowerCase());

const containsSearch =
    ({ name }, search) =>
        lowerCaseIncludes(name, search);

const containsTag =
    (search, { tags }) =>
        tags.some(t => lowerCaseIncludes(search, t));

exports.filterSearch =
    (data, search)  =>
        data
            .filter( (product) =>
                isActive(product) && (
                    containsSearch(product, search) ||
                    containsTag(search, product)
                ));