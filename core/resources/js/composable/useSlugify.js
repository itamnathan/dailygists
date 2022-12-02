
export function useSlugify() {
    function slugify(params) {

        return params.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-');
    }

    return { slugify }
}