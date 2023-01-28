const cohere = require('cohere-ai');

export default async function handler(req, res) {
    cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')
    const response = await cohere.generate({
            prompt: "what is your name?",
        }
    );
    console.log(response);
    res.status(200).json({ text: response})
}
