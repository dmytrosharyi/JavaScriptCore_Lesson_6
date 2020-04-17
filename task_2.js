function min() {
    var result = Number.POSITIVE_INFINITY;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < result) {
            result = arguments[i];
        }
    }
    return result;
}

min(1, 2, 0.5, 100, 1000);