let inputText = document.querySelector('.input-text')
let inputResult = document.querySelector('.text-result')

//Criptografar
function btnCode() {
    let textEncrypted = codeMessage(inputText.value)
    if (textEncrypted != '') {
        inputResult.value = textEncrypted
        showMessage()
    }
}

function codeMessage(messageCripto) {
    let dateMatrix = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    messageCripto = messageCripto.toLowerCase()

    for (let i = 0; i < dateMatrix.length; i++) {
        if (messageCripto.includes(dateMatrix[i][0])) {
            messageCripto = messageCripto.replaceAll(
                dateMatrix[i][0],
                dateMatrix[i][1]
            )
        }
    }
    return messageCripto
}

//Descriptografar

function btnUncode() {
    let textDescripted = decodeMessage(inputText.value)
    if (textDescripted != '') {
        inputResult.value = textDescripted
        showMessage()
    }
}

function decodeMessage(messageUncrypto) {
    let dateMatrix = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    messageUncrypto = messageUncrypto.toLowerCase()

    for (let i = 0; i < dateMatrix.length; i++) {
        if (messageUncrypto.includes(dateMatrix[i][1])) {
            messageUncrypto = messageUncrypto.replaceAll(
                dateMatrix[i][1],
                dateMatrix[i][0]
            )
        }
    }
    return messageUncrypto
}

//Mensagem criptografada

function showMessage() {
    document.querySelector('.errormessage').style.display = 'none'
    document.querySelector('.success').style.display = 'block'
}

// Copy Button

function btnCopy() {
    let copyText = document.querySelector('.text-result')
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    copyText.value = ''
}

//Resetar Código

function btnReset() {
    document.querySelector('.errormessage').style.display = 'block'
    document.querySelector('.success').style.display = 'none'
    document.querySelector('.text-result').value = ''
    document.querySelector('.input-text').value = ''
}
