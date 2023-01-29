import path from 'path';
import { promises as fs } from 'fs';

const cohere = require('cohere-ai');

cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')

export default async function handler(req, res) {
    const name = req.body['name'];
    const feeling = req.body['feeling'];
    const action = req.body['action'];
    const pronouns = req.body['pronouns'];
    const section = req.body['section'];

    const pronounMap = new Map();
    pronounMap.set('he/him', ['he', 'him', 'his', 'himself'])
    pronounMap.set('she/her', ['she', 'her', 'hers', 'herself'])
    pronounMap.set('they/them', ['they', 'them', 'theirs', 'themselves'])
    pronounMap.set('Xe/Xir', ['Xe', 'Xir', 'Xem', 'Xeir'])

    const dbDir = path.join(process.cwd(), 'db');
    const db = dbDir + '/history.txt'

    if (section == 'introduction') {
        fs.writeFile(db, "")
    }
    if (section == 'middle' || section == 'conclusion') {
        fs.appendFile(db, "\n" + action)
    }

    const promptHistory = await fs.readFile(db, 'utf8');

    const prompt = setPrompt();

    function setPrompt() {
        if (section == 'introduction') {
            return "Write me an introduction to a chaotic story where our hero " +
                name + ", finds " + pronounMap.get(pronouns)[3] + " feeling " + feeling + " today. So "
                + pronounMap.get(pronouns)[0] + " decides to " + action + ". What does " + pronounMap.get(pronouns)[0] + " see?";
        } else if (section == 'option') {
            return "Read this: " + promptHistory + "\nNow give an indexed list of four actions the character could take.";
        } else if (section == 'middle') {
            return "Continue this story: " + promptHistory + "\nDescribe a problem the hero faces next and give a list of four actions the hero can take.";
        } else if (section == 'conclusion') {
            return promptHistory + "\n Now write a conclusion as to how the hero resolves the conflict.";
        }
    }

    const response = await cohere.generate({
            model: 'command-xlarge-20221108',
            prompt: prompt,
            max_tokens: 200,
            temperature: 0.9,
            k: 0,
            p: 0.93,
            frequency_penalty: 1,
            presence_penalty: 1,
            stop_sequences: [],
            return_likelihoods: 'NONE'
    });

    const response_text = response.body.generations[0].text

    console.log('\n')
    console.log('\n')
    console.log(section)
    console.log('\n')
    console.log(action)
    console.log('\n')
    console.log(prompt)
    console.log('\n')
    console.log('\n')


    if (section != 'option' && section != 'middle') {
        fs.appendFile(db, response_text)
    }

    res.status(200).json({ text: response_text});
}
