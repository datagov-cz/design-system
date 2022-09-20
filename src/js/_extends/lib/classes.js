/*!
 * Extends Classes.
 *
 * Main application file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 30/03/2017 NZDT
 */

/**
 * Module dependencies.
 */

/**
 * Main multi-class function.
 *
 * @param {any} args
 * @returns
 */

function classes(...args) {
    const constructors = [];

    /**
     * Skeleton Class.
     *
     * @class Class
     * @extends {MethodMissing}
     */

    class Class {

        /**
         * Creates an instance of Class.
         *
         * @memberOf Class
         */

        constructor(...opts) {
            for (const arg of args) {
                const props = Object.getOwnPropertyNames(arg.prototype);

                for (const prop of props) {
                    if (prop === 'constructor') {
                        constructors.push(arg.prototype.constructor);
                    } else {
                        Class.prototype[prop] = arg.prototype[prop];
                    }
                }
            }

            for (const constructor of constructors) {
                Object.assign(Class.prototype, new constructor(...opts));
            }
        }

    }

    return Class;
}

export default classes;
