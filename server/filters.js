const isActive =
    ({ isActive }) =>
        isActive === "true";

const lowerCaseIncludes =
    (targetString, includedString) =>
        targetString.toLowerCase().includes(includedString.toLowerCase());

const containsSearch =
    ({ name }, search) =>
        lowerCaseIncludes(name, search);

const containsTag =
    (search, { tags }) =>
        tags.some(tag => lowerCaseIncludes(search, tag));

exports.filterSearch =
    (data, search) =>
        data
            .filter((product) =>
                isActive(product) && (
                    containsSearch(product, search) ||
                    containsTag(search, product)
                ));
