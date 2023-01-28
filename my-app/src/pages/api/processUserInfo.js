const cohere = require('cohere-ai');

export default async function handler(req, res) {
    cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')
    // Check if adjective is an adjective
    const response = await cohere.classify({
            inputs: [req.body['describe']],
            examples: [
                { text: "apple", label: "No"},
                { text: "adventurous", label: "Yes"},
                { text: "hello", label: "No" },
                { text: "asdfg", label: "No" },
                { text: "tall", label: "Yes" },
                { text: "python", label: "No" },
                { text: "hard", label: "Yes"},
                { text: "happy", label: "Yes"},
                { text: "cute", label: "Yes"},
                { text: "evil", label: "Yes"},
                { text: "chaotic", label: "Yes"}
            ]
        }
    );
    // Check if feeling is a feeling

    res.status(200).json(
        {
            name: req.body['name'],
            adjective: req.body['describe'],
            is_adjective: response,
            feeling: req.body['feeling'],
            pronouns: req.body['pronouns'],
        }
    )
}
