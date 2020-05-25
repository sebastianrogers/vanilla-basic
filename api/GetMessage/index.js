module.exports = async function (context, req) {
    context.res = {
        body: {
            text: "Hi from the API",
        },
    };
};
