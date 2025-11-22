export function createAndDownloadTextFile(textToWrite: string, fileNameToSaveAs: string) {
    // Create a Blob object from the text content
    const textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' })

    // Create a link element
    const downloadLink = document.createElement('a')
    downloadLink.download = fileNameToSaveAs // Set the desired filename

    // Create a URL for the Blob and set it as the link's href
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)

    // Append the link to the body (it doesn't need to be visible)
    document.body.appendChild(downloadLink)

    // Programmatically click the link to trigger the download
    downloadLink.click()

    // Clean up by revoking the object URL and removing the link
    window.URL.revokeObjectURL(downloadLink.href)
    document.body.removeChild(downloadLink)
}
