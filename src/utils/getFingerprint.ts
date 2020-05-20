import fp from "fingerprintjs2";

// We re-write the callback into a Promise style,
// so it plays nice with React Hooks
export default () => {
    return new Promise(resolve => {
        fp.get(components => {
            resolve(components);
        });
    });
}
