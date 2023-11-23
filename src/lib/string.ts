export function createValidHtmlId(value) {
    const id = value ? value.replace(/\W/g, '_') : '_';
    return id.charAt(0).match(/[\d_]/g)?.length ? `id_${id}` : id;
}
