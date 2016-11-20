/// @license Propriety <http://license.url>
/// @copyright Copyright (C) Turbo Labz 2016 - All rights reserved
/// Unauthorized copying of this file, via any medium is strictly prohibited
/// Proprietary and confidential
///
/// @author Mubeen Iqbal <mubeen@turbolabz.com>
/// @company Turbo Labz <http://turbolabz.com>
/// @date 2016-11-20 14:44:13 UTC+05:00
///
/// @description
/// This Map class is the ES6 Map class equivalent for ES5.

/**
 * The Map class.
 * @returns {void}
 */
var Map = function() {
    this._keys = [];
    this._values = {};

    this.length = 0;
};

Map.prototype = {
    /**
     * Returns the function that created an instance's prototype. This is the
     * Map function by default.
     */
    get constructor() {
        return Map;
    },

    /**
     * Returns the number of key/value pairs in the Map object.
     */
    get size() {
        return this._keys.length;
    },

    /**
     * Removes all key/value pairs from the Map object.
     * @returns {void}
     */
    clear: function() {
        this._keys = [];
        this._values = {};
    },

    /**
     * Removes any value associated to the key and returns the value that
     * Map.prototype.has(key) would have previously returned.
     * Map.prototype.has(key) will return false afterwards.
     * @param {string} key The key to delete the key/value pair.
     * @returns {boolean} The value that Map.prototype.has(key) would have
     * returned before deleting the key/value pair.
     */
    delete: function(key) {
        var index = this._keys.indexOf(key);
        var hasKey = index > -1;

        if (hasKey) {
            this._keys.splice(index, 1);
            delete this._values[key];
        }

        return hasKey;
    },

    /**
     * Returns a new Iterator object that contains an array of [key, value] for
     * each element in the Map object in insertion order.
     * @returns {Array} An array of [key, value] for all key/value pairs.
     */
    entries: function() {
        var length = this._keys.length;
        var entries = new Array(length);

        for (var i = 0; i < length; ++i) {
            entries[i] = [this._keys[i], this._values[i]];
        }

        return entries;
    },

    /**
     * Calls callbackFn once for each key-value pair present in the Map object,
     * in insertion order. If a thisArg parameter is provided to forEach, it
     * will be used as the this value for each callback.
     * @param {function} callbackFn The callback function(value, key, map)
     * @param {object} thisArg Optional parameter to use as this value for each
     * callback.
     * @returns {void}
     */
    forEach: function(callbackFn, thisArg) {
        if (typeof callbackFn !== 'function') {
            throw new TypeError('The callbackFn is not a function!');
        }

        if (thisArg !== 'undefined') {
            callbackFn = callbackFn.bind(thisArg);
        }

        var length = this._keys.length;

        for (var i = 0; i < length; i++) {
            var key = this._keys[i];
            var value = this._values[key];
            callbackFn(value, key, this);
        }
    },

    /**
     * Returns the value associated to the key, or undefined if there is none.
     * @param {string} key The key to get value for.
     * @returns {object} The value against the key.
     */
    get: function(key) {
        if (has(key)) {
            return this._values[key];
        }

        return undefined;
    },

    /**
     * Returns a boolean asserting whether a value has been associated to the
     * key in the Map object or not.
     * @param {string} key The key to check for existence.
     * @returns {boolean} True if the key exists, false otherwise.
     */
    has: function(key) {
        return this._values.hasOwnProperty(key);
    },

    /**
     * Returns a new Iterator object that contains the keys for each element in
     * the Map object in insertion order.
     * @returns {Array} An array of all the keys in insertion order.
     */
    keys: function() {
        return this._keys;
    },

    /**
     * Sets the value for the key in the Map object. Returns the Map object.
     * @param {string} key A string representing the key for the entry.
     * @param {object} value An object representing the value for the entry.
     * @returns {Map} The map object.
     */
    set: function(key, value) {
        if (!this._values.hasOwnProperty(key)) {
            this._keys.push(key);
        }

        this._values[key] = value;
        return this;
    },

    /**
     * Returns a new Iterator object that contains the values for each element
     * in the Map object in insertion order.
     * @returns {Array} An array of all the value objects in insertion order.
     */
    values: function() {
        var length = this._keys.length;
        var values = new Array(length);

        for (var i = 0; i < length; ++i) {
            var key = this._keys[i];
            var value = this._values[key];
            values[i] = value;
        }

        return values;
    }
};

