const cohere = require('cohere-ai');

cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')

export default async function handler(req, res) {
    const name = req.body['name'];
    const feeling = req.body['feeling'];
    const action = "staying awake";
    const pronouns = req.body['pronouns'];

    console.log(pronouns);
    const prompt = "Write me chaotic evil story where our hero " + name + ", finds herself feeling " +
        feeling + " today. So she decides to" + action +". What does she see?";

    const response = await cohere.generate({
            model: 'command-xlarge-20221108',
            prompt: prompt,
            max_tokens: 300,
            temperature: 0.9,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
    });
    res.status(200).json({ text: `${response.body.generations[0].text}`});
}
