// import module:
import { identicon } from 'minidenticons';

exports.handler = async function (event, context) {
    // get name input:
    let name = event.queryStringParameters.name || 'unnamed';
    // calculate:
    let svg = identicon(name);
    // return the resulte:
    return {
        // HTTP 200:
        statusCode: 200,
        // response type:
        headers: {
            'content-type': 'image/svg+xml'
        },
        body: svg
    };
};