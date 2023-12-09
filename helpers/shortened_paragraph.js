/**
 * this function takes in a paragraph and returns the first sentence
 */
export default ({paragraph, threshold}) => {
    /**
     * threshold is the smallest number of characters that should be returned
     * if paragraph has at least that number of character
     */
    threshold = threshold || 50
    paragraph = (paragraph || '').trim()

    const sentences = paragraph.split('.')
        .map(s=>s.trim())
        .filter(s=>!!s)
    const resList = []
    let resText = ''


    for (let i=0; i<sentences.length; i+=1){
        resList.push(sentences[i])
        resText = resList.join('. ')
        if (resText.length >= threshold){
            return resText+"."
        }
    }

    return resText+"."
}