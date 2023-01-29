const cohere = require('cohere-ai');

cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')

export default async function handler(req, res) {
    const name = req.body['name'];
    const feeling = req.body['feeling'];
    const action = req.body['action'];
    const pronouns = req.body['pronouns'];

    const pronounMap = new Map();
    pronounMap.set('he/him', ['he', 'him', 'his', 'himself'])
    pronounMap.set('she/her', ['she', 'her', 'hers', 'herself'])
    pronounMap.set('they/them', ['they', 'them', 'theirs', 'themselves'])
    pronounMap.set('Xe/Xir', ['Xe', 'Xir', 'Xem', 'Xeir'])

    const prompt = "Write me an introduction to a chaotic evil story where our hero " +
        name + ", finds " + pronounMap.get(pronouns)[3] + " feeling " + feeling + " today. So "
        + pronounMap.get(pronouns)[0] + " decides to " + action +". What does " + pronounMap.get(pronouns)[0] + " see?";

    const response = await cohere.generate({
            model: 'command-xlarge-20221108',
            prompt: prompt,
            max_tokens: 300,
            temperature: 2.0,
            k: 0,
            p: 0.75,
            frequency_penalty: 0.39,
            presence_penalty: 0.39,
            stop_sequences: [],
            return_likelihoods: 'NONE'
    });
    res.status(200).json({ text: `${response.body.generations[0].text}`});
}
