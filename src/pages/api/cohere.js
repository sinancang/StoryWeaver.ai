import path from 'path';
import { promises as fs } from 'fs';

const cohere = require('cohere-ai');

cohere.init('FEOSf1ZmJfkWKBcgsE5eClAShxABsSC2TEbzn4o2')

const pronounMap = new Map();
pronounMap.set('he/him', ['he', 'him', 'his', 'himself'])
pronounMap.set('she/her', ['she', 'her', 'hers', 'herself'])
pronounMap.set('they/them', ['they', 'them', 'theirs', 'themselves'])
pronounMap.set('Xe/Xir', ['Xe', 'Xir', 'Xem', 'Xeir'])

export default async function handler(req, res) {
    /*
    const dbDir = path.join(process.cwd(), 'db');
    const db = dbDir + '/history.txt'


    if (section == 'introduction') {
        fs.writeFile(db, "")
    }
    if (section == 'middle' || section == 'conclusion') {
        fs.appendFile(db, "\n" + action)
    }

    const promptHistory = await fs.readFile(db, 'utf8');

    const promptHistory = ""
    */

    const response_text = await fetchSetting(req)


    /*
    if (section != 'option' && section != 'middle') {
        fs.appendFile(db, response_text)
    }

     */

    res.status(200).json({ text: response_text});
}

export async function fetchOptions() {
    let prompt = ""
    let response = await cohere.generate({
        model: 'command-xlarge-20221108',
        prompt: prompt,
        max_tokens: 100,
        temperature: 1.0,
        k: 0,
        p: 0.75,
        frequency_penalty: 1,
        presence_penalty: 1,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    });
    return response
}

export async function fetchSetting(req) {
    let prompt = "Our hero " + req.body['name'] + ", finds " + pronounMap.get(req.body['pronouns'])[3] + " feeling "
        + req.body['feeling'] + " today. So " + pronounMap.get(req.body['pronouns'])[0] + " decides to " + req.body['action'] +
        "What happens next? Write the introduction to " + req.body['name'] + "'s story.";

    let response = await cohere.generate({
        model: 'command-xlarge-20221108',
        prompt: prompt,
        max_tokens: 300,
        temperature: 2.0,
        k: 0,
        p: 0.75,
        frequency_penalty: 1,
        presence_penalty: 1,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    });
    return response.body.generations[0].text
}

export async function fetchConflict() {

}

export async function fetchResolution() {

}
