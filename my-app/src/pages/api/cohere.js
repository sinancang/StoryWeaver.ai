const cohere = require('cohere-ai');

cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')

export default async function handler(req, res) {
    const name = req.body['name'];
    const feeling = req.body['feeling'];
    const action = req.body['action'];
    const pronouns = req.body['pronouns'];
    const section = req.body['section'];
    const promptHistory = req.body['promptHistory'];

    const pronounMap = new Map();
    pronounMap.set('he/him', ['he', 'him', 'his', 'himself'])
    pronounMap.set('she/her', ['she', 'her', 'hers', 'herself'])
    pronounMap.set('they/them', ['they', 'them', 'theirs', 'themselves'])
    pronounMap.set('Xe/Xir', ['Xe', 'Xir', 'Xem', 'Xeir'])

    const prompt = setPrompt()

    function setPrompt() {
        if (section == 'introduction') {
            return "Write me an introduction to a chaotic evil story where our hero " +
                name + ", finds " + pronounMap.get(pronouns)[3] + " feeling " + feeling + " today. So "
                + pronounMap.get(pronouns)[0] + " decides to " + action + ". What does " + pronounMap.get(pronouns)[0] + " see?";
        } else {
            return promptHistory + "\n Give an indexed list of four actions the character could take.";
        }
    }
    const response = await cohere.generate({
            model: 'command-xlarge-20221108',
            prompt: prompt,
            max_tokens: 200,
            temperature: 0.9,
            k: 0,
            p: 0,
            frequency_penalty: 1,
            presence_penalty: 1,
            stop_sequences: [],
            return_likelihoods: 'NONE'
    });
    console.log(response)
    res.status(200).json({ text: `${response.body.generations[0].text}`});
}
